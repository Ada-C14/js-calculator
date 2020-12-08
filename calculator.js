const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?
}


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

const input = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

// const addNums = function(a,b){
//   const result = a + b;
//   return result;
// }

// const subtractNums = function(a,b){
//   const result = a - b;
//   return result;
// }

// const multiplyNums = function(a,b){
//   const result = a * b;
//   return result;
// }

// const divideNums = function(a,b){
//   const result = a / b;
//   return result;
// }

// const modulusNums = function(a,b){
//   const result = a % b;
//   return result;
// }


const calculator = function(input){

  // const validOperations = {'+': '+', 'add': '+', '-': '-', 'subtract': '-', '*': '*', '*': 'multiply', '/': 'divide', '/': '/'};

  // if ((input[operation] in validOperations) === false){
  //   console.log(`Error: "${input[operation]}" is not a valid operator. Please enter a valid operator and run the program again.`);
  // }

  if ('number' !== typeof input['num1']){
    console.log(`Error: "${input['num1']}" is not a number. Please enter a number and run the program again.`);
  }

  if ('number' !== typeof input['num2']){
    console.log(`Error: "${input['num2']}" is not a number. Please enter a number and run the program again.`);
  }
let result;

switch (input['operation']){
  case 'add' || '+':
    result = input['num1'] + input['num2'];
    break;
  case 'subtract' || '-':
    result = input['num1'] - input['num2'];
    break;
  case 'multiply' || '*':
    result = input['num1'] * input['num2'];
    break;
  case 'divide' || '/':
    if (input['num2'] === 0){
      result = 'cannot be calculated because we cannot divide by zero';
    }else{
      result = input['num1'] / input['num2'];
    }
    break;
  case'modulus' || '%':
    if (input['num2'] === 0){
      result = 'cannot be calculated because we cannot perform modulus zero';
    }else{
      result = input['num1'] % input['num2'];
    }
    break;
  case 'raised-to' || '^':
    result = input['num1'] ** input['num2'];
    break;
  default:
    result = `The word or symbol "$input[operator]}" is not a valid operator.  Please enter a valid operator, and run the program again.`;
}

return result;
}

const answer = calculator(input);
console.log(answer);