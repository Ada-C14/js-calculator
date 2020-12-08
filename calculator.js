
// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }
let input = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

calculateUserInput({}, input)

function validNumber(number) {
  if (isNaN(parseInt(number))) {
    throw `${number} is not a number`;
    }
  return number;
} 

const calculateUserInput = function (error, promptInput) {


  const validOperations = ['add', 'subtract', 'multiply', 'divide', 'modulus', 'exponent', '+', '-', '*', '/', '%', '**'];
  const invalidZeroOperations = ["divide", "/", "modulus", "%"];

  // check that operator is valid
  if (!validOperations.includes(promptInput.operation)) {
    throw 'Unsupported Operator'
  }

  // check that numbers are valid
  const num1 = validNumber(promptInput.num1)
  const num2 = validNumber(promptInput.num2)

  // make sure not trying to divide/mod by 0
  if (invalidZeroOperations.includes(promptInput.operation) && num2 == 0) {
    throw 'You cannot divide or take the modulus of a number by zero'
  }

  // do the math
  if (promptInput.operation == 'add' || promptInput.operation == '+') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
  } else if (promptInput.operation == 'subtract' || promptInput.operation == '-') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
  } else if (promptInput.operation == 'multiply' || promptInput.operation == '*') {
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
  } else if (promptInput.operation == 'divide' || promptInput.operation == '/') {
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
  } else if (promptInput.operation == 'modulus' || promptInput.operation == '%') {
    console.log(`${num1} % ${num2} = ${num1 % num2}`)
  } else {
    console.log(`${num1} ^ ${num2} = ${num1 ** num2}`)
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

