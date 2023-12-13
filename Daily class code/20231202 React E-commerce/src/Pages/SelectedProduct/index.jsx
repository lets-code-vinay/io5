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

const SelectedProduct = () => {
  const location = useLocation();
  const data = JSON.parse(location?.state);
  const { id } = data || {};

  const [SingleProductData, setProductData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [mainProImage, setMainProImage] = useState(dummy);

  useEffect(() => {
    getProData();
  }, []); // mount

  const getProData = async () => {
    try {
      setLoading(true);
      const api = `https://dummyjson.com/products/${id}`;
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

  const { images = [] } = SingleProductData || {};
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
          {/* <img className="thumbnail" src={mainProImage} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SelectedProduct;
