function getValidOperator(operator) {
  const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'];

  if (operators.includes(operator)) {
    return operator;
  }

  return undefined;
}

function getValidNumber(number) {
  if (!isNaN(number)) {
    return parseInt(number);
  }

  return undefined;
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  let num1 = getValidNumber(promptInput.num1);
  if (num1 == null) {
    console.log('invalid num1: ' + promptInput.num1);
  }

  let num2 = getValidNumber(promptInput.num2);
  if (num2 == null) {
    console.log('invalid num2: ' + promptInput.num2);
  }

  let operator = getValidOperator(promptInput.operation);
  if (operator == null) {
    console.log('invalid operator: ' + promptInput.operation);
  }

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
      if (num2 == 0) {
        console.log('You cannot divide by zero');
      }

      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
  }
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;