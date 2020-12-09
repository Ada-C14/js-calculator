
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'

const calculateUserInput = function (error, promptInput) {
  if (!checkNumber(promptInput.num1)) {
    console.log(`${promptInput.num1} is not a number.`);
  } else if (!checkNumber(promptInput.num2)) {
    console.log(`${promptInput.num2} is not a number.`);
  } else {
    console.log(checkOperation(promptInput));
    return null;
  }
};

const checkNumber = function(num) {
  const regex = /^-?[0-9]+$/;
  return regex.test(num);
};

const checkOperation = function(promptInput) {
  const num1 = Number(promptInput.num1);
  const num2 = Number(promptInput.num2);

  switch (promptInput.operation.toLowerCase()) {
    case 'add':
    case '+':
      return `${num1} + ${num2} = ${num1 + num2}`;
    case 'subtract':
    case '-':
      return `${num1} - ${num2} = ${num1 - num2}`;
    case 'multiply':
    case '*':
      return `${num1} * ${num2} = ${num1 * num2}`;
    case 'divide':
    case '/':
      if (num2 === 0) {
        return 'You cannot divide by zero';
      } else {
        return `${num1} / ${num2} = ${num1 / num2}`;
      }
    case 'exponent':
    case '^':
      return `${num1}^${num2} = ${num1 ** num2}`;
    default:
      return 'unsupported operator';
  }
};

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;