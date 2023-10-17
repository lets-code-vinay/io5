// .  An Insurance company follows following rules to calculate
//     premium.

// (1) If a person’s health is excellent and the person is between
// 25 and 35 years of age and lives in a city and is a male
// then the premium is Rs. 4 per thousand and his policy
// amount cannot exceed Rs. 2 lakhs.
// (2) If a person satisfies all the above conditions except that
// the sex is female then the premium is Rs. 3 per thousand
// and her policy amount cannot exceed Rs. 1 lakh.
// (3) If a person’s health is poor and the person is between 25
// and 35 years of age and lives in a village and is a male
// then the premium is Rs. 6 per thousand and his policy
// cannot exceed Rs. 10,000.
// (4) In all other cases the person is not insured.

// Write a program to output whether the person should be
// insured or not, his/her premium rate and maximum amount
// for which he/she can be insured.

function getInsurance() {
  const age = Number(prompt("Please enter your valid age"));
  const amount = Number(prompt("Please enter your premium amount"));

  if (age < 0 && age > 70 && amount > 10000) {
    return console.warn("Please enter valid input");
  }

  const h = prompt(
    "Enter health condition(Excellent/poor) as e/h"
  ).toLowerCase();
  const area = prompt("Please enter your area(c/v)").toLowerCase();
  const gen = prompt("Please enter your gender(m/f)").toLowerCase();

  if (h.length > 1 || area.length > 1 || gen.length > 1)
    return console.warn("Please enter valid option");

  if (
    h == "e" &&
    area == "c" &&
    gen == "m" &&
    age > 25 &&
    age < 75 &&
    amount <= 200000
  ) {
    const pre = 0.004 * amount;

    console.log(`Premium must be ${pre} over the amount of ${amount}`);
  } else if (
    h == "e" &&
    area == "c" &&
    gen == "f" &&
    age > 25 &&
    age < 75 &&
    amount <= 100000
  ) {
    const pre = 0.003 * amount;

    console.log(`Premium must be ${pre} over the amount of ${amount}`);
  } else if (
    h == "p" &&
    area == "v" &&
    gen == "m" &&
    age > 25 &&
    age < 75 &&
    amount <= 10000
  ) {
    const pre = 0.006 * amount;

    console.log(`Premium must be ${pre} over the amount of ${amount}`);
  } else {
    console.log(`This person can not be insured`);
  }
}

// getInsurance();

// write a program to find the factorial value
// 5
// 5*4*3*2*1 == 120

// 5 * 4 *  3 * 2 * 1== 120

function getFactorial(n) {
  let answer = 1;

  for (var i = n; i >= 1; i--) {
    console.log("i", i);
    answer = answer * i;
  }
  return answer;
}
const n = Number(prompt("enter a number"));
answer = getFactorial(n);
console.log("Factorial of " + n + " : " + answer);
