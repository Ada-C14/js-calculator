const exampleAdditionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
const exampleAdditionInput2 = {
  num1: 3,
  num2: 5,
  operation: '+',
}
const exampleSubtractionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}
const exampleSubtractionInput2 = {
  num1: 3,
  num2: 5,
  operation: '-',
}
const exampleMultiplicationInput1 = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}
const exampleMultiplicationInput2 = {
  num1: 3,
  num2: 5,
  operation: '*',
}
const exampleDivisionInput1 = {
  num1: 3,
  num2: 5,
  operation: 'divide',
}
const exampleDivisionInput2 = {
  num1: 3,
  num2: 5,
  operation: '/',
}

const translateOperator = function(promptInput) {
  const validOperators = ['+', '-', '*', '/'];
  promptInput.operation = promptInput.operation.toLowerCase();
  switch(promptInput.operation) {
    case 'add':
      promptInput.operation = '+';
      break;
    case 'subtract':
      promptInput.operation = '-';
      break;
    case 'multiply':
      promptInput.operation = '*';
      break;
    case 'divide':
      promptInput.operation = '/';
      break;
  }

  if (validOperators.includes(promptInput.operation)) {
    return promptInput;
  } else {
   console.log('unsupported operator');
   return null;
  }
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  if (promptInput.num1 != Number(promptInput.num1)) {
    console.log(`${promptInput.num1} is not a number.`)
    return null;
  } else if (promptInput.num2 != Number(promptInput.num2)) {
    console.log(`${promptInput.num2} is not a number.`)
    return null;
  }

  promptInput.num1 = Number(promptInput.num1);
  promptInput.num2 = Number(promptInput.num2);
  if (translateOperator(promptInput) == null) {
    return null;
  }

  let result;
  switch(promptInput.operation) {
    case '+':
      result = promptInput.num1 + promptInput.num2;
      break;
    case '-':
      result =  promptInput.num1 - promptInput.num2;
      break;
    case '*':
      result = promptInput.num1 * promptInput.num2;
      break;
    case '/':
      if (promptInput.num2 == 0) {
        console.log('You cannot divide by zero');
      } else {
        result = promptInput.num1 / promptInput.num2;
      }
      break;
    default:
      throw 'Error occurred. Program exited.';
  }

  const statement = `${promptInput.num1} ${promptInput.operation} ${promptInput.num2} = ${result}`;

  console.log(statement);
  return statement; 
}

// Tests for basic functions
// calculateUserInput({}, exampleAdditionInput1);
// calculateUserInput({}, exampleAdditionInput2);
// calculateUserInput({}, exampleSubtractionInput1);
// calculateUserInput({}, exampleSubtractionInput2);
// calculateUserInput({}, exampleMultiplicationInput1);
// calculateUserInput({}, exampleMultiplicationInput2);
// calculateUserInput({}, exampleDivisionInput1);
// calculateUserInput({}, exampleDivisionInput2);


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;