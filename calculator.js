
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
    '%': function (num1, num2){ 
      if(num2 === 0){
        return 'zeromod';
      }
      else{
        return num1 % num2;
      }
      
    }
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

  console.log(output(operator, operation, num1, num2));
}

const output = function(operator, operation, num1, num2){
  if(operation === undefined) {
    return 'Operation is invalid.';
  }
  else {
    const solution = operation(num1, num2);

    if(solution === 'zerodiv'){
      return 'You cannot divide by zero';
    }
    else if(solution === 'zeromod'){
      return 'You cannot modulo by zero';
    }
    else{
      return `${num1} ${operator} ${num2} = ${solution}`;
    }

  } 
}
calculateUserInput(1, exampleAdditionInput);

exports.calculateUserInput = calculateUserInput;