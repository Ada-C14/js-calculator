
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? => an object (hash)
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
  const num1 = Number(promptInput.num1);
  const num2 = Number(promptInput.num2);
  const operator = promptInput.operation

  if (!validateInput(num1)) {
    console.log(`${num1} is not a valid number`);
  }

  if (!validateInput(num2)) {
    console.log(`${num2} is not a valid number`)
  }

  if (validateInput(num1) && validateInput(num2)) {
    if (operator === '+' || operator === 'add') {
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operator === "-" || operator === "subtract") {
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (operator === "*" || operator === "multiply") {
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (operator === "/" || operator === "divide") {
      if (num2 === 0) console.log('You cannot divide by zero');
      else console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
      console.log('Operator Not Valid');
    }
  }
}

const validateInput = function(num) {
  return typeof(num) === 'number';
}



// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 0,
//   operation: '*',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

