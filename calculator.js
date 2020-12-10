const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

// const badInput = {
//   num1: 'dog',
//   num2: 5,
//   operation: '*',
// }

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Check for invalid data

  if (isNaN(promptInput.num1)) {
    console.log(`${promptInput.num1} is not a number.`)
    return
  }
  
  if (isNaN(promptInput.num2)) {
    console.log(`${promptInput.num2} is not a number.`)
    return
  }

  const ops = [ 'add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/' ]

  if (!(ops.includes(promptInput.operation))) {
    console.log('unsupported operator')
    return
  }
  
  const num1 = parseInt(promptInput.num1)
  const num2 = parseInt(promptInput.num2)
  const op = promptInput.operation
  
  const calculate = function() {
    switch (op) {
      case 'add': 
      case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case 'subtract': 
      case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
      case 'multiply': 
      case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
      case 'divide': 
      case '/':
        if (num2 === 0) {
          console.log('You cannot divide by zero')
          break;
        }
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;
    } 
  }
  calculate();
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: 3,
  num2: 5,
  operation: '/',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;




 // Accessing things in object (ex: promptInput.num1)

  // Questions to ask and answer:
  // What is promptInput?  Is an object (looks like a hash) containing keys (num1, num2, & operation)
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax? Accessing things in object (ex: promptInput.num1)
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

// NOT A HASH!!!! USE OBJECT SYNTAX ([]-work)

    // if (typeof promptInput.operation !== ops) {
  //   console.log('unsupported operator')
  // }
  //????
  // if (promptInput.includes(ops)) return true else console.log('unsupported operator')


  // if promptInput.num1 || promptInput.num2 are not a number (NaN?)
  // return console.log('you need to enter in proper nums')
  // else if promptInput.operator is not an appoved operation 
  // return console.log('you need to enter in proper operation')


  // const input = exampleAdditionInput
  // const calculate = function(input)

  // //if statement??
  // //switch (input) { 
  //   case input.operation === 'add' || input.operation === '+'
  //   console.log(`${promptInput.num1}` + `${promptInput.num2}' = '${promptInput.num1 + promptInput.num2}')
// OR??
 
// Potential Helper Methods
// const addNums = function(a, b) {
// }


// const subtractNums = function(a, b) {
// }

// const multiplyNums = function(a, b) {
// }

// const divideNums = function(a, b) {
//   // if b = 0 return console.log('you can't divide by zero silly')
// }

// call function -> calculate();





 