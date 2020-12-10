const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

function getValidOperator(operator) {
  const operators = [ 'add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

  if (operators.includes(operator)){
    return operator;
  }
  return undefined;
}

function getValidNums(number) {
  if (isNaN) {
    return parseInt(number);
  }
  return undefined;
}

const calculateUserInput = function (error, promptInput) {

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

  let num1 = getValidNums(promptInput.num1);
    if (num1 == null) {
      console.log(`Invalid input: ${promptInput.num1}`);
      return;
    };

  let num2 = getValidNums(promptInput.num2);
    if (num2 == null) {
      console.log(`Invalid input: ${promptInput.num2}`);
      return;
    };

  let operator = getValidOperator(promptInput.operation);
    if (operator == null) {
      console.log(`Invalid operator: ${promptInput.operation}`);
      return;
    };

    const addNums = (num1, num2) => { return`${num1} + ${num2} = ${num1 + num2}`};

    const subtractNums = (num1, num2) => { return`${num1} - ${num2} = ${num1 - num2}`};
      
    const multiplyNums = (num1, num2) => { return`${num1} * ${num2} = ${num1 * num2}`};
      
    const divideNums = (num1, num2) => { return`${num1} / ${num2} = ${num1 / num2}`};

    switch  (operator) {
      case 'add':
      case '+':
        console.log(addNums(num1, num2));
        break;
      case 'subtract':
      case '-':
        console.log(subtractNums(num1, num2));
        break;
      case 'multiply':
      case '*':
        console.log(multiplyNums(num1, num2));
        break;
      case 'divide':
      case '/':
        if (num2 == 0){
          console.log(`You cannot divide by zero`)
        }
        console.log(divideNums(num1, num2));
        break;
    }
    
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;