// array destructure
// rest operator
const [a, , , nums, , , ...abc] = [
  "duck",
  "ant",
  "bison",
  "camel",
  "elephant",
  "Cat",
  [1, 2, 3, 4, 5],
];
const [arr] = abc; // [[1, 2, 3, 4, 5]]
const [num1, num2, num3, num4, num5] = arr; //[1, 2, 3, 4, 5]
console.log("arr----", num4);

const array = [
  [
    "Sunday",
    "Monday",
    [
      -4,
      -3,
      2,
      3,
      ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"],
    ],
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Poonam",
  ],
  "duck",
  "ant",
  "Cat",
  [
    ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]],
    1,
    "Ritik",
    5,
  ],
];

const [monArr, , , , childArr] = array || [];
const [, mon, vinArr] = monArr || [];
const [, , , , vinaArr2] = vinArr || [];
const [, , , , , vinay] = vinaArr2 || [];

const [childArr1] = childArr || [];
const [, , childArr2] = childArr1 || [];
const [kh, , , , , sapna = "hello"] = childArr2 || [];
console.log("childArr", mon, vinay, kh, sapna);

console.log("sapna-->", array[4][0][2][5] || "hello");
console.log("sunny-->", array[0][2][4][1]);
console.log("shekhar-->", array[0][2][4][4][2]);
console.log("Ritik-->", array[4][2]);
console.log("Poonam-->", array[0][6]);
console.log("khushbu-->", array[4][0][2][4][2], vinay);


