/**
 * Arithmetic operators
 * 1. Addition
 * 2. Subtraction
 * 3. Multiplication
 * 4. Division
 * 5. Modulus
 *
 */
//-------Modulus ----------- % ----

function findRemainder(num1, num2) {
  const rem = num1 % num2;

  console.log(`The remainder of ${num1} and ${num2} is ${rem}`);
}

findRemainder(45, 6);
findRemainder(46, "6");
findRemainder(146, "6D");
findRemainder("146", "Red");
findRemainder(125, 5);
findRemainder(5, 125);
findRemainder(5, true);
findRemainder(5, false);
findRemainder("62", "6");

/**
 * Decision making
 */

const salary = 10000 * 2;
// 10000 == 20000
if (salary == 20000) {
  console.log("Hurray!! i'm going to buy new Car");
} else {
  console.log("Due to shortage of fund, not purchasing car");
}

/**
 * Write a program to find if the number is even or odd
 */

// function
// decision making- condition
// arithmetic

// Even : any number divided by 2 and returns remainder == 0
// Odd : any number divided by 2 and returns remained is not zero

/**
 * @description Finding even/odd number
 * @param {Number|string|boolean} num
 */
function findEvenOdd(num) {
  if (isNaN(num)) {
    return console.log(`${num} is not a valid number`);
  }

  if (num % 2 == 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an Odd number`);
  }
}

// findEvenOdd(10);
// findEvenOdd(101);
// findEvenOdd("106");
// findEvenOdd("107");
// findEvenOdd("107F");
// findEvenOdd("75157FDERED");
// findEvenOdd(1045);
// findEvenOdd(true);
// findEvenOdd("true");

function getEvenOdd() {
  const n = prompt("Please enter any number to check even/odd");

  if (isNaN(n)) {
    return console.log(`${n} is not a valid number, Please enter valid number`);
  }

  if (n % 2 == 0) {
    console.log(`${n} is an even number`);
  } else {
    console.log(`${n} is an Odd number`);
  }
}

// getEvenOdd();

/**
 * Write a program to find if the year is leap year or not
 */

function findLeapYear() {
  const year = prompt("Please enter year");

  if (isNaN(year)) {
    return console.log(
      `${year} is not a valid year, Please enter a valid year`
    );
  }

  if (year % 4 == 0) {
    console.log(`${year} is a valid leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

findLeapYear();
