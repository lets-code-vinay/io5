/**
 *
 * &&
 * ||
 *
 */

//  ----And----
// false | false | false
// false | true  | false
// true  | false | false
// true  |  true | true

// ----OR----
// false | false | false
// false | true  | true
// true  | false | true
// true  |  true | true

/**
 * Write a program
 * any character is entered through keyboard, write a program to
 * determine whether the character entered is a capital letter, a small letter,
 * a digit or a special character
 * The following table shows the range of ASCII values for various characters
 *
 * ASCII-- American standard code for information interchange
 *
 * character  | ASCII Values
 *  A-Z       | 65-90
 *  a-z       | 97-122
 *  0-9       | 48-57
 *  Spc Char  | 0-47, 58-64, 91-96, 123-127
 */

/**
 * Restrict to enter only number
 *  0-127
 * Capital letter -- 65-90  65 >=  <= 90
 * small letter   -- 97-122 97 >=   <= 122
 * 0-9            -- 48-57
 *  Spc Char      --  0-47, 58-64, 91-96, 123-127
 */

function findASCIICode() {
  let enteredVal = prompt("Please enter a ASCII Code");

  if (isNaN(enteredVal)) {
    return console.log("Please enter a valid ASCII code from 0-127");
  }

  if (enteredVal >= 0 && enteredVal <= 127) {
    if (enteredVal >= 65 && enteredVal <= 90) {
      return console.log(`You have entered ${enteredVal} which is cap letter`);
    } else if (enteredVal >= 97 && enteredVal <= 122) {
      return console.log(
        `You have entered ${enteredVal} which is small letter`
      );
    } else if (enteredVal >= 48 && enteredVal <= 57) {
      return console.log(`You have entered ${enteredVal} which is a digit`);
    } else if (
      (enteredVal >= 0 && enteredVal <= 47) || // condition -1
      (enteredVal >= 58 && enteredVal <= 64) || // condition -2
      (enteredVal >= 91 && enteredVal <= 96) || // condition -3
      (enteredVal >= 123 && enteredVal <= 127) // condition -1
    ) {
      return console.log(
        `You have entered ${enteredVal} which is a special character`
      );
    } else {
      console.log("Please enter a valid number");
    }
  } else {
    console.log(
      `You have entered ${enteredVal}, please enter a number between 0-127`
    );
  }
}
// findASCIICode();

let number = 10;
console.log(`1--- ${number} 's power 4 `);

number = Math.pow(10, 4); // 10^4 10000
console.log(`is ${number}`);

number = 9;
console.log(`2-- Square root of ${number} is ${Math.sqrt(number)}`);

console.log(`3-- 45.256874-- ${(45.257874).toFixed(3)}`);
console.log(`4-- 45.857874-- ${(45.857874).toFixed(0)}`);

console.log(`5-- 45.857874-- ${Math.floor(45.857874)}`);
console.log(`6-- 45.857874-- ${Math.round(45.857874)}`);
console.log(`7-- 45.857874-- ${Math.trunc(45.857874)}`);

console.log(`8--maximum,  45,85,78,74-- ${Math.max(45, 85, 78, 74)}`);
console.log(`9--minimum,  45,85,78,74-- ${Math.min(45, 85, 78, 74)}`);
console.log(`10--pi,  -- ${Math.PI}`);

// 45.27

//If lengths of three sides of a triangle are input
// through the keyboard, write a program to find the area of the triangle.

// const s1 = prompt("Enter side one");
// const s2 = prompt("Enter side two");
// const s3 = prompt("Enter side three");

// //'s' is the semi-perimeter of the triangle given by s = (a + b + c)/2.
// // calculated using the formula A = √s(s-a)(s-b)(s-c),

// const s = (Number(s1) + Number(s2) + Number(s3)) / 2;
// console.log("Semi Perimeter of", Number(s1), Number(s2), Number(s3), "is", s);

// const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
// console.log("area", area.toFixed(2));.

// if a five-digit number is input through the keyboard,
//     program to reverse the number.

