const calculateUserInput = require('../calculator').calculateUserInput;

describe('calculateUserInput', () => {
  let standardOutput = null;

  // Before each test replace standard output (console.log)
  // with a "mock" function so we can see that console.log
  // was called with the proper parameters.
  beforeEach(() => {
    standardOutput = console.log;
    console.log = jest.fn(str => str);
  });

  // After each test restore console.log
  afterEach(() => {
    console.log = standardOutput;
  })
  test('3 + 4 = 7', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: '+',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + 4 = 7']);
  });

  test('3 + 4 = 7 with "add"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'add',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + 4 = 7']);
  });

  test('3 + 4 = 7 with "ADd"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'ADd',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + 4 = 7']);
  });
  test('3 + -4 = -1', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '+',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + -4 = -1']);
  });

  test('3 + -4 = -1 with "add"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: 'add',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 + -4 = -1']);
  });

  test('3 - 4 = -1', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: '-',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 - 4 = -1']);
  });

  test('3 - -4 = 7', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '-',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 - -4 = 7']);
  });

  test('3 - -4 = 7 with subtract', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: 'subtract',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 - -4 = 7']);
  });

  test('3 - -4 = 7 with SUBtract', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: 'SUBtract',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 - -4 = 7']);
  });
  test('3 * 4 = 12', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 4 = 12']);
  });

  test('3 * 4 = 12 with "multiply"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'multiply',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 4 = 12']);
  });

  test('3 * 4 = 12 with "MUltiply"', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '4',
      operation: 'MUltiply',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 4 = 12']);
  });
  test('3 * -4 = -12', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * -4 = -12']);
  });

  test('3 * -4 = -12, with "multiply', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '-4',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * -4 = -12']);
  });

  test('3 * 0 = 0', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '0',
      operation: '*',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 * 0 = 0']);
  });

  test('15 / 3 = 5', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '3',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['15 / 3 = 5']);
  });

  test('15 / 3 = 5 with "divide"', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '3',
      operation: 'divide',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['15 / 3 = 5']);
  });

  test('15 / 3 = 5 with "diviDE"', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '3',
      operation: 'diviDE',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['15 / 3 = 5']);
  });
  test('-15 / 3 = 5', () => {

    calculateUserInput({}, {
      num1: '-15',
      num2: '3',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['-15 / 3 = -5']);
  });
  test('3 ** 2 = 9', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '2',
      operation: '**',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 ** 2 = 9']);
  });

  test('3 ** 2 = 9 with to the power of', () => {

    calculateUserInput({}, {
      num1: '3',
      num2: '2',
      operation: 'to the power of',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['3 ** 2 = 9']);
  });

  test('9 % 3 = 0', () => {

    calculateUserInput({}, {
      num1: '9',
      num2: '3',
      operation: '%',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['9 % 3 = 0']);
  });

  test('9 modulo 3 = 0', () => {

    calculateUserInput({}, {
      num1: '9',
      num2: '3',
      operation: 'modulo',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['9 % 3 = 0']);
  });
  test('Can catch divideByZero errors', () => {

    calculateUserInput({}, {
      num1: '15',
      num2: '0',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['You cannot divide by zero']);
  });

  test('Can catch when numbers are invalid types', () => {

    calculateUserInput({}, {
      num1: null,
      num2: '0',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['Number is invalid']);
  });

  test('Can catch when numbers are invalid strings', () => {

    calculateUserInput({}, {
      num1: 'frankfurter',
      num2: '0',
      operation: '/',
    });

    expect(console.log).toHaveBeenCalled();
    expect(console.log.mock.calls).toContainEqual(['Number is invalid']);
  });
});

