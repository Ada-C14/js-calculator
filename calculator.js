
// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

// const calculateUserInput = function (error, promptInput) {
// //   console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

//   // Questions to ask and answer:
//   // What is promptInput?
//   // What data type? What does it hold? What does it represent?
//   // How do we read values from it? What syntax?
//   // How can we use it?
//   // Can we call our existing functions now, inside of this function?
// }

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

const calculateUserInput = function(error, promptInput){
  const operation = promptInput.operation
  const firstNum = parseInt(promptInput.num1)
  const secondNum = parseInt(promptInput.num2)

  const operators = ["add", "+", "subtract", "-", "divide", "/", "multiply", "*"]
  if (firstNum === NaN || secondNum === NaN || operators.includes(operation) === false){
    console.log('input was invalid')
    return
  } else if (operation === 'add' || operation === '+') {
    addNums(firstNum, secondNum)
  } else if (operation === 'subtract' || operation === '-') {
    subtractNums(firstNum, secondNum)
  } else if (operation === 'multiply' || operation === '*') {
    multiplyNums(firstNum, secondNum)
  } else if (operation === 'divide' || operation === '/') {
    divideNums(firstNum, secondNum) 
  } else {
    console.log('Exiting the Program');
    return 
  }
}

const multiplyNums = function(num1, num2) {
  let total = num1 * num2
  console.log(`${num1} * ${num2} = ${total}`);
  return total
}
const divideNums = function(num1, num2) {
  if (num2 == 0) {
    console.log(`You cannot divide by zero`);
    return
  }
  let total = num1 / num2
  console.log(`${num1} / ${num2} = ${total}`);
  return total
}
const addNums = function(num1, num2) {
  let total = num1 + num2
  console.log(`${num1} + ${num2} = ${total}`);
  return total
}

const subtractNums = function(num1, num2) {
  let total = num1 - num2
  console.log(`${num1} - ${num2} = ${total}`);
  return total
}


// console.log(calculateUserInput(3, 5, '+'));

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;