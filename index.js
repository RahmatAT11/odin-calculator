let number1 = null;
let number2 = null;
let operation = null;

const calculatorDisplay = document.querySelector('.display');
const input = calculatorDisplay.querySelector('.in span');
const output = calculatorDisplay.querySelector('.out span');
const digitButtons = Array.from(document.querySelector('#number-buttons').children);
const operatorButtons = Array.from(document.querySelector('#operator-buttons').children);

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

function clearDisplay() {
  number1 = null;
  number2 = null;
  operation = null;
  input.textContent = '';
  output.textContent = '';
}

const updateDisplay = (e) => {
  calculatorDisplay.textContent = e.target.textContent;
}

const populateNumbers = (e) => {
  if (input.textContent === '0' || input.textContent === '' || input.length > 0 || input.textContent.match(/[\+\-\*\/]/g)) {
    input.textContent = e.target.textContent;
    console.log("from first check: ", e.target.textContent);
  }
  else {
    input.textContent += e.target.textContent;
    console.log("from else check: ", e.target.textContent);
  }
}

const populateOperation = (e) => {
  if (e.target.id === 'equals') {
    number2 = parseFloat(input.textContent);

    const result = Math.ceil(operate(number1, number2, operation) * 1000) / 1000;

    number1 = result;
    number2 = null;
    operation = null;

    input.textContent = result;
    output.textContent = result;

    return;
  }

  if (e.target.id === 'clear') {
    clearDisplay();

    return;
  }

  if (operation === null && e.target.id !== 'equals' && e.target.id !== 'clear') {
    operation = e.target.id;
    number1 = parseFloat(input.textContent);
    input.textContent = e.target.textContent;
  } else {
    alert("Please complete the current operation before selecting a new one");
  }


}

digitButtons.forEach((button) => {
  button.addEventListener("click", populateNumbers);
})

operatorButtons.forEach((button) => {
  button.addEventListener("click", populateOperation);
})


