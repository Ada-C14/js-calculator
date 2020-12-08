// Helper methods
const add = function(num1, num2) {
  console.log(num1 + num2);
}

const substract = function(num1, num2) {
  console.log(num1 - num2);
}

const multiply = function(num1, num2) {
  console.log(num1 * num2);
}

const divide = function(num1, num2) {
  if (num2 == 0) {
    console.log('You cannot divide by 0');
  } else {
    console.log(num1 / num2);
  }
}

const isNumber = function(num) {
  if (isNaN(num)) {
    console.log(`${num} is not a number`);
  } else if (parseFloat(num)) {
    return true
  } else {
    return console.log('Empty string cannot be operated on. Number must be entered')
  }
}


// Example userInput
const userInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

  if (isNumber(promptInput.num1) && isNumber(promptInput.num2)){
    const num1 = Number(promptInput.num1);
    const num2 = Number(promptInput.num2);
    const operation = promptInput.operation;

    switch (operation) {
      case 'add':
      case '+':
        add(num1, num2);
        break;
      case 'subtract':
      case '-':
        substract(num1, num2);
        break;
      case 'multiply':
      case '*':
        multiply(num1, num2);
        break;
      case 'divide':
      case '/':
        divide(num1, num2);
        break;
      default:
        console.log(`unsupported operator`);
    }
  }
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 'hotdog',
//   num2: '',
//   operation: '+',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;