const caesarCipher = require('./caesarCipher');

test('Only strings', () => {
    expect(caesarCipher(1)).toBe(1);
});

test('Decipher 1 word', () => {
    expect(caesarCipher('hello')).toMatch(/ifmmp/);
});

test('Keep case', () => {
    expect(caesarCipher('Hello')).toMatch(/Ifmmp/);
});

test('Punctuation', () => {
    expect(caesarCipher('Hello!')).toMatch(/Ifmmp!/);
});

test('Multiple punctuation', () => {
    expect(caesarCipher('Hello, world!')).toMatch(/Ifmmp,Xpsme!/);
});
