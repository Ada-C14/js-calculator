const validOps = {
  add: '+',
  '+': 'add',
  subtract: '-',
  '-': 'subtract',
  multiply: '*',
  '*': 'multiply',
  divide: '/',
  '/': 'divide'
};

const validDivision = function (num) {
  if (num === 0) {
    return false;
  }
  return true;
};

const validNum = function (num) {
  const temp = Number(num);
  
  if (typeof(temp) != 'number') {
    return false;
  } else if (Number.isNaN(temp)) {
    return false;
  } else if (temp === 0 && !(temp == num)) {
    return false;
  };

  return true;
};

const calculateUserInput = function (error, promptInput) {
  let num1;
  let num2;
  let passedNumsCheck;
  let passedOperatorCheck = true;
  let operator;
  let soln;
  let errors = [];
  
  if (validNum(promptInput.num1) && validNum(promptInput.num2)) {
    num1 = Number(promptInput.num1);
    num2 = Number(promptInput.num2);
    passedNumsCheck = true;
  } else {
    errors.push('INVALID NUMBER: One of the input numbers is invalid.');
    passedNumsCheck = false;
  };

  if (!validOps[promptInput.operation]) {
    errors.push('INVALID OPERATOR: Please provide one of the following operators: +, -, *, /');
    passedOperatorCheck = false;
  } else if (validOps[promptInput.operation] === 'divide' || validOps[promptInput.operation] == '/') {
    if (!validDivision(num2)) {
      errors.push('DIVIDING BY ZERO: Please change num2 so that we do not get a zero division error.');
      passedOperatorCheck = false;
    }
  };
  
  if (passedNumsCheck && passedOperatorCheck) {
    switch (promptInput.operation) {
      case 'add':
      case '+':
        operator = '+';
        soln = num1 + num2;
        break;
      case 'subtract':
      case '-':
        operator = '-';
        soln = num1 - num2;
        break;
      case 'multiply':
      case '*':
        operator = '*';
        soln = num1 * num2;
        break;
      case 'divide':
      case '/':
        operator = '/';
        soln = num1 / num2;
        break;
    }
  } else {
    console.log(`Woops! We've encountered errors:`);
    for (error in errors) {
      console.log(errors[error]);
    };
  };

  if (passedNumsCheck && passedOperatorCheck && !(soln === null)) {
    console.log(`${num1} ${operator} ${num2} = ${soln}`);
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

// // Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 0,
  operation: 'divide',
});

// calculateUserInput({}, {
//   num1: 5,
//   num2: 'dog',
//   operation: '/',
// });

// calculateUserInput({}, {
//   num1: 3,
//   num2: '+',
//   operation: 'butt',
// });

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;