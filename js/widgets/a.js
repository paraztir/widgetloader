import BaseWidgetClass from "./BaseWidgetClass.js";

const text = '<div class="textBlock">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>';
const button = '<div class="widgetButtonBlock"><button id="widgetAButton">Widget A Button</button></div>'
class WidgetA extends BaseWidgetClass {

  constructor() {
    super();
    this.contentRoot.setAttribute("id", "widgetAContainer");
    console.log('WidgetA initialized')
  }

  widgetButtonClickHandler () {
    // logging this here to show that automatic bound worked from the Base Class
    console.log(this, 'this should be the widget and not the button')
    alert('Widget C button clicked')
  }

  init(target, done = null) {
    // Here added just a simple markup with a simple alert, I guess no complications were necessary in the widget
    this.contentRoot.innerHTML = `<div class="widgetContainer">${text} ${button}</div>`
    target.appendChild(this.contentRoot);
    target.querySelector('#widgetAButton').addEventListener('click', this.widgetButtonClickHandler)
    if(typeof done === 'function') {
      done()
    }
  }
  destroy() {
    console.log('WidgetA destroyed')
    this.contentRoot.remove();
  }
}

export default WidgetA
