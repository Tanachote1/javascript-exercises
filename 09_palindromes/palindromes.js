const palindromes = function (str) {
    const alphaCharacter = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const newStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphaCharacter.includes(character))
    .join('');

    const reversedString = newStr.split('').reverse().join('');

    return reversedString === newStr
};
// Do not edit below this line
module.exports = palindromes;
