/**
 * What is DOM?
 *   Document object model
 *   html is in the object tree or heirarchy.
// const document = {
//   html: {
//     head: {
//       title: "This is title",
//     },
//     body: {
//       h1: "H2 tags",
//       div: {
//         p: "",
//         img: {
//           src: "",
//         },
//       },
//     },
//   },
// };
 *
 */

/**
 * --Selectors--
 *  by tag name
 *        --- document.getElementsByTagName('div)
 *  by className
 *        --- document.getElementsByClassName('pointer')
 *  by id
 *        --- document.getElementById('pointer')
 *  by attribute
 */

// const liTags = document.getElementsByTagName("li");
// console.log("liTags---", liTags[0]);

/**
 * document.getElementsByTagName('div')
 * use to target elements using tag name
 */
const [home, products, about, contact] = document.getElementsByTagName("li");
home.style.backgroundColor = "red";
home.style.color = "white";
home.style.padding = "5%";
home.style.borderRadius = "50px";

console.log("liTags---", home);

const divTags = document.getElementsByTagName("div");
console.log("divTags---", divTags);

/**
 * document.getElementsByClassName('pointer')
 * use to target elements using class name
 */
const [div, home1, products2, about3, contact3, frthDiv] =
  document.getElementsByClassName("pointer");
console.log("pointerClass---", products2);

products2.style.backgroundColor = "blue"; // background-color
products2.style.color = "white";
products2.style.padding = "5%";
products2.style.borderRadius = "50px";

/**
 * document.getElementById('buy-button')
 * use to target elements using id
 */

const buyId = document.getElementById("buy-button");
console.log("buyId", buyId);

const buyLaterId = document.getElementById("buy-later-button");
console.log("buyLaterId", buyLaterId);

buyId.style.backgroundColor = "yellow";
buyId.style.color = "black";
buyId.style.padding = "5%";
buyId.style.borderRadius = "50px";
