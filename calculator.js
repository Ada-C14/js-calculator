const exampleAdditionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
const exampleAdditionInput2 = {
  num1: 3,
  num2: 5,
  operation: '+',
}
const exampleSubtractionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}
const exampleSubtractionInput2 = {
  num1: 3,
  num2: 5,
  operation: '-',
}
const exampleMultiplicationInput1 = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}
const exampleMultiplicationInput2 = {
  num1: 3,
  num2: 5,
  operation: '*',
}
const exampleDivisionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'divide',
}
const exampleDivisionInput2 = {
  num1: 3,
  num2: 5,
  operation: '/',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  switch(promptInput.operation) {
    case 'add':
    case '+':
      return promptInput.num1 + promptInput.num2;
    case 'subtract':
    case '-':
      return promptInput.num1 - promptInput.num2;
    case 'multiply':
    case '*':
      return promptInput.num1 * promptInput.num2;
    case 'divide':
    case '/':
      if (promptInput.num2 == 0) {
        throw 'You cannot divide by zero';
      } else {
        return promptInput.num1 / promptInput.num2;
      }
    default:
      throw 'Error occurred. Program exited.';
  }
}

console.log(calculateUserInput({}, exampleAdditionInput1));
console.log(calculateUserInput({}, exampleAdditionInput2));
console.log(calculateUserInput({}, exampleSubtractionInput1));
console.log(calculateUserInput({}, exampleSubtractionInput2));
console.log(calculateUserInput({}, exampleMultiplicationInput1));
console.log(calculateUserInput({}, exampleMultiplicationInput2));
console.log(calculateUserInput({}, exampleDivisionInput1));
console.log(calculateUserInput({}, exampleDivisionInput2));


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;