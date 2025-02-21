import BaseWidgetClass from "./BaseWidgetClass.js";

const text = '<div class="textBlock">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>';
const button = '<div class="widgetButtonBlock"><button id="widgetCButton">Widget C Button</button></div>'
class WidgetC extends BaseWidgetClass {
  constructor() {
    super();
    this.contentRoot.setAttribute("id", "widgetCContainer");
    console.log('Widget C initialized')
  }

  widgetButtonClickHandler () {
    // logging this here to show that automatic bound worked from the Base Class
    console.log(this, 'this should be the widget and not the button')
    alert('Widget C button clicked')
  }

  init(target, done = null) {
    // Here added just a simple markup with a simple alert, I guess no complications were necessary in the widget
    this.contentRoot.innerHTML = `<div class="widgetContainer">${text} ${button}</div>`;
    target.appendChild(this.contentRoot);
    target.querySelector('#widgetCButton').addEventListener('click', this.widgetButtonClickHandler)
    if(typeof done === 'function') {
      done()
    }
  }

  destroy() {
    console.log('WidgetC destroyed')
    this.contentRoot.remove();
  }
}

export default WidgetC
