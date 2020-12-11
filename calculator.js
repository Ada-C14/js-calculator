
const exampleAdditionInput = {
  num1: 2,
  num2: 4,
  operation: 'add',
}
// '3 + 5 = 8'

const calculateUserInput = function (error, promptInput) {

  let solution;
  const num1 = promptInput.num1
  const num2 = promptInput.num2

  if (num1 == '' && num2 == '') {
    console.log('Please enter valid numbers.');
  } else if (num1 == '') {
    console.log('Please enter a 1st number.');
  } else if (num2 == '') {
    console.log('Please enter a 2nd number.');
  } else if (isNaN(num1)) {
    console.log(`${num1} is not a number.`)
  } else if (isNaN(num2)) {
      console.log(`${num2} is not a number.`);
  } else {
    switch(promptInput['operation']) {
      case '+':
      case 'add':
        // parseInt parses a String argument, returns an integer 
        solution = parseInt(promptInput.num1) + parseInt(promptInput.num2);
        console.log(`${promptInput.num1} + ${promptInput.num2} = ${solution}`);
        break;
      case '-':
      case 'subtract':
        solution = parseInt(promptInput.num1) - parseInt(promptInput.num2);
        console.log(`${promptInput.num1} - ${promptInput.num2} = ${solution}`);
        break;
      case '*':
      case 'multiply':
        solution = parseInt(promptInput.num1) * parseInt(promptInput.num2);
        console.log(`${promptInput.num1} * ${promptInput.num2} = ${solution}`);
        break;
      case '/':
      case 'divide':
        if (promptInput.num2 == 0) {
          console.log('You cannot divide by zero')
          return
        }
        solution = parseInt(promptInput.num1) / parseInt(promptInput.num2);
        console.log(`${promptInput.num1} / ${promptInput.num2} = ${solution}`);
        break;
      default:
        console.log('unsupported operator')  
      }
    }
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 5,
  num2: 10,
  operation: '/',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;


  // Questions to ask and answer:
  // What is promptInput? add/+/subtract/etc... as well as the input numbers
  // What data type? What does it hold? What does it represent? string or number. represents operation and input numbers.
  // How do we read values from it? What syntax? We call .num1 or .num2 as dot methods. operation we call as promptInput['operation']
  // How can we use it? To do calculations on the sample input given to us by the user
  // Can we call our existing functions now, inside of this function? Yes