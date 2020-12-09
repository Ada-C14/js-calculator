
// there are 2 sections, validation functions and calculation function

// Section 1: validation functions start
function validationController(input) {
  let errors = ''

  if (!numValid(input.num1)) { errors += (`${input.num1} is not a valid number. `) }
  if (!numValid(input.num2)) { errors += (`${input.num2} is not a valid number. `) }
  if (!opValid(input.operation)) { errors += (`${input.operation} is not a valid operation.`) }

  if (errors.length > 0) {
    console.log(`Cannot proceed due to the following errors: ${errors}`)}
    else {
      calculate(input)
  }
}

function numValid(num) {
  let regex = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
  return (regex.test(num));
}

function opValid(operation) {
  let ops = ['add', 'subtract', 'multiply', 'divide', 'mod', '+', '-', '*', '/', '%'];
  return (ops.includes(operation)); 
}
// end of validation functions

// Section 2: calculation function
function calculate(input) {
  switch(input.operation) {
    case 'add':
    case '+':
      console.log(`${input.num1} + ${input.num2} = ${input.num1*1 + input.num2*1}`);
      break;

    case 'subtract':
    case '-':
      console.log(`${input.num1} - ${input.num2} = ${input.num1*1 - input.num2*1}`);
      break;

    case 'multiply':
    case '*':
      console.log(`${input.num1} * ${input.num2} = ${(input.num1*1) * (input.num2*1)}`);
      break;

    case 'divide':
    case '/':
      if (input.num2*1 === 0) {
        console.log('You cannot divide by zero')
      }
        else 
          {console.log(`${input.num1} / ${input.num2} = ${(input.num1*1) / (input.num2*1)}`)}
      break;
    
    case 'mod':
    case '%':
        if (input.num2*1 === 0) {
          console.log('Mod uses division and you cannot divide by zero')
        }
          else 
            {console.log(`${input.num1} % ${input.num2} = ${(input.num1*1) % (input.num2*1)}`)}
        break;
  }
}
// end of calculation function

const calculateUserInput = function (error, promptInput) {

validationController(promptInput)

  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? Variable that got passed in by the prompt.
  // What data type? What does it hold? What does it represent? Object data type. Holds name:value pairs. It represents user input (2 nums and an operator).
  // How do we read values from it? What syntax? Can use [] or .
  // How can we use it? Can use it similarly to a Ruby hash.
  // Can we call our existing functions now, inside of this function? Yes.
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;