
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? 
    /* promptInput is a parameter of the calculateUserInput function. */
  // What data type? What does it hold? What does it represent? 
    /* The data type is an object. In general, objects are a collection of properties. Here promptInput is a collection of the prompts given to the user and the user's input. For example, after running npm start in the terminal the user is prompted to enter num1, num2 and an operation. If the user enters 1, 2, and add, respectively, then the promptInput will display back { num1: '1', num2: '2', operation: 'add' }. */
  // How do we read values from it? What syntax?
    /* We can read values from it like so:
    promptInput - this will give back the whole object
    promptInput.num1 or promptInput['num1'] - this will give back the value of (the attribute?) num1. (replace num1 w/ num2 to get back num2 info)
    promptInput.operation or promptInput['operation'] - this will give back the operation the user has selected */
  // How can we use it? 
    /* We can use it to retrieve user entered information. */
  // Can we call our existing functions now, inside of this function? 
    /* yes 👾🔥👾🔥👾 */
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;