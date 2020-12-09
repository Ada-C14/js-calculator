
var this_is_var = true;

const exampleAdditionInput = {
  num1: 3,
  num2: 0,
  operation: 'divide',
}

const calculateUserInput = function (error, promptInput) {
  //console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

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
  }

  const operator = operators[promptInput.operation.toLowerCase()]
  const operation = operations[operator]
  //const solution = operationsWithWords[promptInput.operation.toLowerCase()](promptInput.num1, promptInput.num2)

  if(operation === undefined){
    console.log('Operation is invalid.');
  }
  else{
    const solution = operation(parseInt(promptInput.num1), parseInt(promptInput.num2));

    if(solution === 'zerodiv'){
      console.log('You cannot divide by zero');
    }
    else{
      console.log(`${promptInput.num1} ${operator} ${promptInput.num2} = ${solution}`);
    }

  } 
  


  
}


calculateUserInput(1, exampleAdditionInput);



// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;