//The prototype is an OBJECT associated with every function and class by default in JavaScript. It allows you to add properties and methods that will be shared among all instances.

//Explanation: The sayHello method is added to the prototype, ensuring that all instances of Person can access it.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

const john = new Person("John", 25);
john.sayHello(); // "Hello, my name is John"

//Inheritance in JavaScript is achieved through prototypes. One object can inherit properties and methods from another

//Explanation: Student inherits from Person, utilizing the Object.create method to set up the prototype chain.

function Student(name, age, grade) {
    Person.call(this, name, age); // Call the parent constructor
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype); // Inherit the prototype

const student1 = new Student("Alice", 18, "A");
student1.sayHello(); // "Hello, my name is Alice"

