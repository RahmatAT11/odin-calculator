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
    let sum = 0;
    for (const number of numbers) {
        sum *= number;
    }
    
    return sum;
}