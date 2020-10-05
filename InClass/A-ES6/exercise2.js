class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
    
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas



class triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Triangle";
    this.sides = 3;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height / 2;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let t = new triangle(50, 60);
t.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + t.area);


class Trapezoid extends Polygon {
  constructor(height, base1, base2) {
      super(height);
      this.name = "Trapezoid";
      this.area = (base1 + base2) * height / 2;
  }
}

let tp = new Trapezoid(10, 20, 30);
console.log(tp.area);
console.log(tp.sayName());