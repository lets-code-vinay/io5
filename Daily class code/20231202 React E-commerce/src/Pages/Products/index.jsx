import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import "./style.css";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";

function Products() {
  const location = useLocation();

  const [allProducts, setAllProducts] = useState([]);
  const [showLoader, setLoader] = useState(false);
  const [cartData, setCartData] = useState([]);
  const { type = "", value = "" } = location?.state || {};

  useEffect(() => {
    fetchProducts();
  }, [type, value]);

  /**
   * @description Fetching product
   */
  const fetchProducts = async () => {
    try {
      setLoader(true);

      let api = "";
      if (type == "search") {
        api = `https://dummyjson.com/products/search?q=${value}`;
      } else {
        api = `https://dummyjson.com/products`;
      }

      const res = await axios.get(api);
      const { data: { products = [] } = {} } = res || {};
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

  const getDataFromChild = (selectedProduct, previousData) => {
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
                key={index}
              />
            );
          })}

        {!showLoader && allProducts.length == 0 && <NotFound />}
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
