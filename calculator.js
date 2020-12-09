const allowableOperators = [
  'add',
  '+',
  'subtract', 
  '-', 
  'multiply', 
  '*', 
  'divide', 
  '-'
];

const calculateUserInput = function (error, promptInput) {

  const operation = promptInput.operation

  validations(promptInput.num1, promptInput.num2, operation)

  const num1 = parseFloat(promptInput.num1)
  const num2 = parseFloat(promptInput.num2)

  if (operation == 'add' || operation == '+') {
    addition(num1, num2);
  } else if (operation == 'subtract' || operation == '-') {
    subtraction(num1, num2);
  } else if (operation == 'multiply' || operation == '*') {
    multiplication(num1, num2);
  } else if (operation == 'divide' || operation == '/') {
    division(num1, num2)
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

const validations = function(num1, num2, operation) {
  if (isNaN(num1)) {
    console.log(`${num1} is not a number`);
    return 
  } 
  else if (isNaN(num2)) {
    console.log(`${num2} is not a number`);
    return
  }
  else if (!allowableOperators.includes(operation )) {
    console.log('unsupported operator');
    return
  }

}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;