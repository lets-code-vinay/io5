/**
 * We have two types of datatype
 * 1. Primitive
 *    a. number
 *    b. boolean
 *    c. string
 *    d. undefined
 *    e. null
 * 2. Non-primitive
 *    A. ARRAY
 *    B. Object
 */

/**
 * What is Object?
 * This is a non-primitive datatype
 * It has some specific key and value pairs
 * syntax:
 * variable
 * {
 *  key
 *   :
 *   value
 * ,
 * key : value
 * }
 */

/**
 * Prototypes
 *
 * 1. Object.assign()
 * 2. Object.seal()
 * 3. Object.freeze()
 * 4. Object. isSeal()
 * 5. Object.create()
 * 6. object.isSealed() // true/false
 * 7. object.isFrozen() // true/false
 * 8. Object.entries()
 * 9. Object.keys()
 * 10. Object.values()
 * 11. Object.fromEntries()
 * 12. Object.hasOwn(ObjectName, 'nameOfProperty')
 * 13. objectName.hasownProperty('nameOfProperty')
 *
 */

const student = {
  name: "Arun",
  class: "8th",
  age: "12",
};

console.log(`--->`, student.class);

// how can we create an object

// 1. using empty object
const animals = {};

animals.dog = "Labrador";
animals.dog1 = "German Shepherd";

console.log("1-- animals", animals);

// 2. using create prototype
const fish = Object.create(null);
fish.large = "Whale";
fish.small = "Clown fish";
fish.poisonous = "Stone fish";
console.log("2-- fish", fish);

// 3. using new constructor
const reptile = new Object();
reptile.snake = "Black Mamba";

console.log("3-- reptile", reptile);

// 4. using function and this and new keyword

function admission() {
  this.fees = 1200;
  this.uniform = "White and black";
  this.timing = "7am";
  this.abc = "hello buddies";

  return this;
}
console.log("4---- function admission", new admission());

// 5. using assign prototype
const school = {};

console.log("5 ---> assign ", Object.assign(school, { tenth: 60, fifth: 45 }));

console.log("school", school);

const animalia = Object.assign({ ...animals }, fish, reptile);

console.log("6 ---> animalia ", animalia);

const newAnimals = { ...animals };
newAnimals.cat = "Tom";

// Adding any new object
newAnimals.rat = "Stuart";

console.log("7 ---> newAnimals ", animals, newAnimals);

// Deleting any value from object
delete newAnimals.dog1;

console.log("8 ---> newAnimals ", animals, newAnimals);

// copy/clone
// shallow cloning/copying
// deep cloning/copying

const poke = Object.seal({
  count: 1292,
  next: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "meowth", url: "https://pokeapi.co/api/v2/pokemon/52/" },
    { name: "persian", url: "https://pokeapi.co/api/v2/pokemon/53/" },
    { name: "psyduck", url: "https://pokeapi.co/api/v2/pokemon/54/" },
    { name: "golduck", url: "https://pokeapi.co/api/v2/pokemon/55/" },
    { name: "weepinbell", url: "https://pokeapi.co/api/v2/pokemon/70/" },
    { name: "victreebel", url: "https://pokeapi.co/api/v2/pokemon/71/" },
    { name: "tentacool", url: "https://pokeapi.co/api/v2/pokemon/72/" },
    { name: "tentacruel", url: "https://pokeapi.co/api/v2/pokemon/73/" },
    { name: "geodude", url: "https://pokeapi.co/api/v2/pokemon/74/" },
    { name: "graveler", url: "https://pokeapi.co/api/v2/pokemon/75/" },
  ],
});

console.log(`9----> `, poke.prev || "");
console.log(`10----> `, poke.results || []);
console.log(`11----> `, poke.results[1] || {});
console.log(`12----> `, poke.results[19] || {});
console.log(`13----> `, poke.results[1].name || "");
console.log(`14----> `, poke.results[19]?.name || "");

// updating value inside object

delete poke.count; // delete
poke.previous = "https://pokeapi.co/api/v2/pokemon/1/"; // update

poke.broadcast = "Cartoon network"; // add
console.log(`15----> `, poke || {});

// Object.seal() // Only update, No add
// Object.freeze() // No update, no delete, no add

console.log(`16----> `, Object.isSealed(poke));

const poke2 = Object.freeze({
  count: 1292,
  next: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "meowth", url: "https://pokeapi.co/api/v2/pokemon/52/" },
    { name: "persian", url: "https://pokeapi.co/api/v2/pokemon/53/" },
    { name: "psyduck", url: "https://pokeapi.co/api/v2/pokemon/54/" },
    { name: "golduck", url: "https://pokeapi.co/api/v2/pokemon/55/" },
    { name: "weepinbell", url: "https://pokeapi.co/api/v2/pokemon/70/" },
    { name: "victreebel", url: "https://pokeapi.co/api/v2/pokemon/71/" },
    { name: "tentacool", url: "https://pokeapi.co/api/v2/pokemon/72/" },
    { name: "tentacruel", url: "https://pokeapi.co/api/v2/pokemon/73/" },
    { name: "geodude", url: "https://pokeapi.co/api/v2/pokemon/74/" },
    { name: "graveler", url: "https://pokeapi.co/api/v2/pokemon/75/" },
  ],
});

// updating value inside object

delete poke2.count; // delete
poke2.previous = "https://pokeapi.co/api/v2/pokemon/1/"; // update

poke2.broadcast = "Cartoon network"; // add
console.log(`17----> `, poke2 || {});
console.log(`18----> `, Object.isFrozen(poke2));

// To create array of keys
console.log("19--- newAnimals keys array", Object.keys(newAnimals));
console.log("20--- newAnimals values array", Object.values(newAnimals));

console.log("21--- newAnimals values array", Object.entries(newAnimals));

const newPoke = {
  isFireType: false,
  name: "bulbasaur",
  url: "https://pokeapi.co/api/v2/pokemon/1/",
};

// object.entries()
[
  ["isFireType", false],
  ["name", "bulbasaur"],
  ["url", "https://pokeapi.co/api/v2/pokemon/1/"],
];

// object.keys()
["isFireType", "name", "url"];

// object.values()
[false, " bulbasaur", "https://pokeapi.co/api/v2/pokemon/1/"];

console.log("22--- check if property existed", Object.hasOwn(newPoke, "name"));
console.log(
  "22.1--- check if property existed",
  newPoke.hasOwnProperty("name")
);

console.log(
  "23--- check if property existed",
  Object.hasOwn(newPoke, "pikachu")
);

const poke3 = [
  ["isFireType", false],
  ["bulbasaur", "name", "Pikachu"],
  ["url", "https://pokeapi.co/api/v2/pokemon/1/"],
];

console.log("24--- fromEntries array to Object", Object.fromEntries(poke3));

const a = { name: "Ritik" };
const b = { nickname: "Ritik" };
console.log("-->", a.name == b.nickname);
