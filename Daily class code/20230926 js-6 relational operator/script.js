/**
 * ! -- not
 * =
 * ==
 * ===
 * !=
 * !==
 * <
 * >
 * <=
 * >=
 *
 * &&
 * ||
 *
 */

// false values
// 0
// null
// false
// undefined
// ""

console.log("1---", true);
console.log("2---", false);

console.log("3---", !true); // not true == false
console.log("4---", !false); // not false == true

console.log("5---", !!true);
console.log("6---", !!!false);

console.log("7---", Boolean("Hello"));
console.log("8---", Boolean(""));
console.log("9---", !Boolean("Hello"));
console.log("10---", !Boolean(""));

console.log("11---", Boolean("true"));
console.log("12---", Boolean("false"));
console.log("13---", Boolean(false));

console.log("14---", Boolean(0));
console.log("15---", Boolean(null));
console.log("16---", Boolean(undefined));
console.log("17---", Boolean("undefined"));

console.log("18---", Boolean(10));
console.log("19---", !Boolean(undefined));

// = used to assign any value
const abc = 10;

// == used to compare two values( value and not datatype)
// === used to compare two values( value and datatype)
console.log("20---", 20 == 20);
console.log("21---", 20 === 20);
console.log("22---", 20 == "20");
console.log("23---", 20 === "20");
console.log("24---", "20" === "20");

const sunny = 10;
console.log("25---", "Hello" == "Hello");
console.log("26---", "Hello" === "Hello");
console.log("27---", "Hello" == "hello");
console.log("28---", "Hello" === "hello");
console.log("29---", sunny == "sunny");
console.log("30---", sunny === "sunny");

console.log("31---", true == "true");
console.log("32---", true === "true");

console.log("33---", true == false);
console.log("34---", true === false);

console.log("35---", true == !false);
console.log("36---", true === !false);

console.log("37---", true == 1);
console.log("38---", true === 1);

console.log("39---", false != false);
console.log("40---", false !== false);

console.log("41---", null == null);
console.log("42---", null == undefined);
console.log("43---", null === undefined);

console.log("44---", false !== undefined);
console.log("45---", 10 != "10");
console.log("46---", 20 !== "20");

console.log("47---", 20 > 19);
console.log("48---", 20 < 19);

console.log("49---", 20 > "19");
console.log("50---", "20" < 19);

console.log("51---", true > false);
console.log("52---", !true < false);

console.log("53---", 15 > 10 > 9);

console.log("54---", 20 > 20);
console.log("55---", "20" > 20);

console.log("56---", 20 >= 20);
console.log("57---", "20" >= 20);

console.log("58---", true >= 1);
console.log("59---", 1 <= !false);

// Hrish: 20 ramesh : 21 , who is elder will get married first

const harish = 20;
const ramesh = 20;

if (harish > ramesh) {
  console.log("Harish bhai party de");
} else {
  console.log("Ramesh bhai party de");
}

// ternary
harish < ramesh
  ? console.log("Harish bhai firse party de")
  : console.log("Ramesh bhai firse party de");
