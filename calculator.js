
const exampleAdditionInput = {
  num1: '3a',
  num2: 5.,
  operation: 'addd',
}

function validationController(input) {
  // try { 
    if (!numValid(input.num1)) {
    // throw `${input.num1} is not a valid number. Please re-enter`
console.log('1')
    }
    if (!numValid(input.num2)) {
    // throw `${input.num2} is not a valid number. Please re-enter`
    console.log('2')
    }
    if (!opValid(input.operation)) {
    // throw `${input.num2} is not a valid operation. Please re-enter`
    console.log('3')
    }
  // }
// catch(err) {err + 'is not valid. Please re-enter'}

  // catch(err) {}
//   console.error(e.name);
  // console.log(err.message);
}

function numValid(num) {
  let regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  return (regex.test(num));
}

function opValid(operation) {
  let ops = ['add', 'subtract', 'multiply', 'divide', 'mod', '+', '-', '*', '/', '%'];
  return (ops.includes(operation)); 
}

validationController (exampleAdditionInput)

function calculate (input) {
  switch(input.operation) {
    case 'add' || '+':
      console.log(input.num1 + input.num2);
      break;

    case 'subtract' || '-':
      console.log(input.num1 - input.num2);
      break;

    case 'multiply' || '*':
      console.log(input.num1 * input.num2);
      break;

    case 'divide' || '/':
      console.log(input.num1 / input.num2);
      break;
  }
}

calculate (exampleAdditionInput)

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