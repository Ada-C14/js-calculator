const calculateUserInput = function (error, promptInput) {

  let num1 = parseInt(promptInput.num1);
  let num2 = parseInt(promptInput.num2);
  let operation = promptInput.operation;

  // validate user input
  if ( isNaN(num1) || isNaN(num2) ) {
    console.log('Invalid input, please enter numbers only.');
    return; 
  } 
  switch(operation) {
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
      if (num2 === 0) {
        console.log('You cannot divide by zero');
      } else {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      }
      break;
    default:
      console.log('Please try again.');
  }
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

