// If a five-digit number is input through the keyboard, write a
// program to calculate the sum of its digits.
// **(Hint: Use the modulus operator ‘%’)**

function sumOfFiveDigit() {
  const num = prompt("Enter any 5 digit number from keyboard");

  // Restrict user to enter more than 5 digits
  if (num.length > 5) {
    return console.error(`Please enter only 5 digit number`);
  }

  // Restrict user to enter only numbers
  if (isNaN(num)) {
    return console.error(
      `${num} is not a valid number. Please enter a valid 5 digit number`
    );
  }

  // 12345
  // 1 + 2 + 3 + 4 +5

  let a;
  let b;
  let c;
  let d;
  let e;

  a = num % 10;
  // 12345 % 10 == 5

  b = num / 10; // 1234.5
  // console.log("hello B", b);
  b = Math.trunc(b); // 1234

  // console.log("hello B-1", b);
  b = b % 10; // 4
  // 12345 / 10 == 1234.5
  // Math.trunc(1234.5) == 1234
  // 1234 %10  == 4
  // console.log("hello B-2", b);

  c = Math.trunc(num / 100) % 10;
  // 123.45 --> 123 --> 3

  d = Math.trunc(num / 1000) % 10;
  // 12345 --> 12345/ 1000 --> 12.345 --> 12 --> 2

  e = Math.trunc(num / 10000); // 1.2345 --> 1 %10 --> 1

  console.log("this is number", num, a, b, c, d, e);
  const sum = a + b + c + d + e;
  console.log(`The sum of ${num} is ${sum} `);
}

// sumOfFiveDigit();

//     | Gender   | Years of Service   | Qualifications   | Salary   |
//     | -------- | ------------------ | ---------------- | -------- |
//     | Male     | >=10               | Post-Graduate    | 15000    |
//     |          | >=10               | Graduate         | 10000    |
//     |          | <10                | Post-Graduate    | 10000    |
//     |          | <10                | Graduate         | 7000     |
//     | -------- | ------------------ | ---------------- | -------- |
//     | female   | >=10               | Post-Graduate    | 12000    |
//     |          | >=10               | Graduate         | 9000     |
//     |          | <10                | Post-Graduate    | 10000    |
//     |          | <10                | Graduate         | 6000     |

function checkFitCandidate() {
  const gen = prompt("Enter Gender as M or F"); // M, F
  const exp = Number(prompt("How much Experience do you have?"));
  const qual = prompt("Enter you qualification in PG or G"); // PG, G

  if (gen == "M" && exp >= 10 && qual == "PG") {
    return console.log(`Congrats, You are selected with 15000 rs`);
  } else if (gen == "M" && exp >= 10 && qual == "G") {
    return console.log(`Congrats, You are selected with 10000 rs`);
  } else if (gen == "M" && exp < 10 && qual == "PG") {
    return console.log(`Congrats, You are selected with 10000 rs -2`);
  } else if (gen == "M" && exp < 10 && qual == "G") {
    return console.log(`Congrats, You are selected with 7000 rs`);
  } else if (gen == "F" && exp >= 10 && qual == "PG") {
    return console.log(`Congrats Girl, You are selected with 12000 rs`);
  } else if (gen == "F" && exp >= 10 && qual == "G") {
    return console.log(`Congrats Girl, You are selected with 9000 rs`);
  } else if (gen == "F" && exp < 10 && qual == "PG") {
    return console.log(`Congrats Girl, You are selected with 10000 rs`);
  } else if (gen == "F" && exp < 10 && qual == "G") {
    return console.log(`Congrats Girl, You are selected with 6000 rs`);
  } else {
    return console.log("Sorry!! you are not fit for this role");
  }
}

checkFitCandidate();
