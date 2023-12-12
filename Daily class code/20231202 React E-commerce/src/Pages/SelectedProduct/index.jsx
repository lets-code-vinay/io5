import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import Button from "react-bootstrap/esm/Button";

const SelectedProduct = () => {
  const location = useLocation();
  console.log("location", JSON.parse(location?.state));

  return (
    <>
      <Header isCartEnabled={true} />
      <div className="sel-pro-cont">
        <div className="image-container">
          <div className="image-section">
            <div className="vertical-images">
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/u/g/-original-imagtqqd3k563gpg.jpeg?q=70"
              />
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/o/7/-original-imagsbypgzkjmgeg.jpeg?q=70"
              />
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/q/u/galaxy-flip5-sm-f731bliains-samsung-original-imagru5pn2h79fhk.jpeg?q=70"
              />
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/2/m/galaxy-flip5-sm-f731bliains-samsung-original-imagru5ppffxcaaz.jpeg?q=70"
              />
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/p/4/galaxy-flip5-sm-f731bliains-samsung-original-imagru5pwkz8z9zj.jpeg?q=70"
              />
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/7/f/galaxy-flip5-sm-f731bliains-samsung-original-imagru5pwdzrsgqw.jpeg?q=70"
              />
              <img
                className="small-image"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/a/n/galaxy-flip5-sm-f731bliains-samsung-original-imagru5pscnusd6r.jpeg?q=70"
              />
            </div>
            <div className="highlighted-images">
              <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/j/8/galaxy-flip5-sm-f731bzaeins-samsung-original-imagru5pc2hhgpzg.jpeg?q=70" />
            </div>
          </div>
          <div className="btn-container">
            <Button variant="warning">Add To Cart</Button>
            <Button variant="danger">Buy Now</Button>
          </div>
        </div>

        <div className="pro-details"></div>
      </div>
      <Footer />
    </>
  );
};

export default SelectedProduct;
