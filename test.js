const person = { name: "John", age: 25, city:"Rajkot" };

let {name , ...rest} = person;

console.log(name);
console.log(rest.age);