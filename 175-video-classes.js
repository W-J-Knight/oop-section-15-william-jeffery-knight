class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
}

const square = new Rectangle("Square", 20, 20);
const square2 = new Rectangle("Square2", 40, 40);
console.log(square);
console.log(square2);
