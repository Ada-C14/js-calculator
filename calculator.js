const exampleAdditionInput = {
  num1: 3,
  num2: 4.5,
  operation: 'divide',
}

const errorHandling = function(input) {

  const num1 = input['num1'];
  const num2 = input['num2'];
  const operation = input['operation']
  
  // first check for unexpected data...
  if (num1 === undefined || num2 === undefined || operation === undefined || num2 === '' || num2 === '') {
    console.log(`Error: Not all pieces of data were received.`)
    console.log(`Please submit an operation, a num1 and num2.`)
    return false;  
  } else if (isNaN(num1) || isNaN(num2)) {
    console.log(typeof num2)
    console.log(`Error: Unexpected number data received.`)
    console.log(`Accepted numbers: positive/negative floats/integers`)
    return false;  
  // now, if it passes all those statements, return true for correct operation data
  } else if (operation === 'add' || operation === '+') {
    return true;
  } else if (operation === 'subtract' || operation === '-') {
    return true;
  } else if (operation === 'multiply' || operation === '*') {
    return true;
  } else if (operation === 'divide' || operation === '/') {
    return true;  
  // all else fails, account for unexpected operation data
  } else { 
    console.log(`Error: Unexpected operation received.`)
    console.log(`Accepted operations: 'add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/'`)
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
    if (num2 === 0) {
      return `Error: Cannot divide by zero.`
    } else {
      return `${num1} / ${num2} = ${num1/num2}`;
    }
  },
}

const calculateUserInput = function (error, promptInput) { // I don't understand how to use error here, but when I delete it, code breaks

  if (errorHandling(promptInput) === false) {
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
// calculateUserInput(true, exampleAdditionInput);

// console.log(isNaN('butt'))
// console.log(isNaN(''))
// console.log(isNaN(' '))
// console.log(isNaN('$# *'))