
// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }
// '3 + 5 = 8'

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
  const num1 = parseInt(promptInput.num1)
  const num2 = parseInt(promptInput.num2)
  const operation = promptInput.operation


  if (operation == 'add' || operation == '+') {
    addition(num1, num2);
  } else if (operation == 'subtract' || operation == '-') {
    subtraction(num1, num2);
  } else if (operation == 'multiply' || operation == '*') {
    multiplication(num1, num2);
  } else if (operation == 'divide' || operation == '/') {
    division(num1, num2);
    }
}

const addition = function(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  return
}

const subtraction = function(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  return
}

const multiplication = function(num1, num2) {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  return
}

const division = function(num1, num2) {
  if (num2 == 0) {
    console.log('You cannot divide by zero');
    return }
  else {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    return
  }
}


// // Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;


