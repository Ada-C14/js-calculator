const exampleAdditionInput = {
    num1: 3,
    num2: 5,
    operation: 'add',
}

function validNum(num) {
    if (isNaN(parseInt(num))) {
        console.log(`${num} is not a number`);
    }
    return parseInt(num);
}

function validOperator(operation) {
    const acceptedOperations = ['add', 'subtract', 'multiply', 'divide', '+', '-', '*', '/']
    if (!acceptedOperations.includes(operation)) {
        console.log('Invalid operator');
    }
    return operation
}

const calculateUserInput = function(error, promptInput) {


    let num1 = validNum(promptInput.num1)
    let num2 = validNum(promptInput.num2)
    let operation = validOperator(promptInput.operation)

    if (operation === 'add' || operation === '+') {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operation === 'subtract' || operation === '-') {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (operation === 'multiply' || operation === '*') {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (operation === 'divide' || operation === '/') {
        if (num2 === 0) {
            console.log('You cannot divide by zero');
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
    }
}


exports.calculateUserInput = calculateUserInput;