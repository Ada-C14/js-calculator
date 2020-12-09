
// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }
// // '3 + 5 = 8'


const addNums = function(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

const subtractNums = function(a, b) {
  return `${a} - ${b} = ${(a - b)}`;
}

const multiplyNums = function(a, b) {
  return `${a} * ${b} = ${(a * b)}`;
}

const divideNums = function(a, b) {
  return `${a} / ${b} = ${(a / b)}`;
}

const notNumber = function(a, b) {
  
  if (isNaN(a)) { 
    return `${a} is not a number.`
  } else {
    return `${b} is not a number.`
  }
  
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  
  const a = Number(promptInput.num1);
  const b = Number(promptInput.num2);

  if (isNaN(a) || isNaN(b)) {

    console.log(notNumber(promptInput.num1, promptInput.num2));

  } else if (promptInput.operation === 'add' || promptInput.operation === '+') {

    console.log(addNums(a, b));

  } else if (promptInput.operation === 'divide' || promptInput.operation === '/') {
    
      if (b === 0) {
        console.log('You cannot divide by zero')
      } else {console.log(divideNums(a, b)); }

  } else if (promptInput.operation === 'multiply' || promptInput.operation === '*') {

    console.log(multiplyNums(a, b));
  
  } else if (promptInput.operation === 'subtract' || promptInput.operation === '-') {

    console.log(subtractNums(a, b)); 

  } else {
    
    console.log('unsupported operator');

  }
}

// testing 'add'  
calculateUserInput({}, {
  num1: '3',
  num2: '4',
  operation: 'add',
});
// testing '+'
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: '+',
});
// testing 'divide'
calculateUserInput({}, {
  num1: 4,
  num2: 2,
  operation: 'divide',
});
// testing '/'
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: '/',
});
// testing 'multiply'
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'multiply',
});
// testing '*'
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: '*',
});
// testing 'subtract'
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'subtract',
});
// testing '-'
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: '-',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;
