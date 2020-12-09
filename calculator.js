const exampleAdditionInput = {
  num1: 'hi there',
  num2: 0,
  operation: 'hello',
}

const addNums = function(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

const subtractNums = function(a, b) {
  return `${a} - ${b} = ${a - b}`;
}

const multiplyNums = function(a, b) {
  return `${a} * ${b} = ${a * b}`;
}

const divideNums = function(a, b) {
  if (b === 0) {
    return 'You cannot divide by 0'
  } else {
  return `${a} / ${b} = ${a / b}`;
  }
}

// const isNumber = function(a, b) {
//   if (isNaN(a)) {
//     return `${a} is not a number`
//   } elsif 
// }

const calculate = function(input) {
  let operation = input.operation;
  let firstNum = input.num1;
  let secondNum = input.num2;

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

calculate(exampleAdditionInput)

// const calculateUserInput = function (error, promptInput) {
//   console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

//   // Questions to ask and answer:
//   // What is promptInput?
//   // What data type? What does it hold? What does it represent?
//   // How do we read values from it? What syntax?
//   // How can we use it?
//   // Can we call our existing functions now, inside of this function?
// }

// // Example manual testing of calculator.  
// // calculateUserInput({}, {
// //   num1: 3,
// //   num2: 4,
// //   operation: 'add',
// // });


// // This exports the function so index.js can import it.
// exports.calculateUserInput = calculateUserInput;
