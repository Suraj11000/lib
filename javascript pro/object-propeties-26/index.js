class Shape{
    area(){
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI*this.radius**2
    }
}

class Square{
    constructor(side){
        super();
        this.side = side;
    }
    area(){
        return this.side**2
    }
}

let myCircle = new Circle(10);
let mySide = new Square(5);

console.log("Area of Circle = "+myCircle.area());
console.log("Area of Square = "+mySide.area());