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
    for (const number of numbers) {
        sum /= number;
    }
    
    return sum;
}

console.log(division(3, 2))