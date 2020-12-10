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

function getValidOperator(operator) {
const operators = ['+', 'add', '-', 'subtract', '*', 'multiply', '/', 'divide']; 

  if (operators.includes(operator)) {
    return operator;
  }
  return undefined;
}

function getValidNumber(number) {
    return parseInt(number);
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  let operator = getValidOperator(promptInput.operation);
  if (operator == null) {
    console.log(`unsupported operator`);
    return;
  }


  let num1 = getValidNumber(promptInput.num1);
  if (isNaN(num1)) {
    console.log(`${promptInput.num1} is not a number.`);
    return;
  }


  let num2 = getValidNumber(promptInput.num2);
  if (isNaN(num2)) {
    console.log(`${promptInput.num2} is not a number.`);
    return;
  }

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
      if (num2 === 0) {
        console.log('You cannot divide by zero');
        return;
      } 
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;

    default:
      console.log('Invalid operator. Please try again.');
}


}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;