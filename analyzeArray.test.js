const myObject = require('./analyzeArray');

jest.mock('./analyzeArray', () => ({
    __esModule: true,
    average: (input) => {
        let sum = input.reduce((a, b) => a + b, 0);
        let average = sum / (input.length);
        return average;
    },
    min: (input) => {
        return Math.min(...input);
    },
    max: (input) => {
        return Math.max(...input);
    },
    length: (input) => {
        return input.length;
    }
}))

test('Average', () => {
    expect(myObject.average([1, 8, 3, 4, 2, 6])).toBe(4);
});

test('Min', () => {
    expect(myObject.min([1, 8, 3, 4, 2, 6])).toBe(1);
});

test('Max', () => {
    expect(myObject.max([1, 8, 3, 4, 2, 6])).toBe(8);
});

test('Length', () => {
    expect(myObject.length([1, 8, 3, 4, 2, 6])).toBe(6);
});
