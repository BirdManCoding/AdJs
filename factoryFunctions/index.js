//pure Function
let num1 = 10;
let num2 = 22;
function add(n1, n2) {
  return n1 + n2;
}
const result = add(num1, num2);

//impure function
function addImpure() {
  console.log(num1 + num2);
}
//addImpure();

//factory function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const gerTax = createTaxCalculator(0.19);
const usTax = createTaxCalculator(0.11);
const jpnTax = createTaxCalculator(0.18);

const gerBillOne = gerTax(250);
const gerBillTwo = gerTax(2500);
const usBillOne = usTax(1500);
const usBillTwo = usTax(400);
const jpnBillOne = jpnTax(250);

console.log(gerBillOne, gerBillTwo, usBillOne, usBillTwo, jpnBillOne);
