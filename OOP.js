// Encapsulation
class Car {
    constructor(model) {
        this.model = model;
    }

    startEngine() {
        console.log(`${this.model}'s engine started`);
    }
}

// Inheritance
class ElectricCar extends Car {
    chargeBattery() {
        console.log(`${this.model}'s battery is charging`);
    }
}

// Polymorphism
function operateVehicle(vehicle) {
    vehicle.startEngine();
}

const myCar = new Car("Toyota");
const myElectricCar = new ElectricCar("Tesla");

operateVehicle(myCar);
operateVehicle(myElectricCar);
myElectricCar.chargeBattery();
