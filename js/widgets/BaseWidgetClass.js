class BaseWidgetClass {
  constructor() {
    this.contentRoot = document.createElement('div');
    this.bindMethodsEndingWithHandler();
  }

  bindMethodsEndingWithHandler () {
    const prototype = Object.getPrototypeOf(this);
    const methodsNamesList = Object.getOwnPropertyNames(prototype);
    methodsNamesList.forEach((methodName) => {
      if(methodName.includes('Handler')) {
        this[methodName] = this[methodName].bind(this);
      }
    })
  }
}

export default BaseWidgetClass;
