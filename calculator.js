const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

function validateNum(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a valid number!`);
    return false 
  } 
  else if (num === '') {
    console.log('Number cannot be blank!');
  }
  else {
    return true 
  }
}

function validateOperator(operator) {
  const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/', 'exponent', '**', 'modulo', '%']

  if (!operators.includes(operator)) {
    console.log(`${operator} is not a valid operator!`);
    return false 
  }
  else {
    return operator 
  }
}

function divideByZeroCheck(num) {
  return (num === 0);
}

function doCalculations(error, promptInput) {
  if (validateNum(promptInput.num1) && validateNum(promptInput.num2) && validateOperator(promptInput.operation)) {
    return true
  } 
  else {
    return false 
  }
}

const calculateUserInput = function (error, promptInput) {
  if (doCalculations(error, promptInput)) {
    const num1 = Number(promptInput.num1); 
    const num2 = Number(promptInput.num2); 
    const operator = promptInput.operation; 
    switch (operator) {
      case 'add':
      case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case 'subtract':
      case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case 'multiply':
      case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
      case 'divide':
      case '/': 
          if (divideByZeroCheck(num2)) {
            console.log('You cannot divide by zero');
            break;
          }
          else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
          }
      case 'exponent': 
      case '**':
        console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
        break;
      case 'modulo':
      case '%':
        if (divideByZeroCheck(num2)) {
          console.log('You cannot divide by zero');
          break;
        }
        else {
          console.log(`${num1} % ${num2} = ${num1 % num2}`);
          break;
        }
    }
  }
}

calculateUserInput({}, exampleAdditionInput);

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;