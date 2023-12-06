// mathOperations.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './mathOperations';

console.log(add(5, 3)); // Output: 8
console.log(subtract(7, 2)); // Output: 5
