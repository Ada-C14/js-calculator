

const printResults = function(input, operator, result) {
  console.log(`${input.num1} ${operator} ${input.num2} = ${result}`)
}

const addNums = function(input) {
  const result = input.num1 * 1 + input.num2 * 1
  printResults(input, '+', result)
};

const subtractNums = function (input) {
  const result = input.num1 * 1 - input.num2 * 1
  printResults(input, '-', result)
};

const multiplyNums = function (input) {
  const result = input.num1 * input.num2
  printResults(input, '*', result)
};

const divideNums = function(input) {
  if(!(input.num2 * 1)) {
    console.log('You cannot divide by zero');
  } else {
    const result = input.num1 / input.num2
  printResults(input, '/', result)
  }
}

const validNums = function(input) {
  if (isNaN(input.num1) || isNaN(input.num2)) {
    if (isNaN(input.num1)) {
      console.log(`${input.num1} is not a number`)
    }
    if (isNaN(input.num2)) {
      console.log(`${input.num2} is not a number`)
    }
  } else {
    return true
  }
}

const calculate = function(input) {
  if (input.operation === 'add' || input.operation === '+') {
    return addNums(input);
  } else if (input.operation === 'subtract' || input.operation === '-') {
    return subtractNums(input);
  } else if (input.operation === 'multiply' || input.operation === '*') {
    return multiplyNums(input);
  } else if (input.operation === 'divide' || input.operation === '/') {
    return divideNums(input)
  } else {
    console.log('unsupported operator')
  }
}

const calculateUserInput = function (error, promptInput) {
  if (validNums(promptInput)) {
    return calculate(promptInput)
  }
}

// Example manual testing of calculator.  
// const test1 = calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;