const calculateUserInput = function (error, promptInput) {
  const operations = new Operations; 
  const operators = new Operators; 
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

const Operations = function(){
  this['+'] = function (num1, num2){ return num1 + num2};
  this['-'] = function (num1, num2){ return num1 - num2};
  this ['*'] = function (num1, num2){ return num1 * num2};
  this['/'] = function (num1, num2){ 
        if(num2 === 0){
          return 'zerodiv';
        }
        else{
          return num1 / num2;
        }
      };
  this['**'] = function (num1, num2){ return num1 ** num2};
  this['%'] = function (num1, num2){ 
      if(num2 === 0){
        return 'zeromod';
      }
      else{
        return num1 % num2;
      }
    };
}

const Operators = function(){
  this.add = this['+'] = '+';
  this.subtract = this['-'] = '-';
  this.multiply = this['*'] = this['x'] = '*';
  this.divide = this['/'] = '/';
  this['to the power of'] = this['**'] = this['^'] = '**';
  this.modulo = this['%'] = '%';
}
exports.calculateUserInput = calculateUserInput;