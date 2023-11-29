let cartProducts = localStorage.getItem("cartItems");
cartProducts = JSON.parse(cartProducts);

console.log("cart js", cartProducts);
let isRemoveBtnClicked = false;

let singleProduct;

const [getCartContainer] = document.getElementsByClassName("menu-items");

const [itemCount] = document.getElementsByClassName("item-count");
itemCount.innerText = cartProducts.length;

const [total] = document.getElementsByClassName("total");
let totalPrice = 0;

cartProducts.forEach((product) => {
  totalPrice = totalPrice + product?.price;

  const liTag = document.createElement("li");
  liTag.classList = "menu-item";

  liTag.innerHTML = `<li class="menu-item">
                <img
                  src=${product?.thumbnail}
                  alt=${product?.title}
                  class="menu-image"
                />
                <div class="menu-item-dets">
                  <p class="menu-item-heading">${product?.title}</p>
                  <p class="g-price">$${product?.price}</p>
                </div>
                <button
                  class="add-button"
                  data-title=${product?.title}
                  data-price="2.23"
                  onclick='removeFromCart(${JSON.stringify(product)})'
                >
                  Remove from cart
                </button>
              </li> `;

  getCartContainer.appendChild(liTag);

  total.innerText = `$${totalPrice}`;
});
