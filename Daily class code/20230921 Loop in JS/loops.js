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

// write a program to print number from 1 to 100
for (let num = 1; num <= 100; num++) {
  console.log("number from 1 to 100", num);
}

// write a program to print table of 2
for (let i = 1; i <= 10; i++) {
  console.log("i", i);
  console.log(`tabel of 2X${i} =>`, 2 * i);
}
// 2X1 = 2
// 2X2 = 4
// 2X3 = 6
// 2X4 = 8
// 2X5 = 10
// 2X6 = 12
// 2X7 = 14
// 2X8 = 16
// 2X9 = 18
// 2X10 = 20
// write a program to print table of 3
// for (let i = 1; i <= 10; i++) {
//   console.log("i", i);
//   console.log(`tabel of 3X${i} =>`, 3 * i);
// }

// table from 1 to 10
// logic ----
/*
1X1 = 1     2
1X2 = 2
1X3 = 3
1X4 = 4
1X5 = 5
1X6 = 6
......
....
1X10 = 10
// 2X1 = 2
// 2X2 = 4
// 2X3 = 6
// 2X4 = 8
// 2X5 = 10
// 2X6 = 12
// 2X7 = 14
// 2X8 = 16
// 2X9 = 18
// 2X10 = 20

// 3X1 = 3
// 3X2 = 6
// 3X3 = 9
// 3X4 = 12
// 3X5 = 15
// 3X6 = 18
// 3X7 = 21
// 3X8 = 24
// 3X9 = 27
// 3X10 = 30
....
*/

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`table ${i} X ${j}`, i * j);
  }
}
/* 1st loop of i call --
i  condition   j   condition       result
1   1 <= 10    1    1<=10           1X1 = 1
1   ......     2    2 <= 10         1X2 = 2
1   ......     3    3 <= 10         1X3 = 3
..............................
.........................
1   .........  9     9 <= 10        1X9 = 9
1   .........  10    10 <= 10        1X10 = 10
1  .........   11    11<=10 

2nd loop of i ---
2   2<=10     1     1 <= 10        2X1 = 2
2   ....      2     2 <=10         2X2 = 4
.................
..................................
*/


// 1. write a program to print table from 20 to 30 using nested for loop
// 2. Write a program to find the average of three number , a=50,b=60,c=70
// 3. Write a program to find even number and odd number between 1 to 50
// 4. Write a program to find the largest number between two numbers number1 = 80, number2 = 90
// 5. Write a program to print that student is present in class or absent by using switch case statement
// ex -> Ramesh = Absent, Suresh = Present, Mahesh = Present