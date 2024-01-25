// Задача 1

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
  
  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }
  
  toString() {
    return `Прямоугольник с шириной ${this.width} и высотой ${this.height} имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`;
  }
}

const rect = new Rectangle(100, 30);
console.log(rect.toString());

// Задача 2

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    return `Rectangle: ${this.width} x ${this.height}`;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const sq = new Square(5);
console.log(sq.toString());