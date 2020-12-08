
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operator: 'add',
}

const invalidNumInput = {
  num1: 'a',
  num2: 5,
  operator: 'add'
}

const invalidOpInput = {
  num1: 3,
  num2: 5,
  operator: '?'
}

const exampleSubtractionInput = {
  num1: 3,
  num2: 5,
  operator: 'subtract',
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operator: 'multiply',
}

const exampleDivisionInput = {
  num1: 10,
  num2: 5,
  operator: 'divide',
}

const exampleZeroDivisionInput = {
  num1: 10,
  num2: 0,
  operator: 'divide',
}


function validateNum(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a valid number!`);
  }
}

function validateOperator(operator) {
  const operators = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

  if (!operators.includes(operator)) {
    console.log(`${operator} is not a valid operator!`);
  }
}

function divideByZeroCheck(num) {
  if (num === 0) {
    return true;
  }
  else {
    return false; 
  }
}

const calculateUserInput = function (promptInput) {
  const num1 = promptInput.num1; 
  const num2 = promptInput.num2; 
  const operator = promptInput.operator; 

  validateNum(num1);
  validateNum(num2);
  validateOperator(operator);

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
  }
}

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?


// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

calculateUserInput(exampleAdditionInput);
calculateUserInput(exampleSubtractionInput);
calculateUserInput(exampleMultiplicationInput);
calculateUserInput(exampleDivisionInput);
calculateUserInput(exampleZeroDivisionInput);
calculateUserInput(invalidNumInput);
calculateUserInput(invalidOpInput);

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;