
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? data provided from user
  // What data type? What does it hold? What does it represent? strings, key: value pairs
  // How do we read values from it? What syntax? pull from key:value pair, make into number, evaluate if valid, and compare
  // How can we use it? either directly or by assiging it to a local variable
  // Can we call our existing functions now, inside of this function? unclear yet how to do helper methods, will update if necessary after function lessons

  let operation = promptInput.operation;
  let num1 = Number(promptInput.num1);  
  let num2  = Number(promptInput.num2);

  if (Number.isNaN(num1)  || Number.isNaN(num2)) {
    if (Number.isNaN(num1) ) {
      console.log(`${promptInput.num1} is not a number`);
    } else {
      console.log(`${promptInput.num2} is not a number`);
    }
  } else {
    if (operation === '+' || operation === 'add') {
      console.log (`${num1} + ${num2} = ${(num1 + num2)}`);
    } else if (operation === '-' || operation === 'subtract') {
      console.log (`${num1} - ${num2} = ${(num1 - num2)}`);
    } else if (operation === '*' || operation === 'multiply') {
      console.log (`${num1} * ${num2} = ${(num1 * num2)}`); 
    } else if (operation === '/' || operation === 'divide') {
      if (num2 == 0) {
        console.log('You cannot divide by zero');
      }
      else {
      console.log (`${num1} / ${num2} = ${(num1 / num2)}`); 
      }
    } else {
      console.log('unsupported operator')
    }
  }
}

// Example manual testing of calculator.  Returns 7 
calculateUserInput({}, {
  num1: 3,
  num2: 4,
  operation: 'add',
});

// Returns "you cannot divide by zero" for denominator 0 and division
calculateUserInput({}, {
  num1: 5,
  num2: 0,
  operation: 'divide',
});

// Returns "num2 is not a number"
calculateUserInput({}, {
  num1: 3,
  num2: 'hotdog', 
  operation: 'add',
});


// Returns "num1 is not a number"
calculateUserInput({}, {
  num1: 'corndog',
  num2: 4, 
  operation: 'add',
});

// Returns "unsupported operator"
calculateUserInput({}, {
  num1: 3,
  num2: 14, 
  operation: 'minus',
});


// Returns -11
calculateUserInput({}, {
  num1: 3,
  num2: 14, 
  operation: 'subtract',
});

// Returns  10
calculateUserInput({}, {
  num1: 0.5,
  num2: 20, 
  operation: 'multiply',
});

// Returns 33
calculateUserInput({}, {
  num1: 99,
  num2: 3, 
  operation: 'divide',
});

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;