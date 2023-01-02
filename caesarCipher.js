// A caesarCipher function that takes a string and returns it with each character “shifted”.
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];

function caesarCipher(input) {
    if (typeof input != "string") return input; 

    let indexes = [];

    // Turn string into array of all characters
    let characters = input.split('');
   
    // Find punctuation marks
    const punctuation = characters.filter(value => /[^\w\s\']|_/g.test(value));
    const punctuationIndexes = [];
    for (let i = 0; i < punctuation.length; i++) {
        for (let j = 0; j < characters.length; j++) {
            if (punctuation[i] == characters[j]) {
                characters.splice(j, 1); //could add placeholder of where punctuation is in array if needed
                punctuationIndexes.push(j);
            }
        }
    }
    
    let uppers = [];
    // Find indexes of uppercase letters and make lowercase in characters
    for (let i = 0; i < characters.length; i++) {
        if (characters[i] == characters[i].toUpperCase()) {
            uppers.push(i);
            characters.splice(i, 1, characters[i].toLowerCase());
        }
    }
    
    // Find index of characters in alphabet and push to indexes
    for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet[j] === characters[i]) {
                indexes.push(j);
            }
        }
    };
    
    let caesarIndexes = indexes.map(x => x + 1);
    let caesarWord = caesarIndexes.map(x => alphabet[x]);

    // For letters at indexes in upper array, make uppercase
    while (uppers.length > 0) {
        caesarWord.splice(uppers[0], 1, caesarWord[uppers[0]].toUpperCase());
        uppers.shift();
    }
    
    // For letters at indexes with punctuation, add punctuation
    while (punctuationIndexes.length > 0 && punctuation.length > 0) {
        caesarWord.splice(punctuationIndexes[0], 0, punctuation[0]);
        punctuationIndexes.shift();
        punctuation.shift();
    }

    return caesarWord.join('');
}

console.log(caesarCipher('Hello, world!'));

module.exports = caesarCipher;
