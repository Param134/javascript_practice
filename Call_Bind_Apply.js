//The call method is used to invoke a function immediately with a specified this value and individual arguments.

//functionName.call(thisValue, arg1, arg2, ...);

//In this example, call is used to invoke the greet function with this set to the person object.

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: "John" };

greet.call(person, "Alice");
// Output: Hello, Alice! My name is John.


//The apply method is similar to call, but it takes an array of arguments instead of listing them individually.

//functionName.apply(thisValue, [arg1, arg2, ...]);

//In this example, apply is used to invoke the calculateSum function with the values from the numbers array.

function calculateSum(a, b) {
    return a + b;
}

const numbers = [3, 7];

const sum = calculateSum.apply(null, numbers);
console.log(sum); // Output: 10


//The bind method is used to create a new function with a specified this value and initial arguments. It doesn't immediately invoke the function but returns a new function that can be called later.

//const newFunction = functionName.bind(thisValue, arg1, arg2, ...);

//In this example, bind is used to create a new function greetJohn with this set to the person object and an initial argument of "Alice".

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person1 = { name: "John" };

const greetJohn = greet.bind(person1, "Alice");
greetJohn();
// Output: Hello, Alice! My name is John.



