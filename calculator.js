const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleAddInput = {
  num1: 3,
  num2: 5,
  operation: '+',
}

// const printInputs = function(a, b) {
//     console.log(`The value of a is: ${a}`);
//     console.log(`The value of b is: ${b}`);
//     return null;
// }

const calculateUserInput = function (error, promptInput) {
  calculate(promptInput);
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
}
const validateInput = function (input) {
  const number = parseInt(input);
  if (isNaN(number)) {
    console.log(`${input} is not a number.`);
  }
  return number;
}

const calculate = function (input) {
  const num1 = validateInput(input.num1);
  const num2 = validateInput(input.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return;
  }

  if (input.operation === 'add' || input.operation === '+') {
    const value = num1 + num2;
    console.log(`${num1} + ${num2} = ${value}`);
  } else if (input.operation === 'subtract' || input.operation === '-') {
    const value = num1 - num2;
    console.log(`${num1} - ${num2} = ${value}`);
  } else if (input.operation === 'multiply' || input.operation === '*') {
    const value = num1 * num2;
    console.log(`${num1} * ${num2} = ${value}`);
  } else if (input.operation === 'divide' || input.operation === '/') {
    if (num2 === 0) {
      console.log('You cannot divide by zero');
      return;
    }
    const value = num1 / num2;
    console.log(`${num1} / ${num2} = ${value}`);
  } else {
    console.log('unsupported operator');
  }
}


// const multiplyNums = function(a, b){
//     console.log(printInputs(a,b));
//     const value = a * b;
//     return value
// }

// const addNums = function(a, b){
//     console.log(printInputs(a,b));
//     const value = a + b;
//     return value;
// }

// const sum = addNums(3,5);
// console.log(sum);

// const subtractNums = function(a, b){
//     console.log(printInputs(a,b));
//     const value = a - b;
//     return value
// }



// // Example manual testing of calculator.  
calculate(exampleAdditionInput);
calculate(exampleAddInput);


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;