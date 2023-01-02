//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

let calculator = {
    add: function add(x, y) {
        return x + y;
    },
    subtract: function subtract(x, y) {
        return x - y;
    },
    multiply: function multiply(x, y) {
        return x * y;
    },
    divide: function divide(x, y) {
        return x / y;
    }
};

module.exports = calculator;
