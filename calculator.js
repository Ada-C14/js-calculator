const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleAdditionSymbolInput = {
  num1: 3,
  num2: 5,
  operation: '+',
}

const exampleSubtractionInput = {
  num1: 3,
  num2: 5,
  operation: 'subtract',
}

const exampleSubtractionSymbolInput = {
  num1: 3,
  num2: 5,
  operation: '-',
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operation: 'multiply',
}

const exampleMultiplicationSymbolInput = {
  num1: 3,
  num2: 5,
  operation: '*',
}

const exampleDivisionInput = {
  num1: 30,
  num2: 5,
  operation: 'divide',
}

const exampleDivisionSymbolInput = {
  num1: 30,
  num2: 5,
  operation: '/',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  const num1 = Number.parseFloat(promptInput.num1);
  const num2 = Number.parseFloat(promptInput.num2);

  if (Number.isNaN(num1)) {
    console.error(`${num1} is not a number.`);
  } else if (Number.isNaN(num2)) {
    console.error(`${num2} is not a number`);
  }

  switch (promptInput.operation) {
    case 'add':
    case '+': {
      const result = num1 + num2;
      console.log(`${num1} + ${num2} = ${result}`);
      return result;
    }

    case 'subtract':
    case '-': {
      const result = num1 - num2;
      console.log(`${num1} - ${num2} = ${result}`);
      return result;
    }

    case 'multiply':
    case '*': {
      const result = num1 * num2;
      console.log(`${num1} * ${num2} = ${result}`);
      return result;
    }

    case 'divide':
    case '/': 
    if (num2 === 0) {
      console.log('You cannot divide by zero')
      return false;
    } else {
      const result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`);
      return result;
    }
      break;
    default:
      console.log(`${promptInput.operation} is not supported.`);
  }

  // Questions to ask and answer:
  // What is promptInput? 
  // Object that has the input
  // What data type? What does it hold? What does it represent?
  // The data type is an object. It holds information about the two numbers and which operation is used. It represents user input.
  // How do we read values from it? What syntax?
  // Bracket notation or dot notation. Ex: objectName.propertyName or objectName['propertyName']
  // How can we use it?
  // We can use it to access properties of the input. 
  // Can we call our existing functions now, inside of this function?
    // Yes
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;