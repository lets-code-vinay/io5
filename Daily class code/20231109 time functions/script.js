// const bomb = setTimeout(() => {
//   const [body] = document.getElementsByTagName("body");
//   const div = document.createElement("div");
//   div.innerHTML = `<h1>I'm a time bomb.... BOOOOOOOOMMMMMMM</h1>`;
//   body.append(div);
// }, 5000);

// const defuse = () => {
//   console.log("defusing");
//   clearTimeout(bomb);
// };

// let count = 0;

// console.log("print 1");

// const guestComing = setInterval(() => {
//   console.log("print 2");

//   count = count + 1;
//   console.log("hello buddies, i'm your guest", count);
// }, 2000);

// console.log("print 3");

// setTimeout(() => {
//   console.log("print 4");

//   if (count >= 4) {
//     console.log("inside", count);
//     clearInterval(guestComing);
//   }
// }, 10000);

// console.log("print 5");

// const stopGuest = () => {
//   clearInterval(guestComing);
// };

//--------------------------------------
let sec = 0;
let min = 0;

let startWatch;

const seconds = document.getElementById("seconds");
const mins = document.getElementById("mins");

const startTimer = () => {
  startWatch = setInterval(() => {
    sec = sec + 1;

    seconds.innerText = sec;

    if (sec == 59) {
      sec = 0;

      min = min + 1;
      mins.innerText = min;
    }
  }, 100);
};

const stopTimer = () => {
  clearInterval(startWatch);
};

const resetTimer = () => {
  sec = 0;
  min = 0;

  seconds.innerText = sec;
  mins.innerText = min;
};

for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log("let i--", i);
  }, 500);
}

var count = 0;

for (var i = 0; i <= 10; i++) {
  count = count + 1;
  setTimeout(() => {
    console.log("var i--", i, "ignore--", count);
  }, 500);
}
