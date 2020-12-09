
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const checkNum = function (num) {
  if (isNaN(num)) {
    console.log(`${num} is not a number.  Try again.`)
    return false
  } else {
    return true
  };
}

const printResult = function (operator, num1, num2, result) {
  return console.log(`${ num1 } ${operator} ${ num2 } = ${ result }`);
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  if (!checkNum(promptInput.num1) || !checkNum(promptInput.num2)) {
    return
  };

  const num1 = parseInt(promptInput.num1);
  const num2 = parseInt(promptInput.num2);
  const operation = promptInput.operation.toLowerCase();
  let result = 0;

  switch (operation) {
    case 'add':
    case '+':
      result = num1 + num2;
      return printResult('+', num1, num2, result);
    case 'subtract':
    case '-':
      result = num1 - num2;
      return printResult('-', num1, num2, result);
    case 'multiply':
    case '*':
      result = num1 * num2;
      return printResult('*', num1, num2, result);
    case 'divide':
    case '/':
      if (num2 === 0) {
        return console.log('You cannot divide by zero');
      } else {
        result = num1 / num2;
        return printResult('/', num1, num2, result);
      }
    default: 
      return console.log(`unsupported operator`)
  }


  // Questions to ask and answer:
  // What is promptInput? it is an object holding num1, num2 (which should be numbers) and operation which should be a valid mathematical operation.
  // What data type? What does it hold? What does it represent? promptInput is an object representing user input of the numbers and operations.  
  // How do we read values from it? What syntax?  You can either use . notation or [], for example: promptInput.num1 or promptInput[num1]
  // How can we use it?  I will use it to simulate and CLI getting user input and testing if my calculator function works.  
  // Can we call our existing functions now, inside of this function?  No not from inside itself, the linter is telling me it's "unreachable" code.    
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 6,
  num2: 12,
  operation: 'add',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;