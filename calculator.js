
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const prompt = require(`prompt`);
prompt.start();

const isInteger = function(input) {
  if (isNaN(input)) console.log(`"${input}" is not a number`);
  return parseInt(input);
};


const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? A parameter of the function
  // What data type? What does it hold? What does it represent? Data type is the object; it holds key-value pairs and represents our inputs.
  // How do we read values from it? What syntax? By using brackets or dot notation.
  // How can we use it? To read the input.
  // Can we call our existing functions now, inside of this function? Yes.

  let first  = isInteger(promptInput.num1);
  let second = isInteger(promptInput.num2);
  let operation = promptInput.operation;
  let result = 0;

  switch (operation) {
    case `add`:
    case `+`:
      result = first + second;
      console.log(`${first} + ${second} = ${result}`);
      break;
    case `subtract`:
    case `-`:
      result = first - second;
      console.log(`${first} - ${second} = ${result}`);
      break;
    case `multiply`:
    case `*`:
      result = first * second;
      console.log(`${first} * ${second} = ${result}`);
      break;
    case `divide`:
    case `/`:
      if (second === 0) {
        console.log( `Can't divide by zero (0).`);
      } else {
        result = first / second;
        console.log( `${first} / ${second} = ${result}`); 
      }
      break;
    case `exponent`:
    case `^`:
      result = Math.pow(first, second);
      console.log(`${first} ^ ${second} = ${result}`);
      break;
    case `modulo`:
    case `%`:
      if (second === 0) {
        console.log( `Can't divide by zero (0).`);
      } else {
        result = first % second;
        console.log( `${first} % ${second} = ${result}`); 
      }
      break;
    default:
      console.log( `'unsupported operator'`);
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