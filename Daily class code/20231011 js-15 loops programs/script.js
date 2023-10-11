/**]
 * A certain grade of steel is graded according to the following conditions:
 *
 * (i) Hardness must be greater than 50
 * (ii) Carbon content must be less than 0.7
 * (iii) Tensile strength must be greater than 5600
 *
 *
 * The grades are follows
 * 1. Grade is 10 is all three conditions are met
 * 2. Grade is 9: if (i) and (ii)  are met
 * 3. Grade is 8: if (ii) and (iii)  are met
 * 4. Grade is 7: if (i) and (iii)  are met
 * 5. Grade is 6: if only one is met
 * 6. Grade is 5: if none of the conditions are met
 */

function getGradeOfSteel() {
  const h = Number(prompt("Enter the hardness of Steel"));
  const c = Number(prompt("Enter the carbon of Steel"));
  const ts = Number(prompt("Enter the Tensile strength of Steel"));

  if (h < 50) {
    console.warn("Please enter hardness value greater than 50");
  }
  if (c > 0.7) {
    console.warn("Please enter carbon value less than 0.7");
  }
  if (ts < 5600) {
    console.warn("Please enter Tensile strength value greater than 5600");
  }

  if (h > 50 && c < 0.7 && ts > 5600) {
    console.log("The Grade of steel is 10");
  } else if (h > 50 && c < 0.7) {
    console.log("The Grade of steel is 9");
  } else if (c < 0.7 && ts > 5600) {
    console.log("The Grade of steel is 8");
  } else if (h > 50 && ts > 5600) {
    console.log("The Grade of steel is 7");
  } else if (h > 50 || c < 0.7 || ts > 5600) {
    console.log("The Grade of steel is 6");
  } else {
    console.log("The Grade of steel is 5");
  }
}

// getGradeOfSteel()

document.write("Hello <br />");

// let row = 5;
// let col = 5;
// for (let i = 1; i <= row; i++) {
//   for (let j = 1; j <= col; j++) {
//     document.write("* ");
//   }
//   document.write("<br />");
// }

let r = 10;
let c = 10;

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("* ");
  }

  document.write("<br /> ");
}
