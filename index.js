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

function evaluate(inputEvaluation) {
    inputEvaluation = inputEvaluation.replaceAll(" ", "");
    let inputs = inputEvaluation.split("");

    if (inputs.length !== 3) return;
    
    operand1 = inputs[0];
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
let calcButtons = document.querySelectorAll("li");

calcButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.id)
    })
})

// while (true) {
//     let inputPrompt = prompt("Type the evaluation (only with +,-,*,/):");
//     evaluate(inputPrompt);
//     console.log(sum);
// }