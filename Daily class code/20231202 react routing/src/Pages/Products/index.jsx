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

  console.log("allProducts", allProducts);

  return (
    <React.Fragment>
      <Header currPageName={"Product"} />
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
