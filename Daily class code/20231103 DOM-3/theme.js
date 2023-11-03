const [body] = document.getElementsByTagName("body");

const [main] = body.getElementsByClassName("main");

const [targetThemeBtn] = main.getElementsByClassName("target-theme");

let isToggle = false;
targetThemeBtn.addEventListener("click", function () {
  isToggle = !isToggle;

  if (isToggle) {
    main.classList.remove("dark-theme");
    main.classList.add("light-theme");
  } else {
    main.classList.add("dark-theme");
    main.classList.remove("light-theme");
  }
});
