
const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const isNumber = function (input) {
  return input === parseInt(input).toString();
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? A parameter of our function.
  // What data type? Object. What does it hold? Key-value pairs. What does it represent? Our inputs.
  // How do we read values from it? What syntax? We can use bracket or dot notation.
  // How can we use it? To read in input.
  // Can we call our existing functions now, inside of this function? Yes.

  const num1 = promptInput.num1;
  const num2 = promptInput.num2;
  const operation = promptInput.operation;

  if (isNumber(num1) && isNumber(num2)) {
    switch (operation) {
      case 'add':
      case '+':
        console.log(`${ num1 } + ${ num2 } = ${ Number(num1) + Number(num2) }`);
        break;
      case 'subtract':
      case '-':
        console.log(`${ num1 } - ${ num2 } = ${ num1 - num2 }`);
        break;
      case 'multiply':
      case '*':
        console.log(`${ num1 } * ${ num2 } = ${ num1 * num2 }`);
        break;
      case 'divide':
      case '/':
        if (Number(num2) === 0) {
          console.log('You cannot divide by zero');
        } else {
          console.log(`${ num1 } / ${ num2 } = ${ num1 / num2 }`);
        }
        break;
      case 'modulo':
      case '%':
        console.log(`${ num1 } % ${ num2 } = ${ num1 % num2 }`);
        break;
      case 'exponentiate':
      case '^': {
        let formula = `${ num1 } ^ ${ num2 } = ${ num1 }`;

        for (let i = 0; i < parseInt(num2) - 1; i++) {
          formula += ` * ${ num1 }`;
        }  
        formula += ` = ${ num1 ** num2 }`;

        console.log(formula);
        break;
      }
      default:
        console.log('unsupported operator');
    }
  } else if (!isNumber(num1)) {
    console.log(`${ num1 } is not a number`);
  } else if (!isNumber(num2)) {
    console.log(`${ num2 } is not a number`);
  }
}  

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;