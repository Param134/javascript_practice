const numbers = [1, 2, 3];

let doubleNum = numbers.map((num) => num * 2);
console.log(numbers, doubleNum);

let oddNum = numbers.filter((num) => num % 2 != 0)
console.log(numbers, oddNum);

let arraySum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log(numbers, arraySum);

//Flattening an Array of Arrays

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


//Counting Occurrences of Array Elements:

const names = ['Alice', 'Bob', 'Charlie', 'Alice', 'David', 'Alice'];

const nameOccurrences = names.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

console.log(nameOccurrences);
// Output: { Alice: 3, Bob: 1, Charlie: 1, David: 1 }

