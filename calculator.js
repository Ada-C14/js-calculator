const inputSample = {
  num1: 3,
  num2: 6,
  operation: '+',
}

const calculateUserInput = function (error, input) {
  const operation = input.operation;

  if (isNaN(input.num1)) {
    console.log(`${input.num1} is not a number`)
    return
  }
  const num_1 = Number(input.num1)

  if (isNaN(input.num2)) {
    console.log(`${input.num2} is not a number`)
    return
  }
  const num_2 = Number(input.num2)

  switch (operation) {
    case '+':
    case 'add': 
      console.log(`${num_1} + ${num_2} = ${num_1 + num_2}`);
      break;
    case '-':
    case 'subtract':
      console.log(`${num_1} - ${num_2} = ${num_1 - num_2}`);
      break;
    case '*':
    case 'multiply':
      console.log(`${num_1} * ${num_2} = ${num_1 * num_2}`);
      break;
    case '/':
    case 'divide': 
      if (num_2 === 0) {
        console.log('You cannot divide by zero');
        break;
      }
      console.log(`${num_1} / ${num_2} = ${num_1 / num_2}`);
      break;
    default:
      console.log('unsupported operator');
  }
}


// Example manual testing of calculator  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });
calculateUserInput(null, inputSample)

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;