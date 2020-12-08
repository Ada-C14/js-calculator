
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleSubtractionInput = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const exampleDivisionInput = {
  num1: 10,
  num2: 5,
  operation: 'divide',
}

const exampleZeroDivisionInput = {
  num1: 10,
  num2: 0,
  operation: 'divide',
}

const invalidNumInput = {
  num1: 'a',
  num2: 5,
  operation: 'add'
}

const invalidOpInput = {
  num1: 3,
  num2: 5,
  operation: '?'
}

const exampleExponentInput = {
  num1: 4,
  num2: 2,
  operation: 'exponent'
}

const exampleValidModInput = {
  num1: 4,
  num2: 2,
  operation: 'modulo'
}

const exampleInValidModInput = {
  num1: 4,
  num2: 0,
  operation: 'modulo'
}

function validateNum(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a valid number!`);
    return false 
  }
  else {
    return num 
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
  return (num === 0 ? true : false);
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
  const num1 = Number(promptInput.num1); 
  const num2 = Number(promptInput.num2); 
  const operator = promptInput.operation; 
  // const operator = validateOperator(promptInput.operation); 
  // const num1 = validateNum(Number(promptInput.num1)); 
  // const num2 = validateNum(Number(promptInput.num2)); 
  // const operator = validateOperator(promptInput.operation); 



  // validateNum(num1);
  // validateNum(num2);
  // validateOperator(operator);

  if (doCalculations(error, promptInput)) {
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
// else {
//     console.log('Cannot complete operation due to invalid operator and/or number(s)');
//   }
}

//   switch (operator) {
//     case 'add':
//     case '+':
//       console.log(`${num1} + ${num2} = ${num1 + num2}`);
//       break;
//     case 'subtract':
//     case '-':
//       console.log(`${num1} - ${num2} = ${num1 - num2}`);
//       break;
//     case 'multiply':
//     case '*':
//       console.log(`${num1} * ${num2} = ${num1 * num2}`);
//       break;
//     case 'divide':
//     case '/': 
//         if (divideByZeroCheck(num2)) {
//           console.log('You cannot divide by zero');
//           break;
//         }
//         else {
//           console.log(`${num1} / ${num2} = ${num1 / num2}`);
//           break;
//         }
//   }
// }

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

calculateUserInput({}, exampleAdditionInput);
calculateUserInput({}, exampleSubtractionInput);
calculateUserInput({}, exampleMultiplicationInput);
calculateUserInput({}, exampleDivisionInput);
calculateUserInput({}, exampleZeroDivisionInput); 
calculateUserInput({}, invalidNumInput);
calculateUserInput({}, invalidOpInput);
calculateUserInput({}, exampleExponentInput);
calculateUserInput({}, exampleInValidModInput);
calculateUserInput({}, exampleValidModInput);

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;