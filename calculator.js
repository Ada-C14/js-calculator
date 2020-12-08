const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

function getValidOperator(operator) {
  const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'];

  if (operators.includes(operator)) {
    return operator;
  } else {
    console.log(`${operator} is not a valid operator.`);
  }
}

function getValidNumber(number) {
  if (!isNaN(number)) {
    return parseInt(number);
  } else {
    console.log(`${number} is not a valid number.`);
  }
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  let num1 = getValidNumber(promptInput.num1);
  let num2 = getValidNumber(promptInput.num2);
  let operator = getValidOperator(promptInput.operation)

  if (operator === 'add' || operator === '+') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
  } else if (operator === 'subtract' || operator === '-') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
  }
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;
