console.log('Welcome!')

const sampleUserInput = {
  num1: 3,
  num2: 0,
  operation: 'divide',
}

const validateInput = function(input) {
  if (isNaN(input.num1)) {
    console.log(`${input.num1} is not a number`);
  }
  else if (isNaN(input.num2)) {
    console.log(`${input.num2} is not a number`);
  }
  else {
    return true;
  }
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  const printInput = function(input, operation, result) {
    console.log(`${input.num1} ${operation} ${input.num2} = ${result}`);
  }

  const addNums = function(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  const subtractNums = function(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }

  const multiplyNums = function(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }
  
  const divideNums = function(num1, num2) {
    return (parseInt(num2) === parseInt(0) ? console.log('You cannot divide by zero') : parseInt(num1) / parseInt(num2));
  }
    
  switch(promptInput.operation) {
    case '+':
      case 'add':
      result = addNums(promptInput.num1, promptInput.num2);
      printInput(promptInput, '+', result)
      break;
    case '-':
      case 'subtract':
      result = subtractNums(promptInput.num1, promptInput.num2);
      printInput(promptInput, '-', result)
      break;
    case '*':
      case 'multiply':
      result = multiplyNums(promptInput.num1, promptInput.num2);
      printInput(promptInput, '*', result);
      break;
    case '/':
      case 'divide':
      result = divideNums(promptInput.num1, promptInput.num2);
      printInput(promptInput, '/', result);
      break;
    default: 
      console.log('unsupported operator');
    break;
  }
  
  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

const runProgram = function(input) {
  if (validateInput(input)) {
    return calculateUserInput({}, input);
  }
}

runProgram(sampleUserInput);


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;