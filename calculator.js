
// promptInput
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add'}


const calculate = function(input) {
  // constant holds key/value pairs to all valid operations
  const opObj = { add: ['+', 'add', 'addition', 'plus'], 
  subtract: ['-', 'subtract', 'subtraction', 'minus'],
  multiply: ['*', 'x', 'times', 'multiply', 'multiplication'],
  divide: ['/', 'divide', 'division'],
  mod: ['modulus', 'modulo', 'remainder', '%', 'mod'],
  exponent: ['power', '**', '^', 'exponent']};

  // check that num1 and num2 are valid numbers 
  // note that we don't have parenthetical support yet
  let num1 = Number(input.num1);
  let num2 = Number(input.num2);

  if (isNaN(input.num1)) 
  {
  console.log('num1 must be valid number. No parenthetical support.') ;
  return;
  }

  if (isNaN(input.num2)) 
  {
    console.log('num2 must be valid number. No parenthetical support.') ;
    return;
  }

  // for brevity's sake let's store the operation in a shorter variable
  let op = input.operation.toLowerCase();

  // check for and operation with valid operator. 
  switch(true) {
    case opObj.add.includes(op):
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      return num1 + num2;//

    case opObj.subtract.includes(op):
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      return num1 - num2;

    case opObj.multiply.includes(op):
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      return num1 * num2;

    case opObj.divide.includes(op):
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      if (num2 == 0) 
      {
        console.log('You cannot divide by zero');
      return;
      }
      return num1 / num2;

    case opObj.mod.includes(op):
      console.log(`${num1} % ${num2} = ${num1 % num2}`);
      if (num2 == 0) 
      {
        console.log('You cannot divide by zero');
        return;
      }
      return num1 % num2;

    case opObj.exponent.includes(op):
      console.log(`${num1} ^ ${num2} = ${num1 ^ num2}`);
      return num1 ^ num2;

    default: 
      console.log('Invalid operator');
      return; 
  }
}


const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  calculate(promptInput);
}

// test statement
// calculateUserInput({}, exampleAdditionInput);

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;