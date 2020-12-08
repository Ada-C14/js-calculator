
const inputSample = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, input) {
  const operation = input.operation;
  const a = input.num1
  const b = input.num2

  switch (operation) {
    case '+':
    case 'add': 
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case '-':
    case 'subtract':
      console.log(`${a} - ${b} = ${a - b}`);
      break;
    case '*':
    case 'multiply':
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case '/':
    case 'divide': 
      console.log(`${a} / ${b} = ${a / b}`);
      break;
  }
}


// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });
calculateUserInput(null, inputSample)

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;