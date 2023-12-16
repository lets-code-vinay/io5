import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dummy from "../../Assets/images/dummy.png";
import "./style.css";
import Loader from "../Loader";
import axios from "axios";

const AllProducts = (props) => {
  const { api } = props || {};

  const navigate = useNavigate();

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

  const handleProduct = (e, product) => {
    console.log("produyct---<>", product);
    navigate("/product", { state: { type: "id", value: product?.id } });
  };

  return (
    <>
      {isLoading && <Loader />}

      <div
        className="main-product-container"
        style={{ justifyContent: productData.length > 6 ? "start" : "center" }}
      >
        <div className="child">
          {productData.map((product, index) => {
            return (
              <div
                className="product-border"
                key={index}
                onClick={(e) => handleProduct(e, product)}
              >
                <img
                  className="pro-image"
                  src={product?.thumbnail ? product?.thumbnail : dummy}
                  alt="pro-image"
                />
                <p className="title">{product?.title}</p>
                <p className="title">
                  <strong>Incl of offers</strong>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
