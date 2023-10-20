/**
 * --Object--
 * 1. Primitive
 *    String
 *    number
 *    undefined
 *    boolean
 *    null
 * 2. Non-Primitive
 *    Array
 *    Object
 *
 */

const name = "Sapna";
const names = ["Sapna", "Poonam", "Khushbu", "Chander"];

/**
 * --car--
 * engine
 * break
 * accelerator
 * seatbelt
 * light
 * Horn
 * Steering
 *
 */

const kia = {
  sonet: {
    engine: 3,
    break: "ABS",
    Acc: "XYZ",
    seatbelt: "Nylon",
    light: " Highbeam",
    horn: "Full volume",
    steering: " two spoke",
  },
  seltos: {
    engine: 4,
    break: "EBS",
    Acc: "ABC",
    seatbelt: "Plystrene",
    light: " lowbeam",
    horn: "low  volume",
    steering: " three spoke",
  },
  carens: {
    engine: 4,
    break: "EBS + ABS",
    Acc: "JKl",
    seatbelt: "Nylon",
    light: " lowbeam",
    horn: "low  volume",
    steering: " three spoke",
  },
};

console.log(kia.sonet.light);

const students = {
  ritik: {
    class: "b-tech",
    age: 21,
    cont: "78787878",
    email: "ritik@gmail.com",
  },
  Sunny: {
    class: "bca",
    age: 21,
    cont: "87878787",
    email: "sunny@gmail.com",
  },
  sapna: {
    class: "b-tech",
    age: 19,
    cont: "7878787",
    email: "sapna@gmail.com",
  },
};

console.log("--->", students.Sunny.age, students.Sunny.class);

/**
 * variable
 * =
 * {
 * key
 * :
 * value
 * }
 * ,
 */
const language = {
  fe: "react",
  be: "express",
};

console.log("--->", language.be);

/**
 * 1. How to create object
 */
// using empty {}

const animals = {};
console.log("animals 1--", animals);

animals.cat = "Tom";
animals.dog = "Spike";
animals.rat = {
  rat1: "Jerry",
  rat2: "Julie",
};

console.log("animals 2---", animals);

// 2. using constructor
const car = new Object();

car.wheels = 4;
car.color = "red";
car.brake = "Hyd";
console.log("car ---", car);

// 3. using create()
const pokemons = Object.create(null);
pokemons.pikachu = "electric";
pokemons.charmender = "fire";

console.log("pokemons ---", pokemons);

// 4. using function and this keyword, new keyword

function getStudent() {
  this.name = "Vinay";
  this.qualification = "bTech";
  this.job = "Adobe";
}

console.log("using this", new getStudent());

function getAvenger(thor, hulk, pool) {
  this.thor = thor;
  this.hulk = hulk;
  this.deadpool = pool;
}

console.log(
  "using this avengers",
  new getAvenger("thunder-god", "hulk-smash", "funny")
);

// 5. using assign prototype
const fruits = {};

console.log("----assign--", Object.assign(fruits, { apple: "green-apple" }));

const carPoke = Object.assign({ ...car }, pokemons);

// adding new values in object
carPoke.bulbasour = "grass";
carPoke.treeko = "grass";
console.log("adding new key-value in object", carPoke);

// delete any value from object
delete carPoke.color;
delete carPoke.brake;
delete carPoke.wheels;

console.log("deleting any key-value from object", carPoke);

// json == javascript object notation

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
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
  children: ["Ayehsa", "Jack", "May"],
};
console.log("Sunny---", data.address.lat || "");
console.log("Poonam---", data.address.geo.lat);

console.log("Ritik---", data.website);
console.log("Khushbu---", data.website);

console.log("Shekhar---", data.children[0] || "Vinay");
console.log("Sapna---", data.children[0] || "Ritik");

const poke = {
  count: 1292,
  next: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },

    { name: "diglett", url: "https://pokeapi.co/api/v2/pokemon/50/" },
    { name: "dugtrio", url: "https://pokeapi.co/api/v2/pokemon/51/" },
    { name: "meowth", url: "https://pokeapi.co/api/v2/pokemon/52/" },
    { name: "persian", url: "https://pokeapi.co/api/v2/pokemon/53/" },
    { name: "psyduck", url: "https://pokeapi.co/api/v2/pokemon/54/" },
    { name: "golduck", url: "https://pokeapi.co/api/v2/pokemon/55/" },
    { name: "mankey", url: "https://pokeapi.co/api/v2/pokemon/56/" },
    { name: "primeape", url: "https://pokeapi.co/api/v2/pokemon/57/" },
    { name: "growlithe", url: "https://pokeapi.co/api/v2/pokemon/58/" },
    { name: "arcanine", url: "https://pokeapi.co/api/v2/pokemon/59/" },
    { name: "poliwag", url: "https://pokeapi.co/api/v2/pokemon/60/" },
    { name: "poliwhirl", url: "https://pokeapi.co/api/v2/pokemon/61/" },
    { name: "poliwrath", url: "https://pokeapi.co/api/v2/pokemon/62/" },
    { name: "abra", url: "https://pokeapi.co/api/v2/pokemon/63/" },
    { name: "kadabra", url: "https://pokeapi.co/api/v2/pokemon/64/" },
    { name: "alakazam", url: "https://pokeapi.co/api/v2/pokemon/65/" },
    { name: "machop", url: "https://pokeapi.co/api/v2/pokemon/66/" },
    { name: "machoke", url: "https://pokeapi.co/api/v2/pokemon/67/" },
    { name: "machamp", url: "https://pokeapi.co/api/v2/pokemon/68/" },
    { name: "bellsprout", url: "https://pokeapi.co/api/v2/pokemon/69/" },
    { name: "weepinbell", url: "https://pokeapi.co/api/v2/pokemon/70/" },
    { name: "victreebel", url: "https://pokeapi.co/api/v2/pokemon/71/" },
    { name: "tentacool", url: "https://pokeapi.co/api/v2/pokemon/72/" },
    { name: "tentacruel", url: "https://pokeapi.co/api/v2/pokemon/73/" },
    { name: "geodude", url: "https://pokeapi.co/api/v2/pokemon/74/" },
    { name: "graveler", url: "https://pokeapi.co/api/v2/pokemon/75/" },
  ],
};

console.log("poke soke--", poke.results[5].name);

console.log(
  `The name of pokemon is ${poke.results[5].name} and its url is ${poke.results[5].url}`
);
