let cartCount = 0;
let cartArray = [];

const [navbar] = document.getElementsByClassName("navbar");
const userSection = document.createElement("div");
userSection.classList.add("user-section");

let userDataFromLocal = localStorage.getItem("userData");
userDataFromLocal = JSON.parse(userDataFromLocal);

userSection.innerHTML = `
            <button type="button" 
                class="btn btn-primary position-relative"
                onclick="getCartProducts()"
                >
              <i class="fa-solid fa-cart-shopping"></i>
           
              <span
                class="position-absolute top-0 
                       start-100 translate-middle badge rounded-pill bg-danger"
                id="count"

              >
              ${cartCount}
              </span>
            </button>
    <img
    src=${userDataFromLocal?.image} 
    alt="user-profile"
    class="user-profile"
    />
    <p class="user-name">${userDataFromLocal?.firstName} ${userDataFromLocal?.lastName}  </p>
    `;

navbar.append(userSection);

let productApi = `https://dummyjson.com/products`;

const fetchProducts = async () => {
  const apiResponse = await fetch(productApi);
  console.log("apiResponse", apiResponse);
  const apiData = await apiResponse.json();
  console.log("apiData", apiData);

  const [mainContainer] = document.getElementsByClassName("product-container");

  apiData?.products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("row-cols-1");
    div.classList.add("row-cols-1");
    div.classList.add("row-cols-xs-1");
    div.classList.add("row-cols-sm-1");
    div.classList.add("row-cols-lg-4");
    div.classList.add("g-3");

    div.innerHTML = `
  
    <div class="col hp">
      <div class="card h-100 shadow-sm product-card">
        <a href="#">
          <img
            src=${product?.thumbnail}
            class="card-img-top"
            alt="product.title"
          />
        </a>

        <div class="label-top shadow-sm ">
          <a class="text-white brand-name" href="#">${product?.brand}</a>
        </div>
        <div class="card-body">
        <strong>${product?.title}</strong>
          <div class="clearfix mb-1">
            <span class="float-start badge rounded-pill bg-primary"
              >&#8377; ${product?.price} </span
            >

            <span class="float-end"
              ><a
                href="#"
                class="small text-muted text-uppercase aff-link"
                >reviews</a
              ></span
            >
          </div>
          <p class='category mb-1'>${product?.category}</p>
          <div class="clearfix mb-1">
          <span class="float-start badge bg-primary"
            >Stock: ${product?.stock} </span
          >

          <span class="float-end"
            ><p>Discount: ${product?.discountPercentage}</p></span
          >
        </div>
          <h5 class="card-title">
            <a target="_blank" href="#"
              >${product?.description}</a
            >
          </h5>

          <div class="d-grid gap-2 my-4">
            <a href="#" class="btn btn-warning bold-btn" onclick='addToCart(${JSON.stringify(
              product
            )})'>add to cart</a>
          </div>
          <div class="clearfix mb-1">
            <span class="float-start"
              ><a href="#"><i class="fas fa-question-circle"></i></a
            ></span>

            <span class="float-end">
              <i class="far fa-heart" style="cursor: pointer"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    `;
    mainContainer.append(div);
  });
};
fetchProducts();

/**
 * @description Handling add to cart
 */
const addToCart = (cart) => {
  console.log("add to cart", cart);
  cartCount = cartCount + 1;
  const getCount = document.getElementById("count");
  getCount.innerText = cartCount;

  cartArray.push(cart);
};

console.log("cartArray", cartArray);
const getCartProducts = () => {
  console.log("clicked on cart icon");
};
