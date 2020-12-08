const validNumber = function(number) {
  if (isNaN(parseInt(number))) {
    console.log(`${number} is not a number`);
    }
  return number;
} 

const calculateUserInput = function (error, promptInput) {
  const validOperations = ['add', 'subtract', 'multiply', 'divide', 'modulus', 'exponent', '+', '-', '*', '/', '%', '**'];
  const invalidZeroOperations = ["divide", "/", "modulus", "%"];

  // check that operator is valid
  if (!validOperations.includes(promptInput.operation)) {
    console.log('Unsupported Operator');
  }

  // check that numbers are valid
  const num1 = parseInt(validNumber(promptInput.num1));
  const num2 = parseInt(validNumber(promptInput.num2));

  // make sure not trying to divide/mod by 0
  if (invalidZeroOperations.includes(promptInput.operation) && num2 == 0) {
    console.log('You cannot divide or take the modulus of a number by zero');
  }

  // do the math
  if (promptInput.operation == 'add' || promptInput.operation == '+') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (promptInput.operation == 'subtract' || promptInput.operation == '-') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else if (promptInput.operation == 'multiply' || promptInput.operation == '*') {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  } else if (promptInput.operation == 'divide' || promptInput.operation == '/') {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  } else if (promptInput.operation == 'modulus' || promptInput.operation == '%') {
    console.log(`${num1} % ${num2} = ${num1 % num2}`);
  } else {
    console.log(`${num1} ^ ${num2} = ${num1 ** num2}`);
  }

}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;