
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? => an argument
  // What data type? What does it hold? What does it represent? => it's an object like a hash, it holds the data we want, num1, num2, and operator. It represents user input.
  // How do we read values from it? What syntax? => we can use dot notation or bracket notation
  // How can we use it? => We need to grab use it by grabbing num1, num2, and operator and creating the necessary calculations.
  // Can we call our existing functions now, inside of this function? => not sure what this is asking

  const num1 = Number(promptInput.num1);
  const num2 = Number(promptInput.num2);
  const operator = promptInput.operation;
 
  if (validateInput(num1) && validateInput(num2)) {
    calculate(num1, num2, operator);
  } else {
    if (validateInput(num1)) console.log(`${promptInput.num1} is not a valid number`);
    if (validateInput(num2)) console.log(`${promptInput.num2} is not a valid number`);
  }
};

const validateInput = function(num) {
  return !isNaN(num)
}
const calculate = function(num1, num2, operator) {
  switch (operator) {
    case '+':
    case 'add':
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case '-':
    case 'subtract':
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case '*':
    case 'multiply':
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case '/':
    case 'divide':
      if (num2 === 0) console.log('You cannot divide by zero');
      else console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default: 
      console.log(`${operator} is not a supported operator`);
  }
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: "5",
//   num2: 0,
//   operation: '/hello',
// });

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

