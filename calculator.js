
// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

// const iAmAVariable = true;
// console.log('I love linting');

const add = function(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`)
}
const subtract = function(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`)
}

const multiply = function(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`)
}

const divide = function(num1, num2) {
  if (num2 == 0) {
    console.log('You cannot divide by zero')
  } else {
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
  }
  
}
const calculateUserInput = function (error, promptInput) {
  //console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? It's an argument a parameter of fuction calculateUserInput 
  // What data type? What does it hold? What does it represent? Its data type is an object that holds data it represents user input.
  // How do we read values from it? What syntax? dot or bracket notation
  // How can we use it? promptInput.number1
  // Can we call our existing functions now, inside of this function? yes

  function includeOperator(operation) {
    const operations = ['add', 'subtract', 'multiply', 'divide', '+', '-', '*', '/']
    if (!operations.includes(operation)) {
        console.log('Choose a valid operator');
    }
    return operation
}

  const num1 = parseFloat(promptInput.num1); //returns a floating point number
  const num2 = parseFloat(promptInput.num2);
  const operator = includeOperator(promptInput.operation);

  if (isNaN(num1)) {
    console.log (`${num1} is not a number`);
  } else if (isNaN(num2)) {
    console.log (`${num2} is not a number`);
  } else {
    switch(operator) {
      case '+':
      case 'add':
        console.log(add(num1, num2))
        break;  
      case '-':
      case 'subtract':
        console.log(subtract(num1, num2))
          break;
      case '*':
      case 'multiply':
        console.log(multiply(num1, num2))
          break; 
      case '/':
      case 'divide':
        console.log(divide(num1, num2))
          break;             
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

