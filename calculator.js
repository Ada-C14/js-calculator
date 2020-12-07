 const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput?
  // What data type? What does it hold? What does it represent?
  // How do we read values from it? What syntax?
  // How can we use it?
  // Can we call our existing functions now, inside of this function?

   // check in valid input 

   // convert the numbers to integers
   const num1 = Number(promptInput.num1)
   const num2 = Number(promptInput.num2)
   const operation = promptInput.operation
 
 
   // not a number function
 
  //  const notNum = function(num) {
  //    if (isNaN(num)) {
  //      console.log(`${num} is not a number`);
  //    }
  //  }
 
  
  
   if (isNaN(num1)) {
     console.log(`${num1} is not a number`);
   } else if (isNaN(num2)) {
     console.log(`${num2} is not a number`);
   } else {
     switch (operation) {
       case '+':
       case 'add':
         console.log(`${num1} + ${num2} = ${num1 + num2}`);
         break;
       case '-':
       case 'subtract':
         console.log(`${num1} - ${num2} = ${num1 - num2}`);
         break;
       case '*':
       case 'multiply':
         console.log(`${num1} * ${num2} = ${num1 * num2}`);
         break;
       case '/':
       case 'divide':
         if (num2 == 0) {
           console.log('You cannot divide by zero');
           break;
         } else {
           console.log(`${num1} / ${num2} = ${num1 / num2}`);
           break;
         }
       default: 
         console.log('unsupported operator');
         break;
     }
   }
}

// Example manual testing of calculator.  
calculateUserInput({}, {
  num1: '3',
  num2: '4',
  operation: 'add',
});


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;