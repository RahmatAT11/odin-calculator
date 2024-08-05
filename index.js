function addition(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    
    return sum;
}

function substraction(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum -= number;
    }
    
    return sum;
}

function multiplication(...numbers) {
    let sum = 1;
    for (const number of numbers) {
        sum *= number;
    }
    
    return sum;
}

function division(...numbers) {
    let sum = 1;
    let counter = 0;

    for (const number of numbers) {
        if (counter !== 0) {
            sum /= number;
            counter++;
            continue;
        }

        sum = number;
        counter++;
    }
    
    return sum;
}

function evaluate(inputEvaluation) {
    inputEvaluation = inputEvaluation.replaceAll(" ", "");
    let inputs = inputEvaluation.split("");

    if (inputs.length !== 3) return;

    if (operand1 === null && sum === null) {

    } else {
        operand1 = inputs[0];
    }

    operand2 = inputs[2];
    operator = inputs[1];

    if (operator === "+") {
        sum = addition(operand1, operand2);
    } else if (operator === "-") {
        sum = substraction(operand1, operand2);
    } else if (operator === "*") {
        sum = multiplication(operand1, operand2);
    } else if (operator === "/") {
        sum = division(operand1, operand2);
    }

    operand1 = null;
    operand2 = null;
    operator = null;
}

let operand1, operand2, operator, sum = null;

let inputPrompt = prompt("Type the evaluation (only with +,-,*,/):");
evaluate(inputPrompt);
console.log(sum);