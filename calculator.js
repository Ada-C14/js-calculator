
  // Questions to ask and answer:
  // What is promptInput?
  // --> It is the equivalent of gets.chomp in ruby
  // What data type? What does it hold? What does it represent?
  // -> Data type is the equivalent of class in ruby. It holds a value such as 'string', 'number'. It reprensents the data type of a object.
  // How do we read values from it? What syntax?
  // -> typeof variableName
  // How can we use it?
  // -> I used it to check if the num1 and num2 were numbers, i.e.
  //if (typeof promptInput['num1'] !== 'number'){
   // console.log(`Error: ${promptInput['num1']} is not a number. Please enter a number and run the program again.`);
  //}
  // Can we call our existing functions now, inside of this function?
  // -> Yes
  // const answer = calculateUserInput(input);
  // console.log(answer);
  
  const calculateUserInput = function (error, promptInput) {
    //console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
    const num1 = parseInt(promptInput['num1']);
    const num2 = parseInt(promptInput['num2']);

    if (isNaN(num1)){
      console.log(`Error: ${promptInput['num1']} is not a number. Please enter a number and run the program again.`);
    }
    // if (typeof promptInput['num2'] != 'number'){

    if (isNaN(num2)){
      console.log(`Error: ${promptInput['num2']} is not a number. Please enter a number and run the program again.`);
    }

      let result;

      const input = promptInput['operation']
    //switch (promptInput['operation']){
      switch (input){
      case 'add':
      case '+':
        console
        result = (num1 + num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 'subtract':
      case '-':
        result = (num1 - num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 'multiply':
      case '*':
        result = (num1 * num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case 'divide':
      case '/':
        if (num2 === 0){
          //result = 'cannot be calculated because we cannot divide by zero';
          result = 'You cannot divide by zero'
          console.log(`${result}`);

        }else{
          result = (num1 / num2);
          console.log(`${num1} / ${num2} = ${result}`);
        }
        break;
      case'modulus':
      case '%':
        if (num2 === 0){
          result = 'cannot be calculated because we cannot perform modulus zero';
          console.log(`${result}`);
        }else{
          result = (num1 % num2);
          console.log(`${num1} % ${num2} = ${result}`);
        }
        break;
      case 'raised-to':
      case '^':
        result = (num1 ** num2);
        console.log(`${num1} ^ ${num2} = ${result}`);
        break;
      default:
        result = `The word or symbol "${promptInput['operation']}" is not a valid operator.  Please enter a valid operator, and run the program again.`;
        console.log(`${result}`);
      }

    //return result;
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;

const arr = {
  num1: 3,
  num2: -4,
  operation: '+',
}

const answer= calculateUserInput('3 + -4 = -1 with "add"', arr);
console.log('answer', answer);