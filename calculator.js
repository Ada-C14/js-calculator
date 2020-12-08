// calculateUserInput questions

// What is promptInput? 
// * promptInput is a parameter for function calculateUserInput

// What data type? What does it hold? What does it represent?
// * promptInput is an object type that has 3 keys: num1, num2, operation.

// How do we read values from it? What syntax?
// * We can use dot (promptInput.num1) or bracket (promptInput[num1]) notation.

// How can we use it?
// * promptInput serves as our user input to pass into our calculator to evaluate. 

// Can we call our existing functions now, inside of this function?
// * Yes! So long as they have been declared and can accept promptInput as a parameter as well. 


// input example
// const exampleAdditionInput = {
//  num1: 3,
//  num2: 5,
//  operation: 'add'}


// MAIN CALCULATOR FUNCTION 

const calculate = function(input) {
  // constant holds key/value pairs to all valid operations
  const opObj = { add: ['+', 'add', 'addition', 'plus'], 
                  subtract: ['-', 'subtract', 'subtraction', 'minus'],
                  multiply: ['*', 'x', 'times', 'multiply', 'multiplication'],
                  divide: ['/', 'divide', 'division'],
                  mod: ['modulus', 'modulo', 'remainder', '%', 'mod'],
                  exponent: ['power', '**', '^', 'exponent']};

  // check that num1 and num2 are valid numbers 
  // note that we don't have parenthetical support yet, i'll have to sit on this a bit and maybe come back to it
  let num1 = Number(input.num1);
  let num2 = Number(input.num2);

  // how cuddly do we want to be with braces?
  if (isNaN(input.num1) || isNaN(input.num2)) return console.log('Must input valid numbers. No parenthetical or expression support.');

  // for brevity's sake let's store the operation in a shorter variable
  let op = input.operation.toLowerCase();

  // check for and operation with valid operator. 
  switch(true) 
  {
    case opObj.add.includes(op):
      return console.log(`${num1} + ${num2} = ${num1 + num2}`);

    case opObj.subtract.includes(op):
      return console.log(`${num1} - ${num2} = ${num1 - num2}`);

    case opObj.multiply.includes(op):
      return console.log(`${num1} * ${num2} = ${num1 * num2}`);

    case opObj.divide.includes(op):
      return console.log(num2 === 0 ? 'You cannot divide by zero' : `${num1} / ${num2} = ${num1 / num2}`);

    case opObj.mod.includes(op):
      return console.log(num2 === 0 ? 'You cannot divide by zero' : `${num1} % ${num2} = ${num1 % num2}`);

    case opObj.exponent.includes(op):
      return console.log(`${num1} ^ ${num2} = ${num1 ^ num2}`);

    default: 
      return console.log('Invalid operator');
  }
}

// FOR PROVIDED TEST FILE

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  calculate(promptInput);
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;