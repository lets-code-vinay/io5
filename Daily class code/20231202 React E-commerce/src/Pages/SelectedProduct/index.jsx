import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Loader from "../../components/Loader";
import dummy from "../../Assets/images/dummy.png";
import ReactImageMagnify from "react-image-magnify";
import { FaStar, FaTag } from "react-icons/fa";
import { HiMiniTicket } from "react-icons/hi2";

const SelectedProduct = () => {
  const location = useLocation();
  // const data = JSON.parse(location?.state);
  console.log("data selected", location?.state);
  const { type, value } = location?.state || {};

  const [SingleProductData, setProductData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [mainProImage, setMainProImage] = useState(dummy);

  useEffect(() => {
    getProData();
  }, [value, type]); // mount

  const getProData = async () => {
    try {
      setLoading(true);
      let api = "";

      if (type == "id") {
        api = `https://dummyjson.com/products/${value}`;
      }

      const response = await axios.get(api);
      const { data, status } = response || {};

      if (status == 200) {
        setProductData(data);
        setMainProImage(data?.thumbnail);
      }
      setLoading(false);
    } catch (err) {
      console.error("There is an error in single Product API", err);
      setLoading(false);
    }
  };

  /**
   * @description Changing thumbnail(main image) on hover
   * @param {Object} event
   * @param {String} image
   */
  const handleImageOnHover = (event, image) => {
    setMainProImage(image);
  };

  const {
    images = [],
    brand = "",
    title = "",
    price = 0,
    rating = 0,
  } = SingleProductData || {};
  return (
    <>
      {console.log("html", SingleProductData)}
      <Header isCartEnabled={true} />
      {isLoading && <Loader />}

      <div className="sel-pro-cont">
        <div className="image-container">
          <div className="image-section">
            <div className="vertical-images">
              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className="small-image"
                    src={image}
                    onMouseOver={(e) => handleImageOnHover(e, image)}
                  />
                );
              })}
            </div>
            <div className="highlighted-images">
              <ReactImageMagnify
                className="thumbnail"
                {...{
                  smallImage: {
                    alt: "abcd",
                    isFluidWidth: true,
                    src: mainProImage,
                  },
                  largeImage: {
                    width: 1000,
                    height: 680,
                    src: mainProImage,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: "1500",
                  },
                  enlargedImageContainerDimensions: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              />
            </div>
          </div>
          <div className="btn-container">
            <Button variant="warning">Add To Cart</Button>
            <Button variant="danger">Buy Now</Button>
          </div>
        </div>

        <div className="pro-details">
          <h4>{brand}</h4>
          <h5>{title}</h5>
          <p>Special price</p>
          <p>
            ₹{price} &nbsp;
            <del>
              ₹{Number(price) + Number((Math.random() * 10).toFixed(0))} &nbsp;
            </del>
            {(Math.random() * 10).toFixed(0)}% off
          </p>
          <div className="rating-section">
            <Button>
              {rating}
              <FaStar />
            </Button>
            {(Math.random() * 1000).toFixed(0)} ratings and{" "}
            {(Math.random() * 100).toFixed(0)} reviews
          </div>

          <h5>Coupons for you</h5>
          <p>
            <HiMiniTicket />
            Special PriceGet extra ₹{(Math.random() * 10).toFixed(0)} off on
            {(Math.random() * 100).toFixed(0)} item(s) (price inclusive of
            cashback/coupon)T&C
          </p>

          <h5>Available offers</h5>
          <p>
            <FaTag />
            Bank Offer {(Math.random() * 10).toFixed(0)}% Instant Discount on
            PNB Credit Cards, up to ₹{(Math.random() * 1000).toFixed(0)}, on
            orders of ₹{(Math.random() * 10000).toFixed(0)} and aboveT&C
          </p>
          <p>
            <FaTag />
            Bank Offer {(Math.random() * 10).toFixed(0)}% Instant Discount on
            PNB Credit Cards, up to ₹{(Math.random() * 1000).toFixed(0)}, on
            orders of ₹{(Math.random() * 10000).toFixed(0)} and aboveT&C
          </p>
          <p>
            <FaTag />
            Bank Offer {(Math.random() * 10).toFixed(0)}% Instant Discount on
            PNB Credit Cards, up to ₹{(Math.random() * 1000).toFixed(0)}, on
            orders of ₹{(Math.random() * 10000).toFixed(0)} and aboveT&C
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SelectedProduct;
