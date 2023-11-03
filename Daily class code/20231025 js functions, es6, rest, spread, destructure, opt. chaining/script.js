/**
 * What are the functions?
 * to perform a specific task
 * ----
 * Two types of function
 * 1. Pre-defined function
 *   a. Math.random()
 *   b. Date()
 *   c. Math.pow()
 *   d. document.getElementById()
 * 2. User defined Function
 *    addNumbers(parameter1, parameter2, parameter3)
 */

/**
 * Function as per version
 * ES< 2015 || ES6<
 *   --- function funcName()
 *
 * ES6>  || ES2015>  === Arrow function
 *  const funcName = () => {}
 */

function addNumbers(a, b) {
  console.log(a + b);
}

// for (let i = 0; i <= 100; i++) {
//   addNumbers(i, (Math.random() * 1000).toFixed(0));
// }

// variable declaration
// var  - es5
// let  - es6
// const - es6

/**
 * @ES6
 * 1. let, const
 * 2. Arrow function
 * 3. Template literals (using backticks)
 * 4. defaults
 * 5. rest
 */

/**
 * @ES2020
 * Optional Chaining
 */

const subNumbers = (x, y) => {
  console.log(x - y);
};
subNumbers(10, 5);

subNumbers(101, 511);

const mechanic = (
  tool1 = 0,
  tool2 = [],
  tool3 = {},
  tool4 = false,
  tool5 = "121",
  tool6 = "45"
) => {
  console.log(
    `I'm Coming with ${tool1},
     ${tool2},  ${tool3}, ${tool4}, 
     ${tool5} and ${tool6}
      : Mechanic`,

    tool5,
    tool6,
    tool5,
    tool6,

    `this is my ${tool1}`
  );
};

const carpenter = (tool1, tool2, tool3, tool4, tool5, tool6) => {
  console.log(
    `I'm Coming with ${tool1},
     ${tool2},  ${tool3}, ${tool4}, 
      ${tool5} and ${tool6}
      : carpenter`
  );

  mechanic(50, "Screw-driver", "cutter", "pressure-pump");
};

carpenter("wood", "hammer", "nails", "fevicol", "Cutter", "Plainer");

const animals = ["duck", "ant", "bison", "camel", "elephant"];

/**
 * Optional Chaining
 */

const data = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    userName: {
      firstName: "Decko",
      lastName: "Crist",
    },
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
  children: ["Ayehsa", "Jack", "May"],
};

// console.log("name---", data.company.name.firstName);

// console.log(
//   "---",
//   (data && data.company && data.company.name && data.company.name.firstName) ||
//     "Sapna"
// );

console.log(
  "optional chaining--",
  data?.company?.userName?.firstName || "Sunny"
);

// const ab = false;
// const val = ab ?? 10;
// console.log("nullish coelscene-->", val);

console.log(
  ` Meet ${data?.company?.userName?.firstName || "Sunny"} ${
    data?.company?.userName?.lastName || "Singh"
  } , He is very sensible person

  ${data?.company?.userName?.firstName || "Sunny"} ${
    data?.company?.userName?.lastName || "Singh"
  } joined us in 2005.
  
  ${data?.company?.userName?.firstName || "Sunny"} is married and 35 years old.

  `
);

// const firstName = "Arun";
/**
 * Object Destructing with as and default
 */
const { firstName: nameFirst = "Bobby", lastName: nameLast = "Singh" } = {
  firstName: "Patrick",
};

console.log(
  ` Meet ${nameFirst} ${nameLast} , He is very sensible person

  ${nameFirst} ${nameLast} joined us in 2005.
  
  ${nameFirst} is married and 35 years old.

  `
);

const {
  id = 0,
  name,
  company: { userName: { firstName = "dummy user", lastName = "" } = {} } = {},
} = {
  id: undefined,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    userName: {
      firstName: "Decko",
      lastName: "Crist",
    },
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
  children: ["Ayehsa", "Jack", "May"],
};

console.log("First name", firstName, lastName, id);


