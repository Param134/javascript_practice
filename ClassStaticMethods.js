//Static methods are associated with the class rather than instances of the class. They can be called on the class itself.

//Explanation: add and multiply are static methods, meaning they can be called directly on the class without creating an instance

class MathsMethods {
    static add(a,b) {
        return a + b;
    }

    static multiple(a,b) {
        return a * b;
    }
}

console.log(MathsMethods.add(2,3));
console.log(MathsMethods.multiple(2,3));