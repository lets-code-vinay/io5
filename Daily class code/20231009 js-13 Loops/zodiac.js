/**
 * LOOPS
 * Anything which start at some point, ends at some point and repeats continuously
 */

// for loop

for (let i = 0; i <= 5; i++) {
  console.log("Hello Vinay", i);
}

/**
 * 1. for(){}
 * 2. variable declaration --> let, var
 * 3. condition  --> note: wrong condition will create infinite loop
 * 4. increment, decrement order  ++i, i++,, --i, i--, i+1, i-1
 */

// Print Table

for (let i = 1; i <= 1000; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}

for (let j = 1; j <= 10; j++) {
  console.log(`Khushbu table ${3}x${j}=${3 * j}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Sapna 5 x ${i} = ${5 * i}`);
}

for (let i = 1; i <= 10; i++) {
  console.log(`poonam 10 x ${i} = ${10 * i}`);
}

// for ( let i=1 , i<=24 , i++);{
//   console.log table$(2 x {i}=${2 * 1});
//    }

// for(let i=1;i<=10;i++){
//   console.log("3+"${*}+i+${=})

// }

function printTable() {
  const tableOf = Number(prompt("Which number table you want to print"));
  const tableLen = Number(prompt("Enter the length of table"));

  for (let i = 1; i <= tableLen; i++) {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`);
  }
}

// printTable();

//exponential  10^5 , 10^89

function getExpoVal() {
  const num = Number(prompt("Which number you want to get expo"));
  const expo = Number(prompt("Enter the expo value"));

  let val = num;
  for (let i = 1; i < expo; i++) {
    val = val * num;
    console.log(`${val} <---`);
  }
}

// getExpoVal();

// Write a Program to calculate overtime pay of 10 employees Overtime is
//           paid at the rate of Rs.12.00/hour for every hour worked above 40
//           hours.

// write a program to print only even number from 51-100

for (let i = 51; i <= 100; i++) {
  console.log("i value --", i);
  if (i % 2 == 0) {
    console.log("even number", i);
  }
}
