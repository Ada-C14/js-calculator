const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // --> It is the equivalent of gets.chomp in ruby
  // What data type? What does it hold? What does it represent?
  // -> Data type is the equivalent of class in ruby. It holds a value such as 'string', 'number'. It reprensents the data type of a object.
  // How do we read values from it? What syntax?
  // -> typeof variableName
  // How can we use it?
  // -> I used it to check if the num1 and num2 were numbers, i.e.
  //if ('number' !== typeof input['num1']){
  //  console.log(`Error: "${input['num1']}" is not a number. Please enter a number and run the program again.`);
  //}
  // Can we call our existing functions now, inside of this function?
  // -> Yes
  // const answer = calculateUserInput(input);
  // console.log(answer);
}


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

const calculateUserInput = function(input){

  if ('number' !== typeof input['num1']){
    console.log(`Error: "${input['num1']}" is not a number. Please enter a number and run the program again.`);
  }

  if ('number' !== typeof input['num2']){
    console.log(`Error: "${input['num2']}" is not a number. Please enter a number and run the program again.`);
  }

  let result;

  switch (input['operation']){
    case 'add':
    case '+':
      result = (input['num1'] + input['num2']);
      console.log(`${input['num1']} + ${input['num2']} = ${result}`);
      break;
    case 'subtract':
    case '-':
      result = (input['num1'] - input['num2']);
      console.log(`${input['num1']} - ${input['num2']} = ${result}`);
      break;
    case 'multiply':
    case '*':
      result = (input['num1'] * input['num2']);
      console.log(`${input['num1']} * ${input['num2']} = ${result}`);
      break;
    case 'divide':
    case '/':
      if (input['num2'] === 0){
        result = 'cannot be calculated because we cannot divide by zero';
      }else{
        result = (input['num1'] / input['num2']);
        console.log(`${input['num1']} / ${input['num2']} = ${result}`);
      }
      break;
    case'modulus':
    case '%':
      if (input['num2'] === 0){
        result = 'cannot be calculated because we cannot perform modulus zero';
      }else{
        result = (input['num1'] % input['num2']);
        console.log(`${input['num1']} % ${input['num2']} = ${result}`);
      }
      break;
    case 'raised-to':
    case '^':
      result = (input['num1'] ** input['num2']);
      console.log(`${input['num1']} ^ ${input['num2']} = ${result}`);
      break;
    default:
      result = `The word or symbol "${input['operation']}" is not a valid operator.  Please enter a valid operator, and run the program again.`;
  }

  return result;
}

// const input = {
//   num1: 3,
//   num2: -5,
//   operation: '/',
// }

// const answer = calculator(input);
// console.log(answer);