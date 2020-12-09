const userInput = {
  num1: 30,
  num2: 10,
  operation: 'subtract',
}

const addNums = function(a, b) {
  return `${a} + ${b} = ${a + b}`;
};

const subtractNums = function(a, b) {
  return `${a} - ${b} = ${a - b}`;
};

const multiplyNums = function(a, b) {
  return `${a} * ${b} = ${a * b}`;
};

const divideNums = function(a, b) {
  if (b === 0) {
    return 'You cannot divide by zero'
  } else {
    return `${a} / ${b} = ${a / b}`;
  }
};


const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
  const operation = promptInput.operation;
  const firstNum = parseInt(promptInput.num1);
  const secondNum = parseInt(promptInput.num2);

  if (isNaN(firstNum) || isNaN(secondNum) ) {
    console.log('Please enter a valid number!');
  } else {
    switch (operation) {
      case 'add': 
      case '+':
        console.log(addNums(firstNum, secondNum));
        break;
      case 'subtract': 
      case '-':
        console.log(subtractNums(firstNum, secondNum));
        break;
      case 'multiply': 
      case '*':
        console.log(multiplyNums(firstNum, secondNum));
        break;
      case 'divide': 
      case '/':
        console.log(divideNums(firstNum, secondNum));
        break;
      default:
        console.log('unsupported operator');
    }
  }
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

calculateUserInput({}, userInput)
// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;
