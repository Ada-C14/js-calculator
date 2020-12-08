const addNums = function(a, b) {
  let result = a + b
  return `${a} + ${b} = ${result}`
}

const subtractNums = function(a, b) {
  let result = a - b
  return `${a} - ${b} = ${result}`
}

const multiplyNums = function(a, b) {
  let result = a * b
  return `${a} * ${b} = ${result}`
}

const divideNums = function(a, b) {
  if (b === 0) {
    return 'You cannot divide by zero'
  } else {
    let result = a / b
    return `${a} / ${b} = ${result}`
  }
}

const calculateUserInput = function (error, promptInput) {
  let num1String = promptInput.num1
  let num2String = promptInput.num2
  let number1 = parseFloat(num1String)
  let number2 = parseFloat(num2String)
  let operator = promptInput.operation

  if (num1String === '' && num2String === '') {
    console.log('You did not enter any valid numbers');
  } else if (num1String === '') {
    console.log('You did not enter a first number');
  } else if (num2String === '') {
    console.log('You did not enter a second number');
  } else if (isNaN(number1)) {
    console.log(`${num1String} is not a number.`);
  } else if (isNaN(number2)) {
    console.log(`${num2String} is not a number.`);
  } else {
    switch (operator) {
      case 'add': case '+':
        console.log(addNums(number1, number2));
        break;
      case 'subtract': case '-':
        console.log(subtractNums(number1, number2));
        break;
      case 'multiply': case '*':
        console.log(multiplyNums(number1, number2));
        break;
      case 'divide': case '/':
        console.log(divideNums(number1, number2));
        break;
      default:
        console.log('unsupported operator');
    }
  }
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

