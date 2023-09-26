// 1. Datatypes:
// number : 10,2,1,-78,
// string :

const sellingPrice = 100;
const purchasePrice = 80;
const profit = sellingPrice - purchasePrice;

const str = "This is string in single Quotes";
const str1 = "This is string in double Quotes";
const str2 = `This is string in double Quotes`;

/**
 * Printing strings
 */

// Hi All, i bought a new phone which price is 80 rs an i sold it in 100 rs so i got 20 rs profit.
console.log(
  "Hi All, i bought a new phone which price is purchasePrice rs an i sold it in sellingPrice rs so i got profit rs profit."
);

console.log(
  "1. Hi All, i bought a new phone which price is ",
  purchasePrice,
  "rs an i sold it in",
  sellingPrice,
  "rs so i got",
  profit,
  "rs profit."
);

console.log(
  "2. Hi All, i bought a new phone which price is " +
    purchasePrice +
    " rs an i sold it in " +
    sellingPrice +
    " rs so i got " +
    profit +
    " rs profit."
);

// template literals

console.log(
  `3. Hi All, i bought a new phone which price is ${purchasePrice} rs an i sold it in ${sellingPrice} rs so i got ${profit} rs profit.`
);

/**
 * Big integers
 */
const num = 7875415751248184521325642854545412345415454157816578145968718464186;

const num2 =
  BigInt(7875415751248184521325642854545412345415454157816578145968718464186);

const num3 =
  7875415751248184521325642854545412345415454157816578145968718464186n;

console.log("big number", num);
console.log("big number-2 printing wrong value", num2);
console.log("big number-3", num3);

// infinity
// whenever you divide anything with 0 it returns infinity

const one = 1200;
const zero = 0;
const cal = one / zero;
console.log("Calculation of infinity---", cal, typeof cal);

const name = "Ritik";
const age = 12;
const clas = 8;
const clas2 = "8th";

console.log("something", age + clas);
console.log("something2", age + clas2);

console.log("string subtraction", age - clas); // 4
console.log("string subtraction2", age - name); // 4 // nan

// NaN : Not a number
// When we do mathematical calculation with a string it will return NaN

// falsy value

// 0
// ''
// null
// undefined
// false

console.log("falsy value- false -->", false, typeof false);
console.log(
  "falsy value empty string --",
  "",
  typeof "",
  Boolean(""),
  typeof Boolean("")
);
console.log(
  "falsy value null --",
  null,
  typeof null,
  Boolean(null),
  typeof Boolean(null)
);
console.log(
  "falsy value undefined --",
  undefined,
  typeof undefined,
  Boolean(undefined),
  typeof Boolean(undefined)
);
console.log("falsy value 0 --", 0, typeof 0, Boolean(0), typeof Boolean(0));

const abc = "hello string";
console.log(
  "falsy value abc --",
  abc,
  typeof abc,
  Boolean(abc),
  typeof Boolean(abc)
);

// // alert("This is warning");
// const salary = prompt("Enter your salary");
// const isSure = confirm("Are you sure to delete it?");

// console.log("salary--", salary);
// console.log("isSure--", isSure);

/**
 * Data type conversion
 */
const strVal = "funny";
const strVal2 = "-10";
const strVal3 = "";

// string to number
console.log("--strVal to number 1--", strVal, Number(strVal));
console.log("--strVal to number 2--", strVal2, Number(strVal2));

// string to boolean
console.log("--strVal to Boolean 1--", strVal, Boolean(strVal));
console.log("--strVal to Boolean 2--", strVal3, Boolean(strVal3));

const num1 = 0;
const number2 = 7484;
const number3 = -7484;

// number to string
console.log("--num1 to string--", num1, String(num1), num1.toString());
console.log(
  "--number2 to string--",
  number2,
  String(number2),
  number2.toString()
);

// number to boolean
console.log("--num1 to Boolean--", num1, Boolean(num1));
console.log("--number2 to Boolean--", number2, Boolean(number2));
console.log("--number3 to Boolean--", number3, Boolean(number3));

/**
 * function
 */
//

const val1 = 10;
const val2 = 20;

const val3 = 5;
const val4 = 100;

const val5 = 450;
const val6 = 10;

// console.log("add two numbers", val1 + val2);
// console.log("sub two numbers", val1 - val2);
// console.log("multiply two numbers", val1 * val2);
// console.log("division two numbers", val1 / val2);
// console.log("modulus two numbers", val1 % val2);

// console.log("add two numbers", val3 + val4);
// console.log("sub two numbers", val3 - val4);
// console.log("multiply two numbers", val3 * val4);
// console.log("division two numbers", val3 / val4);
// console.log("modulus two numbers", val3 % val4);

// console.log("add two numbers", val5 + val6);
// console.log("sub two numbers", val5 - val6);
// console.log("multiply two numbers", val5 * val6);
// console.log("division two numbers", val5 / val6);
// console.log("modulus two numbers", val5 % val6);

function getCalculation(num1, num2) {
  console.log("num1", num1, "num2--", num2);
  console.log("add two numbers", num1 + num2);
  console.log("sub two numbers", num1 - num2);
  console.log("multiply two numbers", num1 * num2);
  console.log("division two numbers", num1 / num2);
  console.log("modulus two numbers", num1 % num2);
}

getCalculation(val1, val2);
getCalculation(50, 12);
getCalculation(50, val1);
getCalculation(val3, val1);

function doctor(tools) {
  console.log(`Hi i'm a doctor. i've ${tools}`);
}

doctor("injection");
doctor("medicines");
doctor("tablet");
doctor("operation");
doctor("pills");
doctor("nothing");
