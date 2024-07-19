function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (a === 0 || b === 0) return 0;
  else if (a < b) return a - b;
  else return b - a;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, subtract, divide, multiply };
