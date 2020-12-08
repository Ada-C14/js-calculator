
const exampleAdditionInput = {
  num1: 'fake',
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  
  // constant holds key/value pairs to all valid operations
  const operationObject = { add: ['+', 'add', 'addition', 'plus'], 
                            subtract: ['-', 'subtract', 'subtraction', 'minus'],
                            multiply: ['*', 'x', 'times', 'multiply', 'multiplication'],
                            divide: ['/', 'divide', 'division'],
                            mod: ['modulus', 'modulo', 'remainder', '%', 'mod'],
                            exponent: ['power', '**', '^', 'exponent']};

  // check that num1 and num2 are valid numbers 
  // note that we don't have parenthetical support yet
  if(isNaN(promptInput.num1))
  {
    error.num1 = 'num1 must be valid number. no parenthetical support.' ;
  }

  if(isNaN(promptInput.num2))
  {
    error.num2 = 'num2 must be valid number. no parenthetical support.' ;
  }

  switch(promptInput.operation) {
    
  }
}



// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;