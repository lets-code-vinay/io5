console.log("check");

// Operator in JS
/*
Operator Type
1. Arthmetic operator
2. logical Operator
3. Assignment Operator
4. Relational Operator
*/

// Arthmetic Operator
/*
1) +  (add)
2) -  (subtract)
3) /  (devide)
4) * (multiplication)

*/

let a, b, c;
a = 10;
b = 50;
c = a + b;
console.log("sum of a and b", c);

c = b - a;
console.log("subtraction of a and b", c);
a = 2;
b = 10;
c = b / a;
console.log("division of a and b", c);

a = 5;
b = 8;
c = a * b;
console.log("multiplication of a and b is", c);

// logical operator
/*
1) &&  (logical "And Operator")
2) ||  (logical "OR operator" )
3) !   (logical "NOT operator")
*/

// Assignment Operator
/*
1) = (assignment operator) 
*/
let value = 50;

// Relational Operator / Comparsion Operator
/*
1) <   (lessthan )
2) >   (Greater than)
3) <=  (lessthan equaltoo)
4) >=  (greaterthan equaltoo)
5) !=  (not equaltoo)
6) ==   (equal operator)
*/

let var1, var2, var3, var4;
var1 = 50;
var2 = 80;
var3 = "Mumbai";
var4 = true;

console.log("relational operator", typeof var1 != typeof var2); // false
console.log("relational operator", typeof var1 == typeof var2); // true
console.log("relational operator", var1 < var2); // true
console.log("relational operator", typeof var1 == typeof var3); // false
console.log("relational operator", typeof var1 != typeof var3); // true

console.log("relational operator", typeof var1 == typeof var4); // false
console.log("relational operator", typeof true == typeof var4); // true
console.log(typeof true);

console.log("check value", var3 > var4); // false

var1 = 50;
var3 = 50;
console.log("check variable value", var1 <= var3); // true

