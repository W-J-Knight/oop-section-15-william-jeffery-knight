class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  area(){
    return this.height * this.width
  }

  perimeter(){
    return 2 * (this.width + this.height) 
  }

  isSquare (){
    return this.width === this.height
  }

  logArea(){
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle("Square", 20, 20);
const square2 = new Rectangle("Square2", 40, 40);
// console.log('square:',square);
// console.log('square2:', square2);
// console.log(`Area of square ${square.area()}`);
// console.log(`Area of square2 ${square2.area()}`);
// console.log(Object.getPrototypeOf(square))
console.log(`${square.name} has an area of ${square.area()} and perimeter of ${square.perimeter()}\n But is it a square ${square.isSquare()?'yes':'no'}`)
square.logArea()
