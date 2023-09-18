console.log("script");
var aVariable = 20;
console.log("aVariable", aVariable);
// to check data type in js we use typeof function
let checkUndefined;

let value;
value = 50;
console.log("value", value);

console.log("check undefined", checkUndefined);
let car = "Maruti";
console.log("data type ->", typeof car);
console.log("car variable value", car);

const nDataType = 50;
console.log("number data type ->", typeof nDataType);

const boolDataType = false;
console.log("boolean data type", typeof boolDataType);

let bigIntDataType = 456456421215458787542514564121546546546546546565465456446546546546544446654646;

console.log("big int ", BigInt(bigIntDataType));

let ab = null;
ab = 20;
// ab = {
//   name: "test",
// };
console.log("a", typeof ab);

var aVariable = 50;
console.log("aVariable", aVariable);
//  -----------------
console.log("aVariable 123", aVariable);

checkUndefined = 555;
console.log("checkUndefined 55", checkUndefined);

// nDataType = 40;
// console.log("nDataType 4", nDataType);

// Function in js ----
/*  TYPE OF FUNCTION ---
1. normal function/ named function
 
with function keyword
 function funName(){

 }   
 funName(); -> function call
 function -> it is the function keyword to make the function in js
 funName => this is the function name
 {} -> function scope


 2. Arrow Function --

 const functionName = () => {

 }
 functionName() -> function call

 3. Anonymous Function 
 let greet = function (){

 }
 greet()

 without function keyword --
 () => {

 }
 ();

 4. Immediately Invoked function --
 (function () {
    console.log('test')
 })
 ();
*/

// Working of function

// name function
function funName() {
  console.log("this is funName function");
}
funName();

const functionName = () => {
  console.log("this is arrow function");
};
functionName();

// anonymous function
let greet = function () {
  console.log("Hello");
};
greet();

// immediately invoked function
(function (val) {
  console.log("immediately invoked function", val);
})("immediate");

// function call with single parameter value---
function Greeting(value) {
    console.log(`Hello,> ${value}`);
    //   console.log("Hello, >", value);
    let val = 5
    return val;
//   console.log('this is print after return') unreachable code after the return 
}
Greeting("Good Morning");
console.log('function console', Greeting())
Greeting("Ashu");
Greeting("Vinay");
Greeting(50);
Greeting(true);

// value is the parameter and Good morning is the value of parameter

// function call with multiple parameter value
const GreetingFun = (name, msg, temp, t, weekName) => {
  console.log("value in arrow function", name, msg, temp, t);
  console.log(`Hello, ${name}, ${msg} ${temp} ${name}`, t, weekName);
};
GreetingFun("Ashu", "Good Morning", "thank you");
GreetingFun("Vinay", "Good evening", "thanks to you", "test", 'Sunday');

