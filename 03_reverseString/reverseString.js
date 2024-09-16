const reverseString = function(string) {
    let splitstring = string.split("");
    let reversesstring = splitstring.reverse();
    let joinstring = reversesstring.join("")
    return joinstring
};

// Do not edit below this line
module.exports = reverseString;
