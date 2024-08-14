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

function setUpButtons(input = "") {
    let calcButtons = document.querySelectorAll("li");

    calcButtons.forEach((element) => {
        element.addEventListener("click", (e) => {
            input += e.target.id;
            console.log(input);
        })
    })
}

function dissectInput(input) {
    let obj = {}
    let operands = [...input.matchAll(/[0-9]+/g)];
    let operators = [...input.matchAll(/[\+-\/*]/g)];
    
    obj.operands = operands;
    obj.operators = operators;

    return obj;
}

function main() {
    let input = "";
    setUpButtons(input);


}

main();

// while (true) {
//     let inputPrompt = prompt("Type the evaluation (only with +,-,*,/):");
//     evaluate(inputPrompt);
//     console.log(sum);
// }