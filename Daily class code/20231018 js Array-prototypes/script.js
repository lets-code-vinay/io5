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
 *
 * splice,
 * entries,
 */

// forEach & map
// used to iterate or loop
// both are parts of ES6

// ---ForEach---
// It is a callback function
// It does not return anything or array
// it mutates original array

// ---map---
// It is a callback function
// It  returns anything or array
// it does not mutate original array

// ---filter---
// It is a callback function
// It returns anything or array
// it does not mutate original array
// It returns new array on some condition

const arr1 = [25, 50, 75, 100, 15, 82, 15, 69, 10, 12, 154];
const arr2 = [50, 100, 82, 10, 12, 154];

const evens = [];
for (let i = 0; i < arr1.length; i++) {
  console.log(`For--> ${i} index-- ${arr1[i]} element `);
  if (arr1[i] % 2 == 0) {
    evens.push(arr1[i]);
  }
}

console.log("events", evens);

const forEachArrReturn = arr1.forEach(function (element, index) {
  console.log(`ForEach--> ${index} index-- ${arr1[index]} ${element} `);

  const multi = element * 2;

  return multi;
});

console.log("forEachArrReturn", forEachArrReturn);

const mapArrReturn = arr1.map(function (ele, ind) {
  console.log(`map--> ${ind} ind-- ${arr1[ind]} ${ele} `);

  // const multi = ele * 2;

  // return multi;

  if (ele % 2 == 0) return ele;
});

console.log("mapArrReturn", mapArrReturn, arr1);

const filterArrReturn = arr1.filter(function (e, i) {
  return e % 2 == 0;
});

console.log("filterArrReturn", filterArrReturn, arr1);

const filterArrReturn2 = arr1.filter((e, i) => e % 2 == 0);

console.log("filterArrReturn2", filterArrReturn2);

// ---at---
console.log("at---", arr1.at(5), arr1[5]);

console.log("concat---", arr1.concat(arr2));
console.log("spread---", [...arr1, ...arr2]);

const arr3 = [25, 50, 75, 15, 69];
const arr4 = [100, 15, 15];
const arr5 = [68, 80, 15, 69, "my", 10, "self", "my", 12, 153, "my", 78];

console.log("-->", [...arr3, ...arr4, ...arr5]);
console.log("-concat->", arr3.concat(arr4.concat(arr5)));

console.log("5-->", arr5.includes("my"));

console.log("6 get index-->", arr5.indexOf("my"));

console.log("6.1 get index-->", arr5.indexOf("Ritik"));
console.log("6.2 get index-->", arr5.indexOf("my", 5));

console.log("7 get last index-->", arr5.lastIndexOf("my"));

console.log("7.1 get last index-->", arr5.lastIndexOf("Ritik"));

const myPhone = arr5.filter((ele, ind) => ele == "my");
console.log("8---my phone filter", myPhone);

const getFirstEven = arr5.find((ele, ind) => ele % 3 == 0);
console.log("9---find", getFirstEven);

const getFirstEvenIndex = arr5.findIndex((ele, ind) => ele % 7 == 0);
console.log("10---findIndex", getFirstEvenIndex);

const str = "This is a New string for testing";
console.log("11 --> split", str.split(""));

const splitted = str.split(" ");
console.log("12 --> split", splitted);

const reversed = splitted.reverse();
console.log("13 --> reverse", reversed);

const joined = reversed.join(" ");
console.log("14 --> join", joined);

const arr6 = [101, 15, 15, -25];
// every : needs all true
// some : if got one true

const isEvery = arr6.every((ele, ind) => ele % 5 == 0);
console.log("15 --> isEvery", isEvery);

const isEvery2 = arr6.every((ele, ind) => ele % 3 == 0);
console.log("16 --> isEvery2", isEvery2);

const isEvery3 = arr6.every((ele, ind) => ele > 0);
console.log("17 --> isEvery3", isEvery3);

const isSome = arr6.some((ele, ind) => ele > 0);
console.log("18 --> isSome", isSome);

const isSome2 = arr6.some((ele, ind) => ele % 2 == 0);
console.log("19 --> isSome2", isSome2);

const isSome3 = arr6.some((ele, ind) => ele % 3 == 0);
console.log("20 --> isSome3", isSome3);

const isSome4 = arr6.some((ele, ind) => ele % 5 == 0);
console.log("21 --> isSome4", isSome4);

const arr7 = [101, 15, 15, -25];

arr7.push(98);
arr7.push(1298);

console.log("22--push", arr7);

arr7.unshift(198);
arr7.unshift(998);

console.log("23--unshift", arr7);

arr7.pop();
arr7.pop();

console.log("24--pop", arr7);

arr7.shift();
arr7.shift();

console.log("25--shift", arr7);

let container = [
  false,
  "Mumbai",
  "javaScript",
  null,
  undefined,
  48754,

  true,
  "Nakul",
  [
    "abc",
    "xy2",
    3,
    4,
    ["this is string", 78457, false, null, [1, 2, 3, 4], "vinay"],
  ],
  { car: "Kia", model: "Carens" },
];

console.log("26--- flat", container.flat().flat().flat());

const arr8 = [25, 50, 75, 100, 15, 82, 15, 69, 10, 12, 154];
console.log("27--- sort", arr8.sort());

console.log("28---", splitted.sort());

/**
 * population of a town is 100000. The population of town
 * is increasing by 10% every year.
 * find the population of town after 15years
 *
 */

function getPopulation() {
  let currentPop = 100000;
  let year = 15;

  for (let i = 1; i <= year; i++) {
    let increasedPop = (currentPop * 10) / 100;
    currentPop = currentPop + increasedPop;

    console.log(`${i} year increase population is ${Math.trunc(increasedPop)} 
   and current population ${Math.trunc(currentPop)}`);
  }
}
getPopulation();
