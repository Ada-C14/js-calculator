/* Questions to ask and answer:
  What is promptInput? 
    --> parameter for the function calculateUserInput
  What data type? What does it hold? What does it represent?
    --> promptInput is object datatype, it has num1, num2, and operation as keys in object
  How do we read values from it? What syntax?
    --> Use ex promptInput.num1 or promptInput[num1] to read the value
  How can we use it?
    --> Use the values do the calculation
  Can we call our existing functions now, inside of this function?
    --> Yes, it'll print out the string in console.log
*/

const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  if (isNaN(promptInput.num1)) {
    console.log(`${promptInput.num1} is invalid, please try again`);
  }
  else if (isNaN(promptInput.num2)) {
    console.log(`${promptInput.num2} is invalid, please try again`);
  };
  let firstNum = parseFloat(promptInput.num1);
  let secondNum = parseFloat(promptInput.num2);
  let operator = promptInput.operation;
  let result = 0;
  switch (operator) {
    case 'add': case '+':
      result = firstNum + secondNum
      console.log(`${firstNum} + ${secondNum} = ${result}`);
      break;
    case 'substrct': case '-':
      result = firstNum - secondNum
      console.log(`${firstNum} - ${secondNum} = ${result}`);
      break;
    case 'multiply': case '*':
      result = firstNum * secondNum
      console.log(`${firstNum} * ${secondNum} = ${result}`);
      break;
    case 'divide': case '/': case 'modulo': case '%':
      if (secondNum === 0) {
        console.log('You cannot divide by zero');
        break;
      };
      
      if (operator == 'divide' || operator == '/') {
        result = firstNum / secondNum
        console.log(`${firstNum} / ${secondNum} = ${result}`);
        break;
      }
      else {
        result = firstNum % secondNum
        console.log(`${firstNum} % ${secondNum} = ${result}`);
        break;
      };
    default:
      console.log(`This calculator doesn't support operator ${operator}, please try again.`)
      break;
  };
}



// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;