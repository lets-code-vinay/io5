const addToCart = document.getElementById("addToCart");
const count = document.getElementById("count");

countVal = 0;
addToCart.addEventListener("click", function () {
  countVal = countVal + 1;
  console.log("add to cart is clicked", countVal);

  if (countVal < 100) {
    count.innerText = countVal;
  } else {
    count.innerText = "99+";
  }
});
