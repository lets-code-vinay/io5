/**
 * Arithmetic operators
 * 1. Addition
 * 2. Subtraction
 * 3. Multiplication
 * 4. Division
 * 5. Modulus
 *
 */
// Addition
// +
// ++ increment
// += increment and equal

function addTwoNum(num1, num2) {
  // '10' ==> Number('10') ==> 10
  // 'Delhi' ==> Number('Delhi') ==> NaN
  // true ==> Number(true) ==> true == 1  ==> 1

  let total = Number(num1) + Number(num2); // converting datatype
  // 36

  console.log(`The sum of ${num1} and ${num2} is ${total}`);

  // total++; // 36+1 == 37

  // console.log("incrementing total with ++", total);

  // total += 1; // 37 +1 == 38
  // console.log("incrementing total with +=", total);
}

addTwoNum(10, "26");
addTwoNum(110, 1261);
addTwoNum("1870", "1526");
addTwoNum(145, -1526);
addTwoNum("12", 50); // 1250 // 62
addTwoNum(5, "Vinay"); // NaN
addTwoNum(70, true); // 1
addTwoNum(80, false); // 0

//  num++ // post-increment
// ++num  // pre-increment
function incrementByOne(num) {
  num++; // 50 +1 ==51
  ++num; //  1+51 ==52
  // num++; //  52+1 ==53

  console.log(`Incremented with ++ of ${num}`);
}

incrementByOne(50);
incrementByOne(99); // 100 // 101
incrementByOne(-60); // -60+1 == -59 // -59 +1 == -58

incrementByOne("70D");
incrementByOne("true"); // NaN
incrementByOne(true); // 3
incrementByOne("10");

function incrementByNum(num, val) {
  num += val; //
  // num = num + 10;

  console.log(`The increment by number is ${num}`);
}

incrementByNum(10, 11);
incrementByNum(10, true); // 11
incrementByNum(20, false); // 20
incrementByNum(20, "false"); // NaN // 20false

/**
 * -------Subtraction -------
 */
function subTwoNum(n1, n2) {
  total = n1 - n2;
  console.log(`The subtraction of ${n1} and ${n2} is ${total}`);
}

subTwoNum(50, 10);
subTwoNum(50, 100);
subTwoNum(50, "20");
subTwoNum(50, "20S");
subTwoNum("Ritik", "20S");
subTwoNum(10, "true");
subTwoNum(10, true);
subTwoNum(true, true);
subTwoNum(false, true);
subTwoNum(true, false);
subTwoNum(false, false);
subTwoNum("false", false);

function decrementOrder(num) {
  console.log("Entered number", num);
  // post-decrement num--
  num--;

  // pre-decrement --num
  --num;
  --num;

  console.log(`The decrement ${num}`);
}

decrementOrder(20);
decrementOrder(80);
decrementOrder(true);
decrementOrder(false);
decrementOrder("false");
decrementOrder("Pune");
decrementOrder("80");

function decrementByNum(num, val) {
  num -= val; //
  // num = 20 - 0;

  console.log(`The increment by number is ${num}`);
}

decrementByNum(10, 11);
decrementByNum(10, true); //
decrementByNum(20, false); //
decrementByNum(20, "false"); // NaN // 20false

// let someNum = 50;
// console.log("someNum 1  ===", someNum);

// someNum =someNum- 5;
// console.log("someNum 2  ===", someNum);

// someNum = "Khushbu";
// console.log("someNum 3  ===", someNum);

function multiplication(n1, n2) {
  total = n1 * n2;
  console.log(`The multiplication of ${n1} and ${n2} is ${total}`);
}

multiplication(50, 10);
multiplication("50", 100);
multiplication(50, "20");
multiplication(50, "20S");
multiplication("Ritik", "20S");
multiplication(10, "true");
multiplication(10, true);
multiplication(true, true);
multiplication(false, true);
multiplication(true, false);
multiplication(false, false);
multiplication("false", false);

function division(n1, n2) {
  total = n1 / n2;
  console.log(`The division of ${n1} and ${n2} is ${total}`);
}

division(50, 10);
division("50", 100);
division(50, "20");
division(50, "20S");
division("Ritik", "20S");
division(10, "true");
division(10, true);
division(true, true);
division(false, true);
division(true, false);
division(false, false);
division("false", false);
