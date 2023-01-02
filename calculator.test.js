/*const calculator = jest.createMockFromModule('./calculator');

calculator.add = jest.fn((x, y) => x + y); */

const calculator = require('./calculator');

jest.mock('./calculator', () => ({
    __esModule: true,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
}));

test('Addition', () => {
    expect(calculator.add(2, 6)).toBe(8);
});

test('Addition with negatives', () => {
    expect(calculator.add(-2, 6)).toBe(4);
});

test('Subtraction', () => {
    expect(calculator.subtract(8, 1)).toBe(7);
});

test('Subtraction with negatives', () => {
    expect(calculator.subtract(2, -5)).toBe(7);
});

test('Multiplication', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});

test('Multiplication with negatives', () => {
    expect(calculator.multiply(2, -5)).toBe(-10);
});

test('Division', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test('Division with negatives', () => {
    expect(calculator.divide(10, -2)).toBe(-5);
});
