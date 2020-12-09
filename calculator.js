
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'


const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

  // if (promptInput.operation === 'add') {
  //   add(promptInput.num1, promptInput.num2); 
  // } else if (promptInput.operation === 'multiply') 
  // { multiply(promptInput.num1, promptInput.num2) }
  // else if (promptInput.operation === 'subtract') {
  //   subtract(promptInput.num1, promptInput.num2)
  // }

    if (isNaN(promptInput.num1)) {
      console.log(`${promptInput.num1} is not a number.`);
      return;
    } 
    if (isNaN(promptInput.num2)) {
      console.log(`${promptInput.num2} is not a number.`);
      return;
    }

  let result;
  switch (promptInput.operation) {
    case 'add':
    case '+':
      result = add(promptInput.num1, promptInput.num2);
      console.log(`${promptInput.num1} + ${promptInput.num2} = ${result}`);
      break;
    case 'multiply':
    case '*':
      result = multiply(promptInput.num1, promptInput.num2);
      console.log(`${promptInput.num1} * ${promptInput.num2} = ${result}`);
      break;
    case 'subtract':
    case '-':
      result = subtract(promptInput.num1, promptInput.num2);
      console.log(`${promptInput.num1} - ${promptInput.num2} = ${result}`);
      break;
    case 'divide':
    case '/':
      if (Number(promptInput.num2) === 0) {
        console.log('You cannot divide by zero');
        return;
      }
      result = divide(promptInput.num1, promptInput.num2);
      console.log(`${promptInput.num1} / ${promptInput.num2} = ${result}`);
      break;
    default:
      console.log(`unsupported operator`);
  }
}


const add = function(num1, num2) {
  return Number(num1) + Number(num2);
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const divide = function(num1, num2) {
  return num1 / num2;
};

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;