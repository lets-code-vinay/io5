console.log("hello VScode external from infoxygens");

// --> single line comment

// data type --
/* 
Multiline comment ---

DATA TYPE ---
In Javascript there is 8 type of data type ---
1. Number  
    ex-> 1,2,50,22,45
2. String
   ex -> 'Shimla', 'Delhi', 'LUdhiana',''
3. Boolean
   ex -> True / False
4. BigInt 
   ex-> (4546465441231)
5. Null
   ex -> let a;
6. Undefined
7. Symbol
8. Object

to check data type in JS we use typeof() function ---
*/

let avatar = "";
console.log("avatar", avatar);
// Variable declaration --
/*  variable store the data in memory --

variable declare keyword
1. var (global scope, and redeclare also with same name variable)
2. let  (function scope/ local scope, redeclare but by using another variable name)
3. const (local scope, not redeclare)
*/

// KEYWORD IN JAVASCRIPT
/*
1. let (to declare local scope variable)
2. var (to declare global scope variable)
3. const (to declare local scope variable)
4. function (to define a function)
5. if   (to check condition)
6. for  (this is used in loop)
7. return (to return function)
8. try (error handling)

*/

// hoisting in js ----
console.log(" a is access before initialization", a);
var a = 20; // var is the keyword , a is variable name and 20 is value
var a = 40;
a = 50;
console.log("var variable declare", a);
// var x = 444;
// console.log("x valyue", x);
let x = 10;
// let x = 20
console.log("variable declare by using let keyword 1", x);

function fun() {
  let v = 50;
  console.log("v", v);
}
// console.log("v outside of function", v);

fun();
x = 410;
console.log("variable declare by using let keyword", x);
const b = 5065;
// b = 400;
console.log("variable declare by using const", b);
// x is the variable name and 10 is the value of x
// let x2 = "asd";
// let y = 20.222;

// let z = x * y;
// console.log("The multiplication value of C is", z);
console.log("x", x);
