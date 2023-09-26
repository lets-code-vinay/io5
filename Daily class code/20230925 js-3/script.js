// 1. -------comments------------
// --single line comment--
// double slash is used to write any single line comment

// --multi line comment---
/*
    This is multi line comment
    this is line number 2
    line number 3
*/

/* 2. Reserved keywords
  this var const let do for forEach if return break switch
    Reserved keywords can not be used as in variables
  */

/**  3. variable declaration
 * let x = 10;
 * const a = 12;
 * var b = 15;
 *
 *
 * let variable can be reuseable
 *
 */

let abc = 10;
abc = 45;
abc = "Vinay";
console.log("let is used to update the variable values", abc);

const xyz = 451;
// xyz = 555;
console.log("const does not update the variable values", xyz);

var a = 1451;
a = 555;
a = "Mumbai";
var a = "hello";
console.log("var is a global level variable", a);

function abcd() {
  var _city10 = "Bangalore";
  let $state = "Karnatka";
  const returnOn = "By flight";

  console.log("inside function", $state, _city10, returnOn);
}

abcd();

/**
 * -- Rules to define variable ---
 * 1. Variable can not start with number --
 *          10city is wrong,
 *          city10 is right
 * 2. Variable can not start with symbols expects _ $
 *          wrong : %state, #name
 *          right : $price, _company
 * 3. you can not use any reserved keywords for variables
 */

function printCity() {
  console.log(" this is city printing inside the function---");
}

printCity();

function callPlumber() {
  console.log("Fix this pipe");
}

callPlumber();

function callCarpenter() {
  console.log("Make this table");
}

callCarpenter();

function addTwoNum(a, b) {
  let c = Number(a) + Number(b);
  console.log("Sum of two number", a, "and", b, "is", c);
}

addTwoNum(10, 15);
addTwoNum(12, 78);
addTwoNum(32, 10);
addTwoNum(312, 110);
addTwoNum(3102, 120);
addTwoNum(3200, 1000);

// const firstNum = prompt("Enter First number");
// const secondNum = prompt("Enter Second number");

// console.log("keyboardInput--", firstNum, secondNum);
// addTwoNum(firstNum, secondNum);

/**
 * --- data types
 * 1. Primitive datatype
 *          a. number : 45,852,0,45474,-98
 *          b. string : 'Vinay', "Victory", `Punjab`
 *          c. boolean : true, false
 *          d. null
 *          e. undefined:
 *
 * 2. Non-Primitive datatype
 *          a. Array : [1,2,'vinay', true, null]
 *          b. object: {name: 'vinay', class:'6th'}
 *
 */

const numData = 45;
const strData = "45-vinay";
const boolData = false;
const nullData = null;
let undefinedData;

console.log("numdata", numData, typeof numData);
console.log("strdata", strData, typeof strData);
console.log("booldata", boolData, typeof boolData);
console.log("nulldata", nullData, typeof nullData);
console.log("undefineddata", undefinedData, typeof undefinedData);

/**
 * Operators
 * 1. Arithmetic operator
 *          addition
 *          subtraction
 *          division
 *          multiplication
 *          modulus
 * 2. logical operator
 *          AND
 *          OR
 * 3. Conditional Operator
 *          >
 *          <
 *          <=
 *          >=
 *          !
 *          !=
 *          ==
 *          ===
 *          !==
 */
