
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  times: function(a, b) {
    return a * b;
  },
  devide: function(a, b) {
    return a / b;
  },
  modulo: function(a, b) {
    return a % b;
  },
  powerof: function(a, b) {
    return a ** b;
  }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const devideResult = calculator.devide(timesResult, plusResult);
const powerofResult = calculator.powerof(devideResult, minusResult);

console.log(calculator.plus(2, 3))