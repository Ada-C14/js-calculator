
// const exampleAdditionInput = {
//   num1: 3,
//   num2: 5,
//   operation: 'add',
// }
// '3 + 5 = 8'

// const calculateUserInput = function (error, promptInput) {
//   console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?


// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });
const calculateUserInput = function(userInput){
	let num1 = userInput.num1
	let num2 = userInput.num2
  if (userInput.num1 === NaN || userInput.num2 === NaN);
  {
    console.log('Uh oh! Looks like you inputted something other than a number');
  };
    
  if (userInput.operation === 'add' || userInput.operation === '+');
 {
  let result = num1 + num2
  let operator = '+'
		} else if (userInput.operation == 'subtract' || userInput.operation === '-');
{
  let result = num1 - num2
  let operator = '-'
		} else if (userInput.operation == 'multiply' || userInput.operation === '*');
{
  let result = num1 * num2
  let operator = '*' 
		} else if (userInput.operation == 'divide' || userInput.operation === '/');
{
  			if (num1 === 0 || num2 === 0);
  				{
    				console.log('Ummmm... you cannot divide by zero!');
  				};

				let result = num1 / num2
				let operator = '/'
		} else if();
{
  console.log('Not a valid operator');
};
return console.log('${num1} ${operator} ${num2} = ${result}' )

};

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;