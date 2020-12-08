
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

  // let operation = window.prompt("Enter your name: ")( "Please enter a math operation: \n add (+), \n subtract (-), \n multiply (*),  \n divide (/), \n modulo (remainder or %), or \n exponent (** or ^) \n");

  let operation = promptInput.operation;

  let num1 = Number(promptInput.num1);  

  let num2  = Number(promptInput.num2);

  // let num1 = window.prompt("Please enter the first number")
  // let num2 = window.prompt("Please enter the second number")

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