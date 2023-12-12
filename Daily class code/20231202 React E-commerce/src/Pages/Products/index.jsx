import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import "./style.css";
import Loader from "../../components/Loader";

// ------axios ----
function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [showLoader, setLoader] = useState(false);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoader(true);
      const api = `https://dummyjson.com/products`;

      const res = await axios.get(api);
      console.log("res", res);
      const { data: { products = [] } = {} } = res || {};
      console.log("products", products);
      setAllProducts(products);

      if (res?.status == 200) {
        setLoader(false);
      }
    } catch (err) {
      console.error("facing error in fetch Product function", err);
      setLoader(false);
    }
  };

  // const test1 = localStorage.getItem("cartData");
  // const testData = test1 && JSON.parse(test1);

  // console.log("testData", testData);
  const getDataFromChild = (selectedProduct, previousData) => {
    console.log("getDataFromChild", selectedProduct);
    // setCartData([...cartData, selectedProduct]);
    setCartData((cartData) => [...cartData, selectedProduct]);

    if (Boolean(previousData)) {
      localStorage.setItem(
        "cartData",
        JSON.stringify([...previousData, selectedProduct])
      );
    } else {
      localStorage.setItem(
        "cartData",
        JSON.stringify([...cartData, selectedProduct])
      );
    }
  };

  return (
    <React.Fragment>
      <Header
        isCartEnabled={true}
        cartCounting={cartData.length}
        cartData={cartData}
      />
      <div className="product-container">
        {showLoader && <Loader />}

        {!showLoader &&
          allProducts.map((product, index) => {
            return (
              <ProductCard
                price={product?.price}
                description={product?.description}
                mainImage={product?.thumbnail}
                title={product?.title}
                onChildData={getDataFromChild}
                {...product}
              />
            );
          })}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;

// 1. create a callBack function name in child --> onCartClick
// 2. call the function to get value from child ---> {handleCartClick}
// 3. Declare function to get value from child --> const handleCartClick = ()=> {}
// 4. In child component extract callBack from props --> const {onCartClick } = props || {};
// 5. call inside child component wherever wants to  ==> onCartClick()
