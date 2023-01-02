const reverseString = require('./reverseString.js');

test('Only strings', () => {
    expect(reverseString(1)).toBe(1);
});

test('Reversal', () => {
    expect(reverseString('hello')).toMatch(/olleh/);
});

test('Keep capitalization', () => {
    expect(reverseString('Hello')).toMatch(/olleH/);
});

test('More than 1 word', () => {
    expect(reverseString('Hello world')).toMatch(/dlrow olleH/);
});
