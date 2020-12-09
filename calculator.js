
const exampleAdditionInput = {
  num1: 3,
  num2: 0,
  operation: 'divide',
}

const calculateUserInput = function (error, promptInput) {

  const operations = {
    '+': function (num1, num2){ return num1 + num2},
    '-': function (num1, num2){ return num1 - num2},
    '*': function (num1, num2){ return num1 * num2},
    '/': function (num1, num2){ 
      if(num2 === 0){
        return 'zerodiv';
      }
      else{
        return num1 / num2;
      }
    },
    '**': function (num1, num2){ return num1 ** num2},
    '%': function (num1, num2){ return num1 % num2}
  };

  const operators = {
    add: '+',
    '+' : '+',
    subtract: '-',
    '-' : '-',
    multiply: '*',
    '*' : '*',
    'x' : '*',
    divide: '/',
    '/': '/', 
    '**': '**',
    '^': '**',
    'to the power of': '**',
    '%': '%',
    modulo: '%'
  };

  const num1 = parseInt(promptInput.num1);
  const num2 = parseInt(promptInput.num2);

  if(isNaN(num1)|| isNaN(num2)){
    console.log('Number is invalid');
    return;
  }

  const operator = operators[promptInput.operation.toLowerCase()];
  const operation = operations[operator];
  console.log(output(operator, operation, num1, num2))
  // if(operation === undefined) {
  //   console.log('Operation is invalid.');
  // }
  // else {
  //   const solution = operation(parseInt(num1), parseInt(num2));

  //   if(solution === 'zerodiv'){
  //     console.log('You cannot divide by zero');
  //   }
  //   else{
  //     console.log(`${num1} ${operator} ${num2} = ${solution}`);
  //   }

  // } 
}

const output = function(operator, operation, num1, num2){
  if(operation === undefined) {
    return 'Operation is invalid.';
  }
  else {
    const solution = operation(parseInt(num1), parseInt(num2));

    if(solution === 'zerodiv'){
      return 'You cannot divide by zero';
    }
    else{
      return `${num1} ${operator} ${num2} = ${solution}`;
    }

  } 
}
calculateUserInput(1, exampleAdditionInput);


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;