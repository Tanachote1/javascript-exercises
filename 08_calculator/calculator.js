const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
  let sum = arr.reduce((total, current) => total + current, 0);
  return sum
}

const multiply = function(arr) {
  let sum = arr.reduce((total, current) => total * current);
  return sum
};

const power = function(a,b) {
	let sum = Math.pow(a, b);
  return sum
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
