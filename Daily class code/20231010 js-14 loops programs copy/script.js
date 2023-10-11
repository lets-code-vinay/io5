/**
 * If user enter any amount from keyboard, write a program to
 * find the number of max notes
 *  500, 200, 100, 50, 20,10,5,2,1
 */

// 4567
//  500 *9
//   50 * 1
//   10 * 1
//    5 * 1
//    2 * 1

function noteCountingMachine() {
  let n500;
  let n200;
  let n100;
  let n50;
  let n20;
  let n10;
  let n5;
  let n2;
  let n1;

  let remainingAmt = Number(prompt("Please enter any amount"));

  // get number of 500 notes
  n500 = Math.trunc(remainingAmt / 500);
  // get the remaining amount
  remainingAmt = remainingAmt % 500;
  console.log("n500---", n500, remainingAmt);

  // get number of 200 notes
  n200 = Math.trunc(remainingAmt / 200);

  // get the remaining amount
  remainingAmt = remainingAmt % 200;
  console.log("n200---", n200, remainingAmt);

  // get number of 100 notes
  n100 = Math.trunc(remainingAmt / 100);
  // get the remaining amount
  remainingAmt = remainingAmt % 100;
  console.log("n100---", n100, remainingAmt);

  // get number of 50 notes
  n50 = Math.trunc(remainingAmt / 50);
  // get the remaining amount
  remainingAmt = remainingAmt % 50;
  console.log("n50---", n50, remainingAmt);

  // get number of 20 notes
  n20 = Math.trunc(remainingAmt / 20);
  // get the remaining amount
  remainingAmt = remainingAmt % 20;
  console.log("n20---", n20, remainingAmt);

  // get number of 10 notes
  n10 = Math.trunc(remainingAmt / 10);
  // get the remaining amount
  remainingAmt = remainingAmt % 10;
  console.log("n10---", n10, remainingAmt);

  // get number of 5 notes
  n5 = Math.trunc(remainingAmt / 5);
  // get the remaining amount
  remainingAmt = remainingAmt % 5;
  console.log("n5---", n5, remainingAmt);

  // get number of 2 notes
  n2 = Math.trunc(remainingAmt / 2);
  // get the remaining amount
  remainingAmt = remainingAmt % 2;
  console.log("n2---", n2, remainingAmt);

  // get number of 1 notes
  n1 = Math.trunc(remainingAmt / 1);
  // get the remaining amount
  remainingAmt = remainingAmt % 1;
  console.log("n1---", n1, remainingAmt);

  console.log(`You have 
  500- ${n500}
  200- ${n200}
  100- ${n100}
  50- ${n50}
  20- ${n20}
  10- ${n10}
  5- ${n5}
  2- ${n2}
  1- ${n1}
  `);
}

// noteCountingMachine();

function expo(num, expoVal) {
  // 15^5
  // 15*15*15*15*15
  console.log(".pow-->", Math.pow(num, expoVal));
  let calc = 1;
  for (let i = 1; i <= expoVal; i++) {
    calc = calc * num;
  }

  console.log("loop-", calc);
}

expo(10, 15);
expo(15, 15);
expo(2, 10);

// Write a Program to calculate overtime pay of 10 employees Overtime is
// paid at the rate of Rs.12.00/hour for every hour worked above 40
// hours. Assume that employees do not work for fraction part of an hour

const ot = 12;
for (let i = 1; i <= 10; i++) {
  let overTime = (Math.random() * 100).toFixed(0);
  // console.log("overtime", overTime);
  if (overTime > 40) {
    console.log(
      `Employee number ${i} will get ${
        overTime * ot
      } because he worked ${overTime}hours`
    );
  }
}

// Print all values of ASCII codes
// 1-255

for (let i = 1; i <= 255; i++) {
  console.log(`ASCII code of ${i} is ${String.fromCharCode(i)}`);
}

// armstrong == 123 == 1^3 + 2^3+ 3^3  == 1 + 8 +27 == 36
// 153 == 1^3 + 5^3 + 3^3  = 1+ 125+27 == 153
let num = 456;
for (let i = 0; i < 10000; i++) {
  let d = Math.trunc(i) % 10;
  let c = Math.trunc(i / 10) % 10;
  let b = Math.trunc(i / 100) % 10;
  let a = Math.trunc(i / 1000) % 10;

  let sum = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) + Math.pow(d, 3);

  if (sum === i) {
    console.log(a, b, c, d);
    console.log(sum);
    console.warn(`${sum} is a armstrong with num of ${i}`);
  }
}

// Write a program to print all leap years from 1000 to 5000
