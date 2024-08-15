function addition(...numbers) {
    let sum = numbers[0] + numbers[1];
    
    return sum;
}

function substraction(...numbers) {
    let sum = numbers[0] - numbers[1];
    
    return sum;
}

function multiplication(...numbers) {
    let sum = numbers[0] * numbers[1];
    
    return sum;
}

function division(...numbers) {
    let sum = numbers[0] / numbers[1];
    
    return sum;
}

function evaluate(operand1, operator, operand2) {
    if (!operand1 && !operator && !operand2) {
        return "ERROR: You need to provide value for each argument";
    }

    if (operand1 === 0 && operand2 === 0 && operator === "/") {
        return "ERROR: Result is undefined";
    }

    if (operand2 === 0 && operator === "/") {
        return "ERROR: Cannot divide by zero";
    }

    let sum;
    console.log(operator);
    if (operator === "+") {
        sum = addition(operand1, operand2);
    } else if (operator === "-") {
        sum = substraction(operand1, operand2);
    } else if (operator === "*") {
        sum = multiplication(operand1, operand2);
    } else if (operator === "/") {
        sum = division(operand1, operand2);
    }

    return sum;
}

function setUpButtons() {
    let calcButtons = document.querySelectorAll("li");
    let btnOperators = document.querySelectorAll(".calculation li");
    const display = document.querySelector(".container > #display");
    const resetACbtn = document.querySelector("#AC");

    resetACbtn.addEventListener('click', (e) => {
        display.textContent = "0";
        console.log(e.target.id);
        resetCalculatorConfigs();
        main();
    })

    calcButtons.forEach((element) => {
        if (element.id === "AC") {
            return;
        }

        if (element.id === "=") {
            element.addEventListener('click', (e) => {
                evaluateInput();
                disableBtns();
            })
        }
        element.addEventListener("click", readBtn)
    })

    btnOperators.forEach((element) => {
        element.addEventListener("click", evaluateInput);
    })
}

function readBtn(e) {
    calculatorConfigs.input += e.target.id;
    display.textContent = calculatorConfigs.input;
}

function disableBtns() {
    let calcButtons = document.querySelectorAll("li");

    calcButtons.forEach((element) => {
        element.removeEventListener('click', readBtn);
        element.removeEventListener('click', evaluateInput);
    })
}

function evaluateInput(e) {
    const display = document.querySelector(".container > #display");

    if (calculatorConfigs.operand1 === null) {
        console.log("update! 1")
        calculatorConfigs.operand1 = +calculatorConfigs.input.slice(0, calculatorConfigs.input.length-1);
        calculatorConfigs.operatorIndex = calculatorConfigs.input.length - 1;
        calculatorConfigs.operator = e.target.id;
    }

    if (calculatorConfigs.operand2 === null && typeof calculatorConfigs.operand1 === "number" && isCalculationPossible(calculatorConfigs.input)) {
        console.log("update! 2")
        calculatorConfigs.operand2 = +calculatorConfigs.input.slice(calculatorConfigs.operatorIndex + 1, calculatorConfigs.input.length-1);
        console.log(calculatorConfigs.operand2);
        calculatorConfigs.sum = evaluate(calculatorConfigs.operand1, calculatorConfigs.operator, calculatorConfigs.operand2);

        if (typeof calculatorConfigs.sum === "string" && calculatorConfigs.sum.includes("ERROR")) {
            calculatorConfigs.input = calculatorConfigs.sum;
            display.textContent = calculatorConfigs.input;
            disableBtns();
            return;
        }

        calculatorConfigs.operator = e.target.id;

        const newInput = calculatorConfigs.sum.toString() + calculatorConfigs.operator;
        
        calculatorConfigs.input = newInput;
        calculatorConfigs.operand1 = calculatorConfigs.sum;
        calculatorConfigs.operatorIndex = calculatorConfigs.input.length - 1;
        calculatorConfigs.operand2 = null;

        display.textContent = calculatorConfigs.input;
        console.log(calculatorConfigs);
    }
}

function isCalculationPossible(input) {
    let obj = {}
    let operands = [...input.matchAll(/[0-9]+/g)];
    let operators = [...input.matchAll(/[\+-\/*]/g)];

    obj.operands = operands;
    obj.operators = operators;

    if (obj.operands.length > 1 && obj.operators.length > 0) {
        return true;
    }

    return false;
}

function resetCalculatorConfigs() {
    calculatorConfigs.operand1 = null;
    calculatorConfigs.operand2 = null;
    calculatorConfigs.operator = null;
    calculatorConfigs.sum = null;
    calculatorConfigs.input = null;
}

function main() {
    calculatorConfigs.input = "";
    setUpButtons();
}


const calculatorConfigs = {
    operand1: null,
    operand2: null,
    operator: null,
    operatorIndex: 0,
    sum: null,
    input: null,
}

main();

// while (true) {
//     let inputPrompt = prompt("Type the evaluation (only with +,-,*,/):");
//     evaluate(inputPrompt);
//     console.log(sum);
// }