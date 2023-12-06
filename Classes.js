//Simple class

//In JavaScript classes, the constructor method is called when an object is instantiated from the class. It's where you initialize object properties. 

//Explanation: The constructor initializes the width and height properties when a new Rectangle object is created.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const myReactangle = new Rectangle(5,8);
console.log(myReactangle.calculateArea());