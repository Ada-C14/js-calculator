
const UserInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

//check that number is an integer
const isInteger = function(input) {
  if (isNaN) console.log(`${input} is not a number`);
  return(input);
}

const addNums = function(a, b) {
  return `${a} + ${b} = ${a + b}`;
};

const subtractNums = function(a, b) {
  return `${a} - ${b} = ${a - b}`;
};

const multiplyNums = function(a, b) {
  return `${a} * ${b} = ${a * b}`;
};

const divideNums = function(a, b) {
  if (b === 0) {
    return 'You cannot divide by zero'
  } else {
    return `${a} / ${b} = ${a / b}`;
  }
};


const calculateUserInput = function (error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  // Questions to ask and answer:
  // What is promptInput? It is a paramater of our function 
  // What data type? What does it hold? What does it represent? Its a key-value pair and represents the inputs. 
  // How do we read values from it? What syntax? Using dot notation
  // How can we use it? To read the input 
  // Can we call our existing functions now, inside of this function? Yes we can. 
}

// Example manual testing of calculator.  
// calculateUserInput({}, {
//   num1: 3,
//   num2: 4,
//   operation: 'add',
// });


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;




// #method that does calculation of two numbers 

// def calculate (operator,num_one,num_two)
//   case operator
//   when "add", "+"
//     puts "You've added:"
//     return num_one + num_two
//   when "subtract", "-"
//     puts "You've subtracted:"
//     return num_one - num_two
//   when "multiply", "*"
//     puts "You've multiplied:"
//     return num_one * num_two
//   when "divide", "/"
//     if num_two == 0
//       puts "Sorry, you cannot divide by zero. The program will now exit. "
//       exit
//     end
//     puts "You've divided:"
//     return num_one / num_two
//   else
//     puts "Invalid operator. The program will now exit."
//     exit
//   end
// end

// ### This is the code that is running
// puts "Welcome to the Calculator program!"
// puts "\n"

// puts "Please enter two numeric values"
// puts "\n"

// print "Please enter first value:"
// num_one = number_input()
// puts "\t you've entered #{num_one}"

// puts "\n"
// print "Please enter second value:"
// num_two = number_input()
// puts "\t you've entered #{num_two}"

// puts "\n"
// puts"Enter an operator: (add or +, subtract or -, divide or /, multiply or *)"
// operator = gets.chomp.downcase


// puts calculate(operator,num_one,num_two)
// puts "\n"
// puts "Thanks for using the calculator program!"