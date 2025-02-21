import WidgetA from "./widgets/a.js";
import WidgetB from "./widgets/b.js";
import WidgetC from "./widgets/c.js";

const X = ((resolver = 'dynamic') => {
  // storing importedModules here just for the check if the widget was not imported as a module previously, though in this implementation, we know it won't be imported more than one time, this is just for safety and meeting the requirement.
  const importedModules = []
  //Here using widgetInstances to make sure that the Widget class has only one instance, and make the search in the recursions easy and optimal making it with the key of the object
  let widgetInstances = {};
  const errors = {}
  // setting an array here to not allow the init method be called more than one time for a specific root node
  const targets = [];
  // To be honest, didn't get the requirement of the resolver - having static or dynamic import,
  // because in this task, we know about the widgets only when recursion is happening, and inside a function, when you import something,
  // it can't be called static import, though used the static imports just to match the requirement
  if(resolver === 'static') {
    importedModules.push(...[
      { 'widgets/a': WidgetA },
      { 'widgets/b' : WidgetB },
      { 'widgets/c': WidgetC }
    ]);
  }
  const init = async (target, callback) => {
    if(targets.includes(target)) {
      throw new Error(`widgets with the id ${target.id} root already initialized.`);
    }
    targets.push(target);
    loadWidgets(target, callback);
  }

  const loadWidgets = (target, callback) => {
    findWidget(target).then(() => {
      callback(errors);
    });
  }

  const findWidget = async (target) => {
    let importedModule = null;
    const path = target.hasAttribute('widget') ? target.getAttribute('widget') : null
    if(resolver === 'dynamic' && path && !importedModules.includes(path)) {
      try {
        importedModule = await import(`./${path}.js`)
        importedModules.push(importedModule);
      } catch (e) {
        errors.importError = e
        return;
      }
    }
    if(path) {
      const WidgetClass = resolver === 'dynamic'
        ? importedModules.find((module) => module === importedModule).default
        : importedModules.find((module) => module[path])[path]
      widgetInstances[path] = new WidgetClass();
      widgetInstances[path].init(target, () => console.log(`Widget ${path} loading done`))
      if(target.children) {
        await iterateOnChildren(target)
      }
    }
    else {
      await iterateOnChildren(target)
    }
  }

  const iterateOnChildren = async(target) => {
    for(const child of target.children) {
      await findWidget(child)
    }
  }

  const destroyBottomTop = (target) => {
    if(target.children) {
      for(const child of target.children) {
        if(child.children) {
          destroyBottomTop(child)
        }
        if(child.hasAttribute('widget') && widgetInstances[child.getAttribute('widget')]) {
          widgetInstances[child.getAttribute('widget')].destroy()
        } else {
          destroyBottomTop(child)
        }
      }
    }
  }

  const destroy = (target) => {
    if(!targets.length) {
      throw new Error('No widgets to destroy.');
    }
    if(!targets.includes(target)) {
      throw new Error(`widget width root id ${target.id} is already getting destroyed`);
    }
    destroyBottomTop(target);
    widgetInstances = {}
    targets.splice(targets.indexOf(target), 1)
  }

  return { init, destroy }
})

export default X;
