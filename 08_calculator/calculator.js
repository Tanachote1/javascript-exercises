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

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
