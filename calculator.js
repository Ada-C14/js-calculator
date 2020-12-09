
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  console.log(`The operation was: ${promptInput['operation']}`)
  console.log(`The first number was: ${promptInput['num1']}`)
  console.log(`The operation was: ${promptInput['num2']}`)

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




// Testing
calculateUserInput(`stuff`, exampleAdditionInput);

const doMath = { // hash to store all the operation functions
  addNums(num1, num2) {
    return `${num1} + ${num2} = ${num1+num2}`;
  },
  subtractNums(num1, num2) {
    return `${num1} - ${num2} = ${num1-num2}`;
  },
  multiplyNums(num1, num2) {
    return `${num1} * ${num2} = ${num1*num2}`;
  },
  divideNums(num1, num2) {
    return `${num1} + ${num2} = ${num1/num2}`;
  },
}

if (exampleAdditionInput['operation'] === 'add' || exampleAdditionInput['operation'] === '+') {
  console.log(doMath.addNums(exampleAdditionInput['num1'], exampleAdditionInput['num2']))
}

