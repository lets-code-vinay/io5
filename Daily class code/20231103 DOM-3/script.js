const main = document.querySelector("#main");

const olTag = document.createElement("ol");
olTag.setAttribute("id", "avengers");
olTag.classList.add("avengers-class");
olTag.setAttribute("type", "A");
main.append(olTag);

const hulk = document.createElement("li");
hulk.classList.add("hulk");
hulk.setAttribute("id", "hulk");
hulk.innerText = "Hulk";

olTag.append(hulk);

const thor = document.createElement("li");
thor.classList.add("thor");
thor.setAttribute("id", "thor");
thor.innerText = "Thor";

olTag.prepend(thor);

const ironMan = document.createElement("li");
ironMan.classList.add("ironMan");
ironMan.setAttribute("id", "ironMan");
ironMan.innerText = "Iron Man";

olTag.append(ironMan);

const spiderMan = document.createElement("li");
spiderMan.classList.add("spiderMan");
spiderMan.setAttribute("id", "spiderMan");
spiderMan.innerText = "Spider Man";

olTag.append(spiderMan);

const vision = document.createElement("li");
vision.classList.add("vision");
vision.setAttribute("id", "vision");
vision.innerText = "Vision";

olTag.append(vision);

const Hawkeye = document.createElement("li");
Hawkeye.classList.add("Hawkeye");
Hawkeye.setAttribute("id", "Hawkeye");
Hawkeye.innerText = "Hawkeye";

olTag.append(Hawkeye);

const avengersStyling = document.querySelector("#avengers");
// const avengersStyling = document.getElementById("avengers");
console.log("avengers", avengersStyling);

// const liStyling = avengersStyling.querySelectorAll("li");
const liStyling = avengersStyling.getElementsByTagName("li");
console.log("liStyling", liStyling);

for (let i = 0; i < liStyling.length; i++) {
  if (i % 2 == 0) {
    liStyling[i].style.backgroundColor = "red";
  } else {
    liStyling[i].style.backgroundColor = "yellow";
  }
}

const liBtn = document.createElement("li");
const btn = document.createElement("button");
btn.innerText = "Click Avenger";
btn.style.color = "yellow";
btn.style.backgroundColor = "black";
btn.style.borderRadius = "5px";
btn.style.border = "1px solid yellow";

liBtn.append(btn);
olTag.append(liBtn);

const [randomOl] = document.getElementsByClassName("random");

/**
 * --Events---
 */
let isClicked = false; // true
btn.addEventListener("click", function () {
  isClicked = !isClicked; // !true
  console.log("clicking 1", isClicked);
  if (isClicked) {
    randomOl.style.backgroundColor = "yellow";
  } else {
    randomOl.style.backgroundColor = "white";
  }
});

console.log("clicking 2--", isClicked);
