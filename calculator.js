// TO:DO:

// This program only allows for single set of parentheses
// (3+5) --> OK
// (3+5)*(6+3) --> not covered

// This program does NOT allow more than one operation in an expression
// No order of operations followed

// This program doesn't allow expressions without enclosing parens
// (3+5) --> OK
// 3+5 --> NO

//////////////////////////////////////////////////

const validParens = function (num) {
  let parens = [];
  for (const char of num) {
    if (char === '(') {
      parens.push(char);
    } else if (char === ')') {
      if (parens.pop() !== '(') {
        return false;
      }
    }
  }

  if (parens.length > 0) {
    return false;
  }
  
  return true;
};

const reduceParensExpression = function(num) {
  num = num.replace('(', '');
  num = num.replace(')', '');
  
  for (op in validOps) {
    if (num.includes(op)) {
      const tempInput = num.split(op);
      const tempNum1 = tempInput[0];
      const tempNum2 = tempInput[1];
      const tempOp = op;
      const tempSoln = computeWithValidations(tempNum1, tempNum2, tempOp); 
      return tempSoln;
    }
  }

  return num;
}

const evalParens = function (num, origNum, errors) {
  if (!validParens(num)) {
    error = `INVALID PARENS: ${origNum} does not use valid parentheses.`;
    console.log(error);
    errors += error;
  } else {
    numReduced = reduceParensExpression(num);
    if (numReduced.soln || numReduced.soln === 0) {
      num = numReduced.soln;
      errors += numReduced.errors;
    } else {
      num = numReduced;
    }
  }

  return { num, errors };
};

const validOps = {
  add: '+',
  '+': 'add',
  subtract: '-',
  '-': 'subtract',
  exponent: ['^', '**'],
  '^': 'exponent',
  '**': 'exponent',
  multiply: '*',
  '*': 'multiply',
  divide: '/',
  '/': 'divide',
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

const validNum = function (num, errors) {
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

const computeWithValidations = function (num1, num2, operator) {
  let soln;
  let passedNumsCheck = true;
  let passedOperatorCheck = true;
  let errors = [];

  if (validNum(num1)) {
    num1 = Number(num1);
  } else {
    errors.push(`INVALID NUMBER: ${num1} is not a valid number.`);
    passedNumsCheck = false;
  }

  if (validNum(num2)) {
    num2 = Number(num2);
  } else {
    errors.push(`INVALID NUMBER: ${num2} is not a valid number.`);
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

  return { soln, errors, operator }
};

const calculateUserInput = function (error, promptInput) {
  let num1 = promptInput.num1;
  let num2 = promptInput.num2;
  let origNum1 = num1;
  let origNum2 = num2;
  let operator = promptInput.operation.toLowerCase();
  let errors = [];

  if (num1.includes('(') || num1.includes(')')) {
    const evalOutput = evalParens(num1, origNum1, errors);
    num1 = evalOutput.num;
    errors += evalOutput.errors;
    if (errors.length > 0) {
      return;
    }
  }

  if (num2.includes('(') || num2.includes(')')) {
    const evalOutput = evalParens(num2, origNum2, errors);
    num2 = evalOutput.num;
    errors += evalOutput.errors;
    if (errors.length > 0) {
      return;
    }
  }
  
  reducedExpression = computeWithValidations(num1, num2, operator);
  operator = reducedExpression.operator;
  errors += reducedExpression.errors;

  if (errors.length === 0) {
      console.log(`${origNum1} ${operator} ${origNum2} = ${reducedExpression.soln}`);
  }
};

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

//////////////////////////////////////////////////

// // Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: '(3.3 * 45)',
//   // num2: '0',
//   num2: '(890-890)',
//   // operation: 'AdD'
//   // operation: 'dividE'
//   operation: '**'
// });

// calculateUserInput({}, {
//   num1: '5',
//   num2: 'dog',
//   operation: '/',
// });

// calculateUserInput({}, {
//   num1: '3',
//   num2: '+',
//   operation: 'butt',
// });

// calculateUserInput({}, {
//   num1: '3',
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
