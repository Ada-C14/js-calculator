
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'

// const isValid = function(num1, num2, operator) {
//   if (num1 === '') {
//     return 'You did not enter a first number';
//   } else if (num2 === '') {
//     return 'You did not enter a second number';
//   } else if (operator === '') {
//     return'You did not enter an operator';
//   }
// }

const addNums = function(a, b) {
  let result = a + b
  return `${a} + ${b} = ${result}`
}

const subtractNums = function(a, b) {
  let result = a - b
  return `${a} - ${b} = ${result}`
}

const multiplyNums = function(a, b) {
  let result = a * b
  return `${a} * ${b} = ${result}`
}

const divideNums = function(a, b) {
  if (b === 0) {
    return 'You cannot divide by zero'
  } else {
    let result = a / b
    return `${a} / ${b} = ${result}`
  }
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
  let num1String = promptInput.num1
  let num2String = promptInput.num2
  let number1 = parseFloat(num1String)
  let number2 = parseFloat(num2String)
  let operator = promptInput.operation

  if (num1String === '' && num2String === '') {
    console.log('You did not enter any valid numbers');
  } else if (num1String === '') {
    console.log('You did not enter a first number');
  } else if (num2String === '') {
    console.log('You did not enter a second number');
  } else if (isNaN(number1)) {
    console.log(`${num1String} is not a number.`);
  } else if (isNaN(number2)) {
    console.log(`${num2String} is not a number.`);
  } else {
    switch (operator) {
      case 'add': case '+':
        console.log(addNums(number1, number2));
        break;
      case 'subtract': case '-':
        console.log(subtractNums(number1, number2));
        break;
      case 'multiply': case '*':
        console.log(multiplyNums(number1, number2));
        break;
      case 'divide': case '/':
        console.log(divideNums(number1, number2));
        break;
      default:
        console.log('unsupported operator');
    }
  }
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

