const numbers = [1, 2, 3];

let doubleNum = numbers.map((num) => num * 2);
console.log(numbers, doubleNum);

let oddNum = numbers.filter((num) => num % 2 != 0)
console.log(numbers, oddNum);

let arraySum = numbers.reduce((total, num) => total + num);
console.log(numbers, arraySum);