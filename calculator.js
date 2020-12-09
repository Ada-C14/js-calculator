
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  // console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
  const reg = /\(\d[-+\/*]\d\)/;
  let num1 = '';
  let num2 = '';
  if ((reg.test(promptInput.num1) === true) && (reg.test(promptInput.num2) === true)) {
    num1 = eval(promptInput.num1); 
    num2 = eval(promptInput.num2);
  } else if ((reg.test(promptInput.num1) === true) && (reg.test(promptInput.num2) === false)) {
    num1 = eval(promptInput.num1);
    num2 = Number(promptInput.num2);
  } else if ((reg.test(promptInput.num2) === true) && (reg.test(promptInput.num1) === false)) {
    num2 = eval(promptInput.num2);
    num1 = Number(promptInput.num1);
  } else {
    if (isNaN(Number(promptInput.num1)) && isNaN(Number(promptInput.num2))) {
      return console.log(`${ promptInput.num1 } and ${ promptInput.num2 } are not numbers`);
    } else if (isNaN(Number(promptInput.num1))) {
      return console.log(`${ promptInput.num1 } is not a number`);
    } else if (isNaN(Number(promptInput.num2))) {
      return console.log(`${ promptInput.num2 } is not a number`);
    } 
    num1 = Number(promptInput.num1);
    num2 = Number(promptInput.num2);
  }

  const operation = promptInput.operation.toLowerCase();

  if (operation === 'add' || operation === '+') {
    console.log(`${ promptInput.num1 } + ${ promptInput.num2 } = ` + (num1+num2));
  } else if (operation === 'subtract' || operation === '-') {
    console.log(`${ promptInput.num1 } - ${ promptInput.num2 } = ` + (num1-num2));
  } else if (operation === 'multiply' || operation === '*') {
    console.log(`${ promptInput.num1 } * ${ promptInput.num2 } = ` + (num1*num2));
  } else if (operation === 'divide' || operation === '/') {
    if (num2 === 0) {
      console.log('You cannot divide by zero');
    } else {
      console.log(`${ promptInput.num1 } / ${ promptInput.num2 } = ` + (num1/num2));
    }
  } else if (operation === 'modulo' || operation === '%') {
    console.log(`${ promptInput.num1 } % ${ promptInput.num2 } = ` + (num1%num2));
  } else if (operation === 'exponent' || operation === '**') {
    console.log(`${ promptInput.num1 } ** ${ promptInput.num2 } = ` +  exponent(num1,num2) + (num1**num2));
  } else {
    console.log('invalid operation');
  }
  // Questions to ask and answer:
  // What is promptInput? an object 
  // What data type? What does it hold? What does it represent? a hash-like object, it holds 2 numbers a string that represent input for the calculator
  // How do we read values from it? What syntax? dot notation or bracket notation
  // How can we use it? input it into calculator function
  // Can we call our existing functions now, inside of this function? yes
}

const exponent = function (num1, num2) {
  let i = 2;
  let string = `${ num1 } `;
  while (i < num2) {
    string = string.concat(`* ${ num1 } `);
    i += 1;
  }
  string = string.concat(`* ${ num1 } = `);
  return string
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;



