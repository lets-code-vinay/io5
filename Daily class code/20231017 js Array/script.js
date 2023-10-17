/**
 * --Data Type
 * 1. Primitive datatype
 *      a. number
 *      b. string
 *      c. boolean
 *      d. undefined
 *      e. null
 *
 * 2. Non-primitive Datatype
 *      a. Array
 *      b. object
 */

// -=---Array ---=-

// array is like a container stores multiple values
const abc = ["this is string", 78457, false, null, [1, 2, 3, 4], "vinay"];

let container = [
  false,
  "Mumbai",
  "javaScript",
  null,
  undefined,
  48754,
  abc,
  true,
  "Nakul",
  ["abc", "xy2", 3, 4],
  { car: "Kia", model: "Carens" },
];

console.log("-->1 --->", container.length);
console.log("-->2 --->", container[6][4][3]);

for (let i = 0; i < container.length; i++) {
  console.log(`${i} -->`, container[i]);
}

container.push("Ritik");
container.push("Sapna");

console.log("-->2 --->", container);

container.unshift("Hi");
container.unshift("Hi2");

// array of numbers
const nums = [
  4, 23, 7, 39, 19, 0, 9, 14, 89, 7, 1545, 5498, -35, 522, -0415, 78, 56, -34,
];

const evens = [];
const odds = [];
const neg = [];

for (let i = 0; i < nums.length; i++) {
  console.log(`-->${i} --->`, nums[i]);

  if (nums[i] < 0) {
    neg.push(nums[i]);
  } else if (nums[i] % 2 == 0) {
    evens.push(nums[i]);
  } else {
    odds.push(nums[i]);
  }
}

console.log("Evens", evens);
console.log("odds", odds);
console.log("neg", neg);

// Array of string
const str = [
  "If",
  "we",
  "remove",
  "spaces",
  "from",
  "the",
  "answer",
  "s",
  "approach",
];

const shorts = [];

for (let i = 0; i < str.length; i++) {
  if (str[i].length <= 3) {
    shorts.push(str[i]);
  }
}

console.log("shorts", shorts);

const numb = [
  4, 23, 7, 39, 19, 0, 9, 14, 89, 7, 1545, 5498, -35, 522, -0415, 78, 56, -34,
];

// 4*2 = 8,
// 23*2= 46

const arr = [];
for (let i = 0; i < numb.length; i++) {
  let newVal = numb[i] * 2;

  if (newVal % 2 == 0) {
    arr.push(newVal);
  }
}
console.log("arr", arr);

// ES6
// forEach
// Works on original array
// mutate original array
// it doesn't return anything

numb.forEach((element, index) => {
  return element * 3;
});

console.log("numb", numb);

// diff b/w forEach, map, filter

const newValues = numb.map((element, index) => {
  return element * 3;
});

console.log("newValues ", newValues, numb);
