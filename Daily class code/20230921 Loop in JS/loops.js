console.log("loop");

// Loop in Js ----
/*
1. for loop
syntax ->
for(expression;condition;increment/decrement) {

}
expression => assign value
condition => to check condition is true or false
increment/ decrement => increase the value of variable / decrease the value of variable
*/
// example of for loop ---
let num = 1;
for (num; num <= 10; num++) {
  console.log("num", num);
}
// num++ -> num = num + 1
// num-- -> num = num - 1

for (let num = 10; num >= 1; num--) {
  console.log("num", num);
}
// nested for loop --
/*
Syntax -
for(expression; condition; increment/decrement) {
        for(expression; condition; increment/decrement) {
             for(expression; condition; increment/decrement) {
            
             }
        }
}
*/

// ex ->
let number = 1;
for (number; number < 10; number++) {
  for (let number2 = 20; number2 > number; number2--) {
    // 20 > 1
    console.log("numbers", number, number2);
  }
}
/* 1st loop call --
number  number2   condition       result
1        20          20 > 1         1, 20
2nd loop --
1        19          19 > 1         1, 19
3rd loop ---
1        18          18 > 1         1, 18
4rth loop
1        17          17 > 1         1, 17

..............................
.........................
.................
..................................
1         2           2 > 1           1, 2
1         1           1 > 1

number ++ 
2         20          20 > 2          2, 20
2         19           19 > 1         2, 19
*/
