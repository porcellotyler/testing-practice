// A reverseString function that takes a string and returns it reversed.
function reverseString(string) {
    if (typeof string != "string") return string

    return string.split("").reverse().join("");
}

module.exports = reverseString;
