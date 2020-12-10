
const UserInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}
// '3 + 5 = 8'

//check that number is an integer 

const isInteger = function(input) {
  if (isNaN(input)) console.log(`"${input}" is not a number`);
  return parseInt(input);
};

const addNums = function(a, b) {
  return `${a} + ${b} = ${a + b}`;
};

const subtractNums = function(a, b) {
  return `${a} - ${b} = ${a - b}`;
};

const multiplyNums = function(a, b) {
  return `${a} * ${b} = ${a * b}`;
};

const divideNums = function(a, b) {
  if (b === 0) {
    return 'You cannot divide by zero'
  } else {
    return `${a} / ${b} = ${a / b}`;
  }
};


const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  const num1 = isInteger(promptInput.num1);
  const num2 = isInteger(promptInput.num2);
  const operation = promptInput.operation;


  switch(operation) {
    case '+':
    case 'add':
      console.log(addNums(num1, num2));
      break;
    case '-':
    case 'subtract':
      console.log(subtractNums(num1, num2));
      break;
    case '*':
    case 'multiply':
      console.log(multiplyNums(num1, num2));
      break;
    case '/':
    case 'divide':
      console.log(divideNums(num1, num2));
      break;
    default:
        console.log('unsuported operator!');
        break;
  }
}


  // Questions to ask and answer:
  // What is promptInput? It is a paramater of our function 
  // What data type? What does it hold? What does it represent? Its a key-value pair and represents the inputs. 
  // How do we read values from it? What syntax? Using dot notation
  // How can we use it? To read the input 
  // Can we call our existing functions now, inside of this function? Yes we can. 


// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

