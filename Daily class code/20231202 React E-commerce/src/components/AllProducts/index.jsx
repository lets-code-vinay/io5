import React, { useEffect, useState } from "react";
import dummy from "../../Assets/images/dummy.png";
import "./style.css";
import Loader from "../Loader";
import axios from "axios";

const AllProducts = (props) => {
  const { api } = props || {};

  const [isLoading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  /**
   * @description Fetching data from API related to phone
   */
  useEffect(() => {
    try {
      setLoading(true);

      axios.get(api).then((response) => {
        const { data: { products } = {} } = response || {};
        console.log("response", products);
        setProductData(products);

        if (products.length > 0) {
          setLoading(false);
        }
      });
    } catch (err) {
      console.error("There are some issues in fetching homepage api", err);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <div className="main-product-container">
        <div className="child">
          {productData.map((product, index) => {
            return (
              <div className="product-border" key={index}>
                <img
                  className="pro-image"
                  src={product?.thumbnail ? product?.thumbnail : dummy}
                  alt="pro-image"
                />
                <p>{product?.title}</p>
                <strong>Incl of offers</strong>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
