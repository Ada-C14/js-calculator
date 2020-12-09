// Helper methods
const operatorSign = function(operation) {
  switch (operation) {
    case 'add':
    case '+':
      return '+';
    case 'subtract':
    case '-':
      return '-';
    case 'multiply':
    case '*':
      return '*';
    case 'divide':
    case '/':  
      return '/';
    case 'exponentiate':
    case '**':
    case '^':
      return '**';
    case 'mod':
    case 'modulo':
    case '%':
      return '%'
    default: 
      return null;
  }
};

const addNums = function(num1, num2) {
  return num1 + num2;
};

const substractNums = function(num1, num2) {
  return num1 - num2;
};

const multiplyNums = function(num1, num2) {
  return num1 * num2;
};

const divideNums = function(num1, num2) {
  if (num2 == 0) {
    console.log('You cannot divide by zero');
  } else {
    return num1 / num2;
  }
};

const exponentiateNums = function(num1, num2) {
  return num1 ** num2;
}

const modNums = function(num1, num2) {
  return num1 % num2;
}

const isNumber = function(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a number`);
  } else if (parseFloat(num)) {
    return true; 
  } else if (num === 0 || num === '0') {
    return true;
  } else {
    console.log('Empty string cannot be operated on. Number must be entered');
  }
}

// // Example userInput
// const userInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

const calculateUserInput = function(error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  if (isNumber(promptInput.num1) && isNumber(promptInput.num2)){
    const num1 = Number(promptInput.num1);
    const num2 = Number(promptInput.num2);
    const operator = operatorSign(promptInput.operation.toLowerCase());
    
    const result = (function (operator){
      switch (operator) {
        case '+':
          return addNums(num1, num2);
        case '-':
          return substractNums(num1, num2);
        case '*':
          return multiplyNums(num1, num2);
        case '/':
          return divideNums(num1, num2);
        case '**':
          return exponentiateNums(num1, num2);
        case '%':
          return modNums(num1, num2);
        default:
          console.log(`unsupported operator`);   
      }
    })(operator);

    if (typeof result === 'number') {
      console.log(`${num1} ${operator} ${num2} = ${result}`);
    }
  }
}

// // Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 3.2,
//   operation: '^',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;