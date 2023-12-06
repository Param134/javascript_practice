// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Rest Operator
const sum = (a, b, ...rest) => {
    console.log(rest); // Output: [3, 4, 5]
    return a + b;
};

console.log(sum(1, 2, 3, 4, 5)); // Output: 3
