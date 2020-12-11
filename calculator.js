
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {

  let solution; 

  switch (promptInput['operation']) {
  case 'add':
  case '+':
    solution = parseInt(promptInput.num1) + parseInt(promptInput.num2);
    console.log(`${promptInput.num1} + ${promptInput.num2} = ${solution}`);
    break;
  case 'subtract':
  case '-':
    solution = parseInt(promptInput.num1) - parseInt(promptInput.num2);
    console.log(`${promptInput.num1} - ${promptInput.num2} = ${solution}`);
    break;
  case 'multiply':
  case '*':
    solution = parseInt(promptInput.num1) * parseInt(promptInput.num2);
    console.log(`${promptInput.num1} * ${promptInput.num2} = ${solution}`);
    break;
  case 'divide':
  case '/':
    if (promptInput.num2 == 0) {
      console.log('You cannot divide by zero')
    return
    }
    solution = parseInt(promptInput.num1) / parseInt(promptInput.num2);
    console.log(`${promptInput.num1} / ${promptInput.num2} = ${solution}`);
    break;
  }
 
}

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


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;