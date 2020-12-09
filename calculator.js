const calculateUserInput = function (error, promptInput) {

  const num1 = numValidation(promptInput.num1);
  const num2 = numValidation(promptInput.num2);
  const operation = operatorsValidation(promptInput.operation);

  if ( num1 !== 'error' && num2 !== 'error' ) {
    if (operation === 'add' || operation === '+') {
      addition(num1, num2);
    } else if (operation === 'subtract' || operation === '-') {
      subtraction(num1, num2);
    } else if (operation === 'multiply' || operation === '*') {
      multiplication(num1, num2);
    } else if (operation === 'divide' || operation === '/') {
      division(num1, num2);
      }
  }
};
const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'];

const numValidation = function (num) {
  if (isNaN(num)) {
    console.log(`${num} is not a number.`);
    return 'error';
  } else {
    return parseInt(num);
  }
}

const operatorsValidation = function (operator) {
  if (operators.includes(operator)) {
    return operator;
  } else {
    console.log('unsupported operator');
    return 'error';
  }
}

const addition = function (num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

const subtraction = function (num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

const multiplication = function (num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

const division = function (num1, num2) {
  if (num2 === 0) {
    console.log('You cannot divide by zero');
  } else {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  }
}

exports.calculateUserInput = calculateUserInput;


