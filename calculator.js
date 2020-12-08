// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

const validNum = function (num) {
  const temp = Number(num);
  
  if (typeof(temp) != 'number') {
    return false;
  } else if (temp === 0 && !(temp == num)) {
    return false;
  };

  return true;
};

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  let num1;
  let num2;
  let soln;
  
  if (validNum(promptInput.num1) && validNum(promptInput.num2)) {
    num1 = Number(promptInput.num1);
    num2 = Number(promptInput.num2);
  };

  if (num1 && num2) {
    switch (promptInput.operation) {
      case 'add':
      case '+':
        soln = num1 + num2;
        break;
      case 'subtract':
      case '-':
        soln = num1 - num2;
        break;
      case 'multiply':
      case '*':
        soln = num1 * num2;
        break;
      case 'divide':
      case '/':
        soln = num1 / num2;
        break;
      default:
        console.log('Please provide one of the following operations: +, -, *, /');
    }
  } else {
    console.log('Sorry, one of the input numbers is invalid.')
  };

  if (soln) {
    console.log(soln);
  };

  // Questions to ask and answer:
  // What is promptInput?
  // >> user input following user prompt
  
  // What data type? What does it hold? What does it represent?
  // console.log(typeof promptInput);
  // >> object; holds name-value pairs (strings for our numbers and operator);
  // represents user inputs for num1, num2, and operation
  
  // How do we read values from it? What syntax?
  // We can read values using promptInput.key or promptInput[key]

  // How can we use it?
  // We can use the inputs to calculate our output
  
  // Can we call our existing functions now, inside of this function?
  // Yes
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;