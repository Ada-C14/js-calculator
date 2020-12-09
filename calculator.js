const add = {
  name: '+',
  do: function(a, b) {
    return a + b
  }
}

const subtract = {
  name: '-',
  do: function(a, b) {
    return a - b
  }
}

const multiply = {
  name: '*',
  do: function(a, b) {
    return a * b
  }
}

const divide = {
  name: '/',
  do: function(a, b) {
    if (b == 0) {
      return false
    } else {
      return a / b
    }
  }
}

const printOutput = function (a, b, operation) {
  console.log(`${a} ${operation.name} ${b} = ${operation.do(a, b)}`);
}

const calculateUserInput = function (errors, input) {
  if (isNaN(input.num1)) {
    console.log(`${input.num1} is not a number.`);
    return false;
  } else if (isNaN(input.num2)) {
    console.log(`${input.num2} is not a number.`);
    return false;
  }
  
  switch(input.operation) {
    case 'add':
    case '+':
      printOutput(+input.num1, +input.num2, add);
      break;
    case 'subtract':
    case '-':
      printOutput(+input.num1, +input.num2, subtract);
      break;
    case 'multiply':
    case '*':
      printOutput(+input.num1, +input.num2, multiply);
      break;
    case 'divide':
    case '/':
      if (+input.num2 == 0) {
        console.log('You cannot divide by zero'); 
      } else {
      printOutput(+input.num1, +input.num2, divide);
      }
      break;
    default:
      console.log('unsupported operator');
  }
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;