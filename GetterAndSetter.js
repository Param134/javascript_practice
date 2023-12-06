class Circle {
    constructor(radius) {
        this._radius = radius //Private properties with underscore
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if(newRadius > 0) {
            this._radius = newRadius
        } else {
            console.log("Radius should be greater than  zero")
        }
    }

    calculateArea() {
        return Math.PI * this._radius ** 2
    }
}

let myCircle = new Circle(3)
console.log("Area : ",myCircle.calculateArea())

console.log("Value from getter : ",myCircle.radius); // 3
myCircle.radius = 5;          // Setter
console.log("Value after setter : ",myCircle.radius); // 5