
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'

// I should be able to add two numbers together
const add = function(num1, num2){
  const equals = num1 + num2;
  const value = `${num1} + ${num2} = ${equals}`;
  return value
}

// I should be able to subtract two numbers
const subtract = function(num1, num2){
  const equals = num1 - num2;
  const value = `${num1} - ${num2} = ${equals}`;
  return value
}

// I should be able to multiply two numbers
const multiply = function(num1, num2){
  const equals = num1 * num2;
  const value = `${num1} * ${num2} = ${equals}`;
  return value
}

// I should be able to divide two numbers
const divide = function(error, num1, num2){
  if (num2 == 0) {
    return error['message'] = "You cannot divide by zero"; 
  } else {
    const equals = num1 / num2;
    const value = `${num1} / ${num2} = ${equals}`;
    return value
  }
}

// I should be able to get the power of a value
const numPower = function(num, power) {
  const equals = num**power;
  const value = `${num}^${power} = ${equals}`; 
  return value
}

// I should have a way to validate user input
const validateOperator = function(error, operator) {
  const valid_input = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/', 'power', '** ^'];
    
  if (!valid_input.includes(operator)) {
    return error['message'] = "unsupported operator";
  } else {
    return operator
  }
}

const validateNumber = function(error, num) {
  if (num == parseInt(num)) {
    return parseInt(num)
  } else {
    return error['message'] = `${num} is not a number.`
  }
}


const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? information that would have been received from a user
  // What data type? object - What does it hold? key value pairs needed for calculation - What does it represent? user input
  // How do we read values from it? using object notation to get values from the object - What syntax? objectName.objectKey or objectName['objectKey']
  // How can we use it? pass values in as arguments for functions
  // Can we call our existing functions now, inside of this function? yes


  
  let operation = validateOperator(error, promptInput.operation);
  let num1 = validateNumber(error, promptInput.num1);
  let num2 = validateNumber(error, promptInput.num2);
  let value;

  switch (operation) {
    case 'add':
    case '+':
      value = add(num1, num2)
      console.log(value)
      break;
    case 'subtract':
    case '-':
      value = subtract(num1, num2)
      console.log(value)
      break;
    case 'multiply':
    case '*':
      value = multiply(num1, num2)
      console.log(value)
      break;
    case 'divide':
    case '/':
      value = divide(error, num1, num2)
      console.log(value)
      break;
    case 'power':
    case '^': 
    case '**':
      value = numPower(num1, num2)
      console.log(value)
      break;
    default:
      value = error.message;
      console.log(value)
      break;
  }
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;