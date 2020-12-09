
const calculateAdd = function(input) {
  let result = input.num1 + input.num2
  console.log(`${input.num1} + ${input.num2} = ${result}`);
   return;
};
const calculateSub = function(input ){
  let result = input.num1 - input.num2
  return console.log(`${input.num1} - ${input.num2} = ${result}`);
  return;
};
const calculateDiv = function(input) {
  if (input.num1 === 0 || input.num2 === 0){
  console.log('You cannot divide by zero');
   return;
  }
  let result = input.num1 / input.num2
  console.log(`${input.num1} / ${input.num2} = ${result}`);
   return;
};
const calculateMult = function(input) {
  let result = input.num1 * input.num2
  console.log(`${input.num1} * ${input.num2} = ${result}`);
  return;
  };

const notANumber = function(input) {
	const validatedInput = {operation: input.operation}
  validatedInput.num1 = parseInt(input.num1)
  validatedInput.num2 = parseInt(input.num2)
  if (isNaN(validatedInput.num1)){
    console.log(`${input.num1} is not a number.`);
    return null;
  };
  if (isNaN(validatedInput.num2)){
    console.log(`${input.num2} is not a number.`);
    return null;
  };
  operatorCheck(validatedInput)
};

const operatorCheck = function(input){
  if (input.operation === '+' || input.operation === 'add'){
    return calculateAdd(input);
};
  if (input.operation === '-' || input.operation === 'subtract'){
    return calculateSub(input);
  };
  if (input.operation === '/' || input.operation === 'divide'){
    return calculateDiv(input);
  };
  if (input.operation === '*' || input.operation === 'multiply'){
    return calculateMult(input);
  };
	return console.log('unsupported operator')
};
const calculateUserInput = function(errors, input){
  notANumber(input)
};
// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;