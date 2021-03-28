const numOne = 33;
const numTwo = 55;

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;

const result = (num1, num2, cb) => {
  const numResult = cb(num1, num2);
  console.log(`Das ergebnis ist ${numResult}`);
};

result(numOne, numTwo, add);
result(numOne, numTwo, multiply);
