console.log("Destructuring");

const arr = [10, 20, 10, 2, 25, 2, 5, 2, 3, 5, 2];
// first method
const [a, , , , b] = [10, 20, 10, 2, 25, 2, 5, 2, 3, 5, 2];

console.log(a, b);

// second method
console.log(arr[0], arr[4]);
// console.log();

// ...rest operator
const arrayValue = [1, 2, 3, 4, 5, 6, 7, 87, 9, 5, 4, 5, 6, 5, 4];
const [x, y, z, ...remainsValue] = arrayValue;
console.log("starting two value of array is:", x, y, z, remainsValue);

const [val, val1] = [1, 25, 25];
console.log("val", val, val1); // val = 1, val1 = 25, val2 = undefined

// object desturcturing ---

const obj = { aName: "name", bName: "name2" };
const { aName, bName } = obj;
console.log(aName, bName);

// convert array to object by using spred operator

// syntax of spread operator
// (...)
const arrToObj = ["a", "b", "c", "d"];
console.log("arr", arrToObj);
console.log({ ...arrToObj });

// console.log([...obj]); // did not convert in the array

const [first, second, ...value] = [1, 2, 5, 2, 1, 4, 5, 2, 41, 45];
console.log("v", value);

const arrayValue1 = [1, 5, 8, 9];
const funSum = (val, val1, val2, val3) => {
  return val + val1 + val2 + val3;
};
console.log(funSum(...arrayValue1));

const variable = [1, 5, 8, 7, 5, 2, 4, 5, 8];
function fun(val1, val2, remainsValue) {
  console.log("remains value", remainsValue);
  return val1 + val2;
}
console.log(fun(...variable)); // function call with spread operator --
const [g, f, ...restValue] = variable;
console.log(fun(g, f, restValue)); // function call with rest operator

