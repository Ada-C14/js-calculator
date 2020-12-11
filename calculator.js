
const userInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'

const validNum = function(num) {
  const number = Number(num);
  if (isNaN(number)) {
    console.log(`${num} is not a number.`)
  }
  return number
}

const calculate = function(input) {
  let total;
  let operator;
  const num1 = validNum(input.num1)
  const num2 = validNum(input.num2)
  switch (input.operation) {
    case 'add':
    case '+':
      total = num1 + num2;
      operator = '+';
      break;
    case 'subtract':
    case '-':
      total = num1 - num2;
      operator = '-';
      break;
    case 'multiply':
    case '*':
      total = num1 * num2;
      operator = '*';
      break;
    case 'divide':
    case '/':
      if (num2 === 0){
        total = null
        console.log('You cannot divide by zero');
        break;
      } else {
        total = num1 / num2;
        operator = '/';
      }
      break;
    default:
      console.log('unsupported operator');
  }
  if (total != null) {
    console.log(`${num1} ${operator} ${num2} = ${total}`)
  } 
}


const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
calculate(promptInput)
}




// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;