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

//Grouping Objects by Property:

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eva', grade: 'B' }
];

const groupedByGrade = students.reduce((accumulator, student) => {
    const { grade, name } = student;
    (accumulator[grade] || (accumulator[grade] = [])).push(name);
    return accumulator;
}, {});

console.log(groupedByGrade);
// Output: { A: ['Alice', 'Charlie'], B: ['Bob', 'Eva'], C: ['David'] }


// Finding Maximum Value in an Array:

const values = [8, 3, 11, 5, 1];

const max = values.reduce((maxValue, currentValue) => {
    return Math.max(maxValue, currentValue);
}, values[0]);

console.log(max); // Output: 11


