// const prompt = require('prompt')


// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

const add = function(num1, num2) {
  console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
}

const subtract = function(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

const multiply = function(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

const divide = function(num1, num2) {
  if (num2 == 0) {
    console.log("you can not divide by zero!")
  } else {
    console.log(`${num1} / ${num2} = ${num1 / num2}`) 
  }
  
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  const num1 = promptInput.num1;
  const num2 = promptInput.num2;
  const operation = promptInput.operation;

  if (isNaN(num1)) {
    console.log(`${num1} is not a number`);
  } else if (isNaN(num2)) {
    console.log(`${num2} is not a number`)
  } else {
    switch(operation) {
      case '+':
      case 'add':
        console.log(add(num1, num2));
        break;
      case '-':
      case 'subtract':
        console.log(subtract(num1, num2));
        break;
      case '*':
      case 'multiply':
        console.log(multiply(num1, num2));
        break;
      case '/':
      case 'divide':
        console.log(divide(num1, num2));
        break;
        default:
          console.log('unsuported operator!');
          break
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