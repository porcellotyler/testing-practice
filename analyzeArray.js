// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
function analyzeArray(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let average = sum / (input.length);
    
    let min = Math.min(...input);
    let max = Math.max(...input);

    let length = input.length;

    let myObject = {};
    myObject.average = average;
    myObject.min = min;
    myObject.max = max;
    myObject.length = length;

    return myObject;
}

module.exports = analyzeArray;
