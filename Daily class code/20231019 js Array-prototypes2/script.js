// Array Prototypes
/**
 * forEach,
 * map,
 * filter,
 * at,
 * concat,
 * includes,
 * indexOf,
 * lastIndexOf
 * find
 * findIndex
 * split,
 * join,
 * reverse,
 * push
 * pop
 * shift
 * unshift
 * every,
 * some,
 * flat
 * sort
 * new Array()
 * fill()
 * Array.isArray()
 * reduce()
 * slice()
 * splice,
 */
const arr1 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7];

const findIn = arr1.findLast((ele, i) => ele % 4 == 0 && ele > 0);
console.log("findIn", findIn);

// How to create array
const arr2 = [];
const arr3 = new Array(2, 10, 78);

console.log("arr3", arr3);

// ---fill---
// console.log("1-=--->", arr1.fill("R", 5, 10));

// --- check array ---
console.log("2---- isArray--", Array.isArray(arr1));
console.log("3---- isArray--", Array.isArray([]));
console.log("4---- isArray--", Array.isArray("[]"));
console.log("5---- isArray--", Array.isArray("vinay"));
console.log("6---- isArray--", Array.isArray(new Array(5)));

const arr4 = [1, 2, 3, 4, 5]; // 1+2+3+4+5
// Reduce --

const isReduced = arr4.reduce((acc, curr) => acc + curr);
console.log("isReduced", isReduced);

// ----slice----
const animals = ["duck", "ant", "bison", "camel", "duck", "elephant", "duck"];

// console.log("animnals", animals.slice(2));
// console.log("animals", animals.slice(2, 4));
// console.log("animals", animals.slice(-3));
console.log("arr1", arr1.slice(-3));

// animals.splice(1, 3, "cat");
// animals.splice(1, 2);
// animals.splice(1);

console.log("animals", animals);

const arr5 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7, 1, 2, 3];

// const withoutDupes = [...new Set(animals)];

// console.log("withoutDupes", withoutDupes);

// const filterDupes = animals.filter((ele, index) => {
//   return animals.indexOf(ele) == index;
// });

// console.log("filterDupes", filterDupes);

const reduceDupes = animals.reduce((prev, curr) => {
  console.log("rev", prev, "curr", curr);
  prev[curr] = (prev[curr] || 0) + 1;

  return prev;
}, {});

console.log("reduceDupes", reduceDupes);

const weeksWithDupes = [
  "Friday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Wednesday",
  "Wednesday",
  "Friday",
  "Friday",
];

console.log("remove dupes with Set", [...new Set(weeksWithDupes)]);

const weeksWithoutDupes = weeksWithDupes.filter(
  (ele, index) => weeksWithDupes.indexOf(ele) == index
);

console.log("remove dupes with filter", weeksWithoutDupes);

const weeksWithoutDupesReduce = weeksWithDupes.reduce((prev, count) => {
  prev[count] = (prev[count] || 0) + 1;

  return prev;
}, {});

console.log("remove dupes with reduce", weeksWithoutDupesReduce);

const arr6 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7, 1, 2, 3];

//reversing without any prototype
const revArr = [];
for (let i = 1; i <= arr6.length; i++) {
  revArr.push(arr6[arr6.length - i]);
}

console.log("revArr", revArr);

//reversing with any prototype of reverse
console.log("rev", arr6.reverse());
