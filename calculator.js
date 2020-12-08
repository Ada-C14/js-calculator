
const exampleAdditionInput = {
  num1: 3,
  num2: '5',
  operation: 'add',
}

function validationController (input) {
  let errors = []
  if (numValid(input.num1))
    errors << `${input.num1} is not a valid number. Please re-enter`

  if (numValid(input.num2))
    errors << `${input.num2} is not a valid number. Please re-enter`

  if (opValid(input.operation))
    errors << `${input.num2} is not a valid operation. Please re-enter`

  console.log(errors)
}

function numValid (num) {
  let regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  return (!regex.test(num));
}

function opValid (operation) {
  let ops = ['add', 'subtract', 'multiply', 'divide', 'mod', '+', '-', '*', '/', '%']
  return (!ops.includes(operation)); 
}

validationController (exampleAdditionInput)

// function validate_op (operation) {
//   if operation 
//     else
//       console.log (`${operation} is not a valid operation. Please re-submit`)
// }

// function calculate (input) {
//   switch (input)
//     case (input.operation === 'add' || '+')
//       console.log(input.num1 + input.num2)
//       break

//     case (input.operation === 'subtract' || "-")
//       console.log(input.num1 - input.num2)
//       break

//     case (input.operation === 'multiply' || '*')
//       console.log(input.num1 * input.num2)
//       break

//     case (input.operation === 'divide' || '/')
//       console.log(input.num1 / input.num2)
//       break
// }

// calculate (exampleAdditionInput)

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;