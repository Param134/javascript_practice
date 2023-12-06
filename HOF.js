function hof_multiply(factor) {
    return function(number) {
        return number * factor;
    }
}

let double = hof_multiply(2)
let result = double(5)
console.log(result)
