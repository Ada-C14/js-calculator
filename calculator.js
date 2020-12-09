
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}


const calculateUserInput = function (error, promptInput) {
  if(isNaN(parseInt(promptInput.num1))) {
    console.log(`${promptInput.num1} is not a number`);
    return
  } else if(isNaN(parseInt(promptInput.num2))) {
    console.log(`${promptInput.num2} is not a number`)
    return
  }



  switch(promptInput.operation){
    case 'add':
    case '+':
      addNums(promptInput.num1, promptInput.num2)
    break

    case 'subtract':
    case '-':
      subtractNums(promptInput.num1, promptInput.num2)
    break;

    case 'multiply':
    case '*':
      multiplyNums(promptInput.num1, promptInput.num2)
    break;
    
    case 'divide':
    case '/':
      devideNums(promptInput.num1, promptInput.num2)
    break;

    default:
      console.log(`${promptInput.operation} is not a valid math operation`)

  }

  // Questions to ask and answer:
  // What is promptInput? It's the user input
  // What data type? What does it hold? What does it represent? It's an object that represents numbers entered by user
  // How do we read values from it? What syntax? we can use promptInput.operation to access operation or promptInput['operation']
  // How can we use it? we can use it to read values from the user input and to check if the user input is valid (in this context)
  // Can we call our existing functions now, inside of this function? Yes
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });

//solution
const addNums = function(a,b){ 
  let sum = parseInt(a) + parseInt(b)
  console.log(`${a} + ${b} = ${sum}`) ;
}

const subtractNums = function(a,b){ 
  let minus = parseInt(a) - parseInt(b)
  console.log(`${a} - ${b} = ${minus}`) 
}

const multiplyNums = function(a,b){ 
  let product = parseInt(a) * parseInt(b)
  console.log(`${a} * ${b} = ${product}`) 
}

const devideNums = function(a,b){ 
  if( b == 0){
 console.log('You cannot divide by zero');
 return
  }
  
  let division = parseInt(a) / parseInt(b)
  console.log(`${a} / ${b} = ${division}`) 
}


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;