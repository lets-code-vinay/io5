/**
 * Number Prototype
 * 1. isNaN() // use to check if the number is Number of not
 * 2. Number.isInteger() // use to check if the number is Number of not
 *
 */

console.log(`1----`, isNaN(10)); // F
console.log(`2----`, isNaN("D10")); // T

console.log(`3----`, Number.isInteger(10)); // T
console.log(`4----`, Number.isInteger("D10")); // F

/**
 * Math library
 * 1. Math.sqrt(9)  // 3
 * 2. Math.pow(10, 3) // 10^3
 * 3. Math.trunc(10.256) // 10 // remove decimal values
 * 4. Math.abs()
 * 5. Math.round()
 * 6. Math.floor()
 * 7. Math.ceil()
 * 8. Math.random()
 *
 * num.toFixed(2)
 */

console.log(`5----`, Math.sqrt(121));
console.log(`6----`, Math.pow(11, 3)); // 11^3  11* 11* 11

console.log(`7----`, Math.abs(-10.245));
console.log(`8----`, Math.abs(-110.245));

console.log(`9----`, Math.trunc(10.678));
console.log(`10----`, Math.round(10.678)); // 0.5 >   +1 -- 11
console.log(`11----`, Math.floor(10.999)); // 10.78 // 10
console.log(`12----`, Math.ceil(10.001)); //

console.log(`13----`, Math.trunc(Math.random() * 100000)); //
console.log(`14----`, (Math.random() * 100000).toFixed(2)); //

/**
 * String
 * Anything written inside
 * double quotes ("" ),
 * single quotes(' '),
 *  backtick(template literals)
 * /string/i, /string/g
 */

/**
 * 1. str.length
 * 2. str.toUpperCase()
 * 3. str.toLowerCase()
 * 4. str.reverse()
 * 5. str.split()
 * 6. str.replace()
 * 7. str.replaceAll()
 */

console.log("This is string");
console.log(`This is string with template literals`);
console.log(/This is string with template literals/i);
console.log(/This is string with template literals/g);

let str = "Hello !! This is a new String.";
console.log(`15----`, str.length);

str = "      ";
console.log(`16----`, str.length);

str = "Hello !! This is a new String.";
console.log(`17----`, str.toUpperCase());

str = "Hello!! We are learning JavaScript.";
console.log(`18----`, str.toLowerCase());

str = "Vinay Maurya";
console.log(`19----`, str.split(""));

/**
 * To reverse any string
 * 1. str.split('')
 * 2. str.reverse()
 * 3. str.join('')
 */

str = str.split("");
console.log(`20----`, str); // ['I', ' ', 'L',..]
str = str.reverse();
console.log(`21----`, str); // ['t', 'p', 'i',..]
str = str.join("");
console.log(`22----`, str); // tpicrSavaJ evol I

str = "Vinay Maurya is a good guy . ";
console.log(`23----`, str.split(" "));

str = "Vinay Maurya is-a good guy . ";
console.log(`24----`, str.split("-"));

str = "Javascript is funny programming language";
console.log(`25----`, str.replace("funny", "awesome"));

str = "Javascript is funny programming language";
console.log(`25----`, str.replace("u", "X"));

str = "Javascript is funny programming language";
console.log(`26----`, str.replaceAll("a", "X"));

console.log(
  `hello ji`,

  String.fromCharCode(97, 73, 78, 65, 89),
  str.at(5),
  str.charAt(5),
  str[5]
);
