const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const errorHandling = function(input) {

  const num1 = input['num1'];
  const num2 = input['num2'];
  const operation = input['operation']

  if (num1 === null || num2 === null || operation === null) {
    return false;
  }

  if (operation === 'add' || operation === '+') {
    return true;
  } else if (operation === 'subtract' || operation === '-') {
    return true;
  } else if (operation === 'multiply' || operation === '*') {
    return true;
  } else if (operation === 'divide' || operation === '/') {
    return true;
  } else {
    console.log(`Something went wrong!`)
    console.log(`Accepted operations: 'add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'`)
    console.log(`Accepted numbers: positive/negative floats/integers`)
    return false;
  }  
}

const doMath = {
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


const calculateUserInput = function (error, promptInput) {

  if (errorHandling(promptInput) === false) {
    console.log(`Input was not accepted!`)
    return  
  }

  const num1 = promptInput['num1'];
  const num2 = promptInput['num2'];
  const operation = promptInput['operation']

  switch(operation) { 
    case 'add':
    case '+':
      return console.log(doMath.addNums(num1, num2));
    case 'subtract':
    case '-':
      return console.log(doMath.subtractNums(num1, num2));
    case 'multiply':
    case '*':
      return console.log(doMath.multiplyNums(num1, num2));
    case 'divide':
    case '/':
      return console.log(doMath.divideNums(num1, num2));
  }  

  // if (operation === 'add' || operation  === '+') {
  //   console.log(doMath.addNums(num1, num2))
  // } else if (operation === 'subtract' || operation === '-') {
  //   console.log(doMath.subtractNums(num1, num2))
  // } else if (operation === 'multiply' || operation === '*') {
  //   console.log(doMath.multiplyNums(num1, num2))
  // } else if (operation === 'divide' || operation === '/') {
  //   console.log(doMath.divideNums(num1, num2))
  // }

  // Questions to ask and answer:
  // What is promptInput? the 'user input'
  // What data type? What does it hold? What does it represent? hash, like exampleAdditionInput
  // How do we read values from it? What syntax? bracket notation
  // How can we use it? if/else statements comparing said bracket notation to what we expect the data to contain
  // Can we call our existing functions now, inside of this function? yes
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

// Testing
calculateUserInput(true, exampleAdditionInput);



