const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, number) => sum + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((multiple, number) => multiple * number);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
	return (n == 0) ? 1 : (n == 1) ? n : n * factorial(n-1);
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
