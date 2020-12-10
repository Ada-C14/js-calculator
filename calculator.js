// const printInputs = function(num1, num2)

const addCalc = function (num1, num2) {
  const result = (num1 * 1) + (num2 * 1);
  console.log(`${num1} + ${num2} = ${result}`);
};

const subCalc = function (num1, num2) {
  const result = (num1 * 1) - (num2 * 1);
  console.log(`${num1} - ${num2} = ${result}`);
};

const multCalc = function (num1, num2) {
  const result = (num1 * 1) * (num2 * 1);
  console.log(`${num1} * ${num2} = ${result}`);
};

const divCalc = function (num1, num2) {
  if (!(num2 * 1)) {
    console.log("You cannot divide by zero")
  } else {
    const result = (num1 * 1) / (num2 * 1);
    console.log(`${num1} / ${num2} = ${result}`);
  }
}

const modCalc = function (num1, num2) {
  const result = (num1 * 1) % (num2 * 1);
  console.log(`${num1} * ${num2} = ${result}`);
};

const validNum = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    if (isNaN(num1)) {
      console.log(`${num1} is not a number.`)
    }
    if (isNaN(num2)) {
      console.log(`${num2} is not a number.`)
    }
  } else {
    return true
  }
}

const calculateUserInput = function (error, promptInput) {

  const operation = promptInput.operation;
  const num1 = promptInput.num1;
  const num2 = promptInput.num2;
  if (!validNum(num1, num2)) {
    return
  }

  if (operation === 'add' || operation === '+') {
    return addCalc(num1, num2)
  } else if (operation === 'subtract' || operation === '-') {
    return subCalc(num1, num2)
  } else if (operation === 'multiply' || operation === '*') {
    return multCalc(num1, num2)
  } else if (operation === 'divide' || operation === '/') {
    return divCalc(num1, num2)
  } else if (operation === 'modulo' || operation === '%') {
    return modCalc(num1, num2)
  } else {
    console.log('unsupported operator')
  }
}

// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;