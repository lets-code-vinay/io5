console.log("condition statement");

/*
condition Statement ---
1. if statement

syntax -> 
if(expression) {

}
if -> statement
expression -> here we write a condition to check 
wheather a condition is true or false
@Method ----
When condition is true then execuation is go to the 
if block otherwise it falls outside.


2. switch ... case statement
Syntax -> 
switch(expression) {
  case  :
    ......;
  case  :
    .....;
  case  :
    ....;
  ......
  .....
  ......
  ......
  default :
  ........
}

switch -> statement
expression -> here we write a condition to check 
wheater a condition is true or false.

case -> in the switch statement when we write any condition then it 
        go to the case and check that which case is fullfilled by that condition
@Method
when we write any condition then it first goes to the "case" and check which "case"
is fullfilled that condition, if any condition is not fullfilled then it goes to the 
default case and print that console value;

3. if ... else statement
Syntax  ---->
if(condition) {

} else {

}
if -> statement
condition => to check a condition is true or not ex -> a>b or b!=c, a == b
else -> inside else when condition is false then execuation print that inside data.
@Method/Rule
when we write any condition in the if statement then first it 
check that condition is true or not if condition is true then execuation is goes to 
the inside of if block otherwise if condition is false then execuation is goes to
the else block.

4. switch ....case ... break statement
switch(expression) {
    case :
    ......
    ......
    ......
    break;
    case :
    .....
    .....
    .....
    break;
    case :
    .....
    .....
    .....
    break;
    ....
    ....
    .....
    .....
    default :
    ....
    ...
    ....
}

switch -> statement
case -> when condition is fullfilled then it print it's inside data
break -> its use to break the execuation
@Method / Rule
when we write any expression inside the switch statement then its goes to check that 
which case is true . And if any case is true then its print that inside data 
and after that it break that execuation and will return . when any condition is not 
fullfilled then execuation goes to the default case and return .
*/

/*
Working of Statements

*/
// if statement --
let a, b, c;
a = 40;
b = 20;
c = 30;
if (a > b) {
  // 10 > 20 -> false
  console.log("a is greater", a);
}
if (b < a) {
  console.log("b is lessthan a", b);
}

if (b > c) {
  // 20 > 30 -> false
  console.log("b is greater", b);
}

if (b < c) {
  console.log("b is small", b);
}
if (c > a) {
  // 30 > 10 -> true
  console.log("c is greater", c);
}

// if ... else statement
let x = 20,
  y = 50;
//   z = 60;
if (x > y) {
  // 20 > 50 -=> false
  console.log("x is greater than y, and value of x is:", x);
} else {
  console.log(
    "X is lessthan y and Y is greater than X, and value of y is:",
    y,
    "and value of x is:",
    x
  );
}

// switch statement ---
let studentName = "Vinay";
switch (studentName) {
  case "Ashu":
    console.log("i found a student and his name is:", studentName);
  case "Vinay":
    console.log("I found a student and his name is:", studentName);
  default:
    console.log(
      "i have not found any student that name you have entered, you have eneterd name is:",
      studentName
    );
}

// switch case break statement ---
let templeName = "Golden Temple";
switch (templeName) {
  case "SVDK":
    console.log(
      "i have found that temple name, which you have entered, temple name is",
      templeName
    );
    break;
  case "Golden Temple":
    console.log(
      "i have found temple that you have entered, Temple name is:",
      templeName
    );
    break;
  case "Temple":
    console.log("temple");
    break;
  case "Golden Temple":
    console.log(
      "i have found 2 temple that you have entered, Temple name is:",
      templeName
    );
    break;
  default:
    console.log(
      "Entered temple name is not found, temple name is:",
      templeName
    );
}

// if ... else ...if ... else   condition ----- // el..if condition
// nested if else condition

let phNo = 987564,
  mob = 654532,
  tel = 5541254;
if (phNo > mob) {
  console.log("phone number", phNo);
} else if (tel > mob) {
  console.log("tel number", tel);
} else {
  console.log("mob no", mob);
}

// find a greater number among three numbers
let num1 = 50,
  num2 = 10,
  num3 = 40;
if (num1 > num2) {
  console.log("num1 is big number", num1);
} else if (num2 > num3) {
  console.log("num2 is big number", num2);
} else if (num3 > num1) {
  console.log("num3 is big number", num3);
} else {
  console.log("small number/ big number");
}
