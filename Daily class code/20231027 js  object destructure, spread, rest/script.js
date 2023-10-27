const poke = {
  count: 1292,
  next: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "tentacruel", url: "https://pokeapi.co/api/v2/pokemon/73/" },
    { name: "geodude", url: "https://pokeapi.co/api/v2/pokemon/74/" },
    { name: "graveler", url: "https://pokeapi.co/api/v2/pokemon/75/" },
  ],
};
console.log("--45--", poke["next"]);

const sample = {
  userName: { firstName: "machop", lastName: "poke" },
  url: "https://pokeapi.co/api/v2/pokemon/66/",
};
console.log("-->", sample && sample.name && sample.name.firstName);
console.log("2-->", sample?.name?.firstName);
console.log("2.2-->", sample?.url);

const {
  url,
  userName: { firstName, lastName },
} = {
  userName: { firstName: "machop", lastName: "poke" },
  url: "https://pokeapi.co/api/v2/pokemon/66/",
};
console.log("3-->", url);
console.log("4-->", firstName, lastName);

const { results = [] } = {
  count: 1292,
  next: "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "tentacruel", url: "https://pokeapi.co/api/v2/pokemon/73/" },
    { name: "geodude", url: "https://pokeapi.co/api/v2/pokemon/74/" },
    { name: "graveler", url: "https://pokeapi.co/api/v2/pokemon/75/" },
  ],
};
// const [, , venu] = results || [];
// const { name } = venu || {};
// console.log("venu", name);

const catchPhrase = "hiiiii";

const {
  company: { catchPhrase: catchP = "" } = {},
  address: { geo: { lat = "" } = {} } = {},
} = {
  id: 9,
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  add: {
    street: "Dayna Park",
    suite: "Suite 449",
    city: "Bartholomebury",
    zipcode: "76495-3109",
    geo: {
      lat: "24.6463",
      lng: "-168.8889",
    },
  },
  phone: "(775)976-6794 x41206",
  website: "conrad.com",
  company: {
    name: "Yost and Sons",
    catchPhrase: "Switchable contextually-based project",
    bs: "aggregate real-time technologies",
  },
};

console.log("address", catchP);

// destructure
// default
// as

const {
  add: {
    zipcode,
    geo: { lat: khushbu },
  },
} = {
  id: 9,
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  add: {
    street: "Dayna Park",
    suite: "Suite 449",
    city: "Bartholomebury",
    zipcode: "76495-3109",
    geo: {
      lat: "24.6463",
      lng: "-168.8889",
    },
  },
  phone: "(775)976-6794 x41206",
  website: "conrad.com",
  company: {
    name: "Yost and Sons",
    catchPhrase: "Switchable contextually-based project",
    bs: "aggregate real-time technologies",
  },
};

console.log("company", khushbu);

// --------------------------
const carpenter = (...arg) => {
  console.log("-----", arg);
  const [a, b, c, d, e, f, ...rest] = arg || [];
  console.log(
    `I'm Coming with ${a},
     ${b},  ${c}, ${d},
      ${e} and ${f}
      : carpenter`,
    rest
  );
};

carpenter(
  "wood",
  "hammer",
  "nails",
  "fevicol",
  "Cutter",
  "Plainer",
  "axe",
  "plier"
);

const abc = [
  "wood",
  "hammer",
  "nails",
  "fevicol",
  "Cutter",
  "Plainer",
  "axe",
  "plier",
];

// {0:'wood', 1:'hammer', 2:'nail'}
const arrToObj = { ...abc };
console.log("--->", arrToObj["1"]);

// Shallow clone/copy

const geo = {
  lat: "24.6463",
  lng: "-168.8889",
};

geo.name = "Vinay";

const geo2 = { ...geo };
geo2.lat = 45;
geo2.name = "Sunny";
geo.name = "Poonam";

console.log("geo", geo);
console.log("geo2", geo2);

const add = {
  street: "Dayna Park",
  suite: "Suite 449",
  city: "Bartholomebury",
  zipcode: "76495-3109",
  geo: {
    lat: "24.6463",
    lng: "-168.8889",
  },
};

const hen = { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" };

const concated = { ...geo, ...add, ...hen };
console.log("concated", concated);

const arr1 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7];
const animals = ["duck", "ant", "bison", "camel", "duck", "elephant", "duck"];
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

const arrConcated = [...arr1, ...animals, ...weeksWithDupes];
console.log("arrConcated", arrConcated);
