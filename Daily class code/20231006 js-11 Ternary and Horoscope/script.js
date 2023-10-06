/**
 * Ternary operator1
 * Nested If Else
 */

if (10 % 5 == 0) {
  console.log("Hello true condition");
} else {
  console.log("Hello false condition");
}

10 % 5 == 1
  ? console.log("Hello 2true condition")
  : console.log("Hello 2false condition");

// Tv price > 15000: discount 10%
const tvPrice = 10500;

// if (tvPrice >= 15000) {
//   const discount = (tvPrice * 10) / 100;

//   console.log(`You got 10% discount of ${discount}Rs
//     on TV with price ${tvPrice},
//     Now you only need to pay ${tvPrice - discount}
//     `);
// } else {
//   const discount = (tvPrice * 5) / 100;

//   console.log(`You got 5% discount of ${discount}Rs
//     on TV with price ${tvPrice},
//     Now you only need to pay ${tvPrice - discount}
//     `);
// }

tvPrice >= 15000
  ? console.log(`You got 10% discount of ${(tvPrice * 10) / 100}Rs 
  on TV with price ${tvPrice},
  Now you only need to pay ${tvPrice - (tvPrice * 10) / 100}
  `)
  : console.log(`You got 5% discount of ${(tvPrice * 5) / 100}Rs 
    on TV with price ${tvPrice},
    Now you only need to pay ${tvPrice - (tvPrice * 5) / 100}
    `);

/**
 *  condition ? true statement : false statement
 */

function getMonthName() {
  const month = prompt("Enter a month in between 1-12");

  if (month === 1) {
    return "January";
  } else if (month === 2) {
    return "February";
  } else if (month == 3) {
    return "March";
  } else if (month == 4) {
    return "April";
  } else if (month == 5) {
    return "May";
  } else if (month == 6) {
    return "June";
  } else if (month == 7) {
    return "July";
  } else if (month == 8) {
    return "August";
  } else if (month == 9) {
    return "September";
  } else if (month == 10) {
    return "October";
  } else if (month == 11) {
    return "November";
  } else if (month == 12) {
    return "December";
  } else {
    return "You have entered a invalid month";
  }
}
// console.log("The selected month is:", getMonthName());

function getMonthBySwitch() {
  const month = Number(prompt("Enter a month in between 1-12"));
  if (month < 1 || month > 12) return "Please enter valid month";

  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "Sep";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Something went wrong";
  }
}

// console.log("switch cases----", getMonthBySwitch());

function getWeekDay() {
  const day = prompt("Please enter a week day like- Sun, mon");
  // sun, mon, tue, wed

  if (day.length > 3)
    return console.log(
      "Please enter a valid day only with 3 characters like Sun, Mon"
    );
  switch (day.toLowerCase()) {
    case "sun":
      console.log("Sunday");
      break;

    case "mon":
      console.log("Monday");
      break;

    case "tue":
      console.log("Tuesday");
      break;

    case "wed":
      console.log("Wednesday");
      break;

    case "thu":
      console.log("Thursday");
      break;

    case "fri":
      console.log("Friday");
      break;

    case "sat":
      console.log("Saturday");
      break;

    default:
      console.log("Something went wrong");
      break;
  }
}

getWeekDay();

// Write a program to return entered avengers
// ironman, hulk, thor, spiderman, drStrange, Hawkeye, Ultron, antman, wasp
// You like Iron Man
