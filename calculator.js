
const validParens = function (num) {
  let parens = [];
  if (num.includes('(') || num.includes(')')) {
    for (const char of num) {
      if (char === '(') {
        parens.push(char);
      } else if (char === ')') {
        if (parens.pop() !== '(') {
          return false;
        }
      }
    }

    return true;
  }
};

const validOps = {
  add: '+',
  '+': 'add',
  subtract: '-',
  '-': 'subtract',
  multiply: '*',
  '*': 'multiply',
  divide: '/',
  '/': 'divide',
  exponent: ['^', '**'],
  '^': 'exponent',
  '**': 'exponent',
  modulo: '%',
  '%': 'modulo'
};

const validDivision = function (num, operator) {
  if (num === 0 && (operator === '/' ||
                    operator === 'divide' ||
                    operator === '%' ||
                    operator === 'modulo')) {
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
  } else if (temp === 0 && temp == num && num !== '0' && num !== 0) {
    return false;
  }

  return true;
};

const computeExpression = function (num1, num2, operator, soln) {
  switch (operator) {
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
    case 'exponent':
    case '**':
    case '^':
      operator = '^';
      soln = num1 ** num2;
      break;
    case 'modulo':
    case '%':
      operator = '%';
      soln = num1 % num2;
      break;
  }

  return { operator, soln };
};

const calculateUserInput = function (error, promptInput) {
  let num1 = promptInput.num1;
  let num2 = promptInput.num2;
  let origNum1 = num1;
  let origNum2 = num2;
  let operator = promptInput.operation.toLowerCase();
  let soln;
  let passedNumsCheck = true;
  let passedOperatorCheck = true;
  let passedParensCheck = true;
  let errors = [];
  
  // check if includes parens (one num at a time)
  // check valid parens else skip all the rest
  // if valid, solve until one num then move on to rest
  // if (num1.includes('(') || num1.includes(')')) {
  //   if (!validParens(num1))
  // }
  
  if (!validParens(num1)) {
    errors.push(`INVALID PARENS: ${origNum1} does not use valid parentheses.`);
    passedParensCheck = false;
  }

  if (validNum(num1) && validNum(num2)) {
    num1 = Number(num1);
    num2 = Number(num2);
  } else {
    errors.push('INVALID NUMBER: One of the input numbers is invalid.');
    passedNumsCheck = false;
  }
  
  if (!validOps[operator]) {
    errors.push('INVALID OPERATOR: Please provide one of the following operators: +, -, *, /');
    passedOperatorCheck = false;
  } else if (!validDivision(num2, operator)) {
      errors.push('DIVIDING BY ZERO: Please change num2 so that we do not get a zero division error.');
      passedOperatorCheck = false;
  }
  
  if (passedNumsCheck && passedOperatorCheck) {
    computation = computeExpression(num1, num2, operator, soln);
    operator = computation.operator;
    soln = computation.soln;
  } else {
    console.log(`Woops! We've encountered errors:`);
    for (error in errors) {
      console.log(errors[error]);
    }
  }

  if (passedNumsCheck && passedOperatorCheck && !(soln === null)) {
    console.log(`${origNum1} ${operator} ${origNum2} = ${soln}`);
  }
};

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

//////////////////////////////////////////////////

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: '(3.3)',
  num2: 0,
  // operation: 'AdD'
  operation: '**'
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

// calculateUserInput({}, {
//   num1: 3,
//   num2: '0',
//   operation: '%',
// });

//////////////////////////////////////////////////

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
