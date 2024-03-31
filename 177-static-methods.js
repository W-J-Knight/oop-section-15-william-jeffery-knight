class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static staticProperty = 'someValue';

  static getClass() {
    console.log("Rectangle");
  }

}
const rect = new Rectangle("Rect 1", 20, 20);
// rect.getClass();
Rectangle.getClass()
// console.log(rect.staticProperty)
console.log(Rectangle.staticProperty)
