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

    let sum;
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
    let btnOperators = document.querySelectorAll(".calculation li")
    const display = document.querySelector(".container > #display");

    calcButtons.forEach((element) => {
        element.addEventListener("click", (e) => {
            calculatorConfigs.input += e.target.id;
            display.textContent = calculatorConfigs.input;
        })
    })

    btnOperators.forEach((element) => {
        element.addEventListener("click", (e) => {
            if (calculatorConfigs.operand1 === null) {
                calculatorConfigs.operand1 = +calculatorConfigs.input.slice(0, calculatorConfigs.input.length-1);
                calculatorConfigs.operatorIndex = calculatorConfigs.input.length - 1;
                calculatorConfigs.operator = e.target.id;
            }

            if (calculatorConfigs.operand2 === null && calculatorConfigs.operand1) {
                console.log("update!")
                calculatorConfigs.operand2 = +calculatorConfigs.input.slice(calculatorConfigs.operatorIndex, calculatorConfigs.input.length-1);
                calculatorConfigs.sum = evaluate(calculatorConfigs.operand1, calculatorConfigs.operator, calculatorConfigs.operand2);

                const newInput = calculatorConfigs.sum.toString() + calculatorConfigs.operator;
                
                calculatorConfigs.input = newInput;
                calculatorConfigs.operand1 = calculatorConfigs.sum;
                calculatorConfigs.operator = e.target.id;
                calculatorConfigs.operatorIndex = calculatorConfigs.input.length - 1;
                calculatorConfigs.operand2 = null;

                display.textContent = calculatorConfigs.input;

                console.log(calculatorConfigs)
            }
        })
    })

}

// function spreadOperandsAndOperators(input) {
//     let obj = {}
//     let operands = [...input.matchAll(/[0-9]+/g)];
//     let operators = [...input.matchAll(/[\+-\/*]/g)];

//     obj.operands = operands;
//     obj.operators = operators;

//     return obj;
// }

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