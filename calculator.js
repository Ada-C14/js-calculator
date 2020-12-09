
//QUESTIONS TO CONSIDER:
// What is promptInput? promptInput is an object holding all of the user input (2 numbers and an operator)
// What data type? What does it hold? What does it represent? See above answer.
// How do we read values from it? What syntax? dot notation or brackets
// How can we use it? I think it's sort of the 'brain' of the program. It connects user input to our library of calculator operations.
// Can we call our existing functions now, inside of this function? TBD.


// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }

//Operators that user can choose from
// const operators = ['add', '+', '-', 'subtract', '*', 'multiply', '/', 'divide']


//represents user input

//function to ensure user's operation input is valid from our operators assignment on line 9
// const validOperation = function(operation) {
//   if (operators.includes(operation)) {
//     return true;
//   }
//   else  {
//     return false;
//   }
// };

//function to check for divide by zero errors
// const divideZero = function(num1, num2, operation) {
//   if (num1 || num2 === 0 && operation === '/' || operation === 'divide') {
//     console.log('Oops! Division by zero error');
//   }
// };

//function to ensure no rogue number entries are made. Numbers only, please!!
//should return boolean so function calling this function knows how to proceed
const validNumber = function(userInput) {
  if (isNaN(userInput)) {
    return false;
    }
  else {
    return true;
    }
};

let result = 0 //result needs to be defined

const printResults = function(num1, num2, operation, result) {
  console.log(`${num1} ${operation} ${num2} = ${result}`);
}

//chose to use this as my 'calculate' function
const calculateUserInput = function (error, promptInput) {

const num1 = parseFloat(promptInput.num1);
const num2 = parseFloat(promptInput.num2);
const operation = promptInput.operation;

  //validate user input
  if (!validNumber(promptInput.num1)) {
    return console.log(`${promptInput.num1} is not a number.`);
  } else if (!validNumber(promptInput.num2)) {
    return console.log(`${promptInput.num2} is not a number.`);
  }
  // if (!validOperation(operation)) {
  //   return;
  // }
  // if (divideZero) {
  //   return;
  // }
    switch (operation) {

      case '+':
      case 'add':
        result = num1 + num2;
        return printResults(num1, num2, '+', result);
      case '-':
      case 'subtract':
        result = num1 - num2;
        return printResults(num1, num2, '-', result);
      case '*':
      case 'multiply':
        result = num1 * num2;
        return printResults(num1, num2, '*', result);
      case '/':
      case 'divide':
        if (num2 === 0) {
          return console.log('You cannot divide by zero');
        } else {
        result = num1 / num2;
        return printResults(num1, num2, '/', result);
        }
        break; //kept receiving error saying this 'break' line is needed...but now there's a squiggly saying it's unreachable.
      default:
        return console.log('unsupported operator');

    }
};


// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});



// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

//small change because of git trouble