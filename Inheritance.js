class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(){
        console.log("Woo!!")
    }
}

let myDog = new Dog("John");
console.log(myDog.makeSound());

