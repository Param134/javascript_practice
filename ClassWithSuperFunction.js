//In a subclass, the super() method is used to call the constructor of the parent class. It's necessary when you want to access the parent class's properties and methods.

//Explanation: super(sound) calls the Animal class's constructor, allowing the Dog class to set up the sound property.

class Animal {
    constructor(sound) {
        this.sound = sound;
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super(sound); // Call the parent class constructor
        this.name = name;
    }
}

const myDog = new Dog("Buddy", "Woof!");
console.log(myDog.name);  // "Buddy"
console.log(myDog.sound); // "Woof!"


