/**
 * API
 *  -- use to communicate between FE and BE/DB
 *  -- API is just like string used to carry some data
 *  -- API works on http method
 *          http: -- hyper text transfer protocol
 *    Method_
 *          1. GET
 *          2. POSt
 *          3. DELETE
 *          4. PUT (update)
 *          5. PATCH (update)
 *
 *  1. GET
 *         Used only to get data
 *          No body or payload
 * 2. POST
 *      Used to get data as per sent requirement
 *       for example:
 *        login --> userId, password --> send in API--
 *              <-- response -- userData (userName, profile photo, number )
 * 3. DELETE
 *      Used to delete any data from database
 * 4. PUT/PATCH
 *      used to update any existed data inside the database
 *
 * .
 *
 *
 * STATUS CODE----
 *      200 success
 *      202 success
 *      400 internal error
 *      404 Not found
 *      500 server error
 */

/**
 * API must be used with promises

 JS is an asynchronous and single threaded language
 * Promises
 *      -- fullfil
 *      -- reject/fail
 *      -- pending
 *
 * Types/ use method
 *       1. by using --- new Promise(resolve, reject) ---
 *       2. by using --- .then(res)
 *       3. by using --- async/await
 */

/**
 * How to use api
 *   1. fetch -- JS inbuilt
 *   2. axios -- react/angular
 */

// it will not return any response from api
// const api = `https://jsonplaceholder.typicode.com/posts`;
// console.log(api);

// const fetchData = () => {
//   // const api = `https://jsonplaceholder.typicode.com/posts`;

//   const response = fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((res) => res.json())
//     .then((data) => console.log("data--", data));
//   console.log(response);
// };

// fetchData();

const fetchPosts = async () => {
  //   const api = `https://jsonplaceholder.typicode.com/posts`;
  //   const api = `https://jsonplaceholder.org/users`;
  const api = `https://api.escuelajs.co/api/v1/products`;
  const data = await fetch(api);
  const res = await data.json();
  console.log(res);

  //   localStorage.setItem("apiRes", JSON.stringify(res));

  //   const olTag = document.createElement("ol");
  //   res.forEach((products) => {
  //     const [main] = document.getElementsByClassName("main");
  //     const liTag = document.createElement("li");

  //     console.log(products?.title);
  //     liTag.innerText = products?.title;
  //     olTag.append(liTag);
  //     main.append(olTag);
  //   });

  //   for (let i = 0; i < res.length; i++) {
  //     const [main] = document.getElementsByClassName("main");
  //     const olTag = document.createElement("ul");
  //     const liTag = document.createElement("li");

  //     console.log(res[i]?.title);
  //     liTag.innerText = res[i]?.title;
  //     olTag.append(liTag);
  //     main.append(olTag);
  //   }
};

fetchPosts();

const fetchProduct = async () => {
  const api = `https://api.escuelajs.co/api/v1/products`;

  const response = await fetch(api);
  const products = await response.json();
  console.log("pro", products);

  const [cardContainer] = document.getElementsByClassName("card-container");

  products.forEach((product, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "col-lg-3 col-md-6 mb-4 mb-lg-0");

    cardDiv.innerHTML = `
    <div class="card rounded shadow-sm border-0">
    <div class="card-body p-4">
      <img
        src=${product?.images[0]} 
        alt=${product?.title}
        referrerpolicy="no-referrer"
        class="img-fluid d-block mx-auto mb-3"
      />
      <h5><a href="#" class="text-dark">${product?.title}</a></h5>
      <p class="small text-muted font-italic">
        ${product.description}.
      </p>
      <ul class="list-inline small">
        <li class="list-inline-item m-0">
          <i class="fa fa-star text-success"></i>
        </li>
        <li class="list-inline-item m-0">
          <i class="fa fa-star text-success"></i>
        </li>
        <li class="list-inline-item m-0">
          <i class="fa fa-star text-success"></i>
        </li>
        <li class="list-inline-item m-0">
          <i class="fa fa-star text-success"></i>
        </li>
        <li class="list-inline-item m-0">
          <i class="fa fa-star-o text-success"></i>
        </li>
      </ul>
    </div>
  </div>
                        `;

    cardContainer.append(cardDiv);
  });
};

// fetchProduct();
