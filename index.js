function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return number1 / number2;
}

let number1 = 10;
let number2 = 5;
let operation = "add";

function operate(number1, number2, operation) {
  switch (operation) {
    case "add":
      return add(number1, number2);
    case "subtract":
      return subtract(number1, number2);
    case "multiply":
      return multiply(number1, number2);
    case "divide":
      return divide(number1, number2);
    default:
      throw new Error("Invalid operation");
  }
}
