// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(string) {
    if (typeof string != "string") return string;

    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;
