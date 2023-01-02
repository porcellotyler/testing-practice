const capitalize = require('./capitalize.js');

test('Only strings', () => {
    expect(capitalize(1)).toBe(1);
});

test('Capitalization', () => {
    expect(capitalize('hello')).toMatch(/Hello/);
});

test('Only first letter of first word', () => {
    expect(capitalize('hello world')).toMatch(/Hello world/);
});
