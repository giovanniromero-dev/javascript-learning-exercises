// Herencia de clases en JavaScript

class Rectangle {
    constructor(widthIn, heightIn) {
        this.width = widthIn;
        this.height = heightIn;
    }

    getSurface() {
        return this.width * this.height;
    }
}


let polygon1 = new Rectangle(10, 20);
console.log(polygon1.getSurface());

class Square extends Rectangle {

    constructor(side) {
        super(side, side);
    }

    getSquareSurface() {
        return super.getSurface();
    }
}

let polygon2 = new Square(15);
console.log(polygon2.getSquareSurface());