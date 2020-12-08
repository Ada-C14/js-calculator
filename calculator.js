

const addNums = function(num1, num2) {
  return num1 + num2;
}

const subtractNums = function(num1, num2) {
  return num1 - num2;
}

const multiplyNums = function(num1, num2) {
  return num1 * num2;
}

const divideNums = function(num1, num2) {
  if (num2 == 0) {
    throw "Cannot divide by zero";
  } else {
    return num1 / num2;
  }
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

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


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;