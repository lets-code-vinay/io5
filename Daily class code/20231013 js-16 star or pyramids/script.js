/**
 *  Star / Pyramid
 */

// *
// * *
// * * *
// * * * *

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br />");
}
document.write("<br /> <br />");

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j > i; j--) {
//     document.write("  &nbsp; ");
//   }
//   for (let k = 1; k <= i; k++) {
//     document.write("*");
//   }
//   document.write("<br /> ");
// }

// * * * * *
// * * * *
// * * *
// * *
// *
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j >= i) {
//       document.write("* ");
//     } else {
//       document.write(" ");
//     }
//   }
//   document.write("<br /> ");
// }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
// for (let i = 1; i <= 5; i++) {
//   document.write("*");
// }
// document.write("<br /> ");
// for (let j = 1; j <= 5; j++) {
//   for (let a = 1; a <= j; a++) {
//     document.write("  &nbsp;");
//   }
//   for (let b = j + 1; b <= 5; b++) {
//     document.write("*");
//   }
//   document.write("<br /> ");
// }

// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *

for (let i = 1; i <= 9; i++) {
  document.write(" * ");
}
document.write("<br />");
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    if (j >= i) {
      document.write("* ");
    }
  }
    document.write("  &nbsp;");
    for (let a = 1; a < 5; a++) {
      document.write("*");
    }
  document.write("<br /> ");
}
// for (let j = 1; j <= 5; j++) {
//   for (let a = 1; a <= j; a++) {
//     document.write("  &nbsp;");
//   }
//   for (let b = j + 1; b <= 5; b++) {
//     document.write("*");
//   }
//   document.write("<br /> ");
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= (6 - i || 4 + i); j++) {
//     document.write("* ");
//   }
//   document.write("<br /> ");
// }
