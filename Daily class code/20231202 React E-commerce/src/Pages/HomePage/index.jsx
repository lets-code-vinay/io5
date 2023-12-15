import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageSliders from "../../components/ImageSliders";

import "./style.css";
import AllProducts from "../../components/AllProducts";
import Offers from "../../components/Offers";
import offer1 from "../../Assets/images/offer-images/offer1.webp";
import offer2 from "../../Assets/images/offer-images/offer2.webp";
import offer3 from "../../Assets/images/offer-images/offer3.webp";
import offer4 from "../../Assets/images/offer-images/offer4.webp";
import offer5 from "../../Assets/images/offer-images/offer5.webp";
import offer6 from "../../Assets/images/offer-images/offer6.webp";

const HomePage = () => {
  const apiAllProducts = `https://dummyjson.com/products`;
  const apiPhone = `https://dummyjson.com/products/search?q=phone`;
  const thirdApi = `https://dummyjson.com/products/search?q=laptop`;
  const fourthApi = `https://dummyjson.com/products/search?q=skin`;

  const offerImages = [offer1, offer2, offer3];
  const offerImages2 = [offer4, offer5, offer6];

  return (
    <>
      <Header currPageName={"Homepage"} isCartEnabled={true} />
      <div className="homepage">
        <ImageSliders />
        <AllProducts api={apiAllProducts} />
        <Offers offerImages={offerImages} />
        <AllProducts api={apiPhone} />
        <Offers offerImages={offerImages2} />
        <AllProducts api={thirdApi} />
        <AllProducts api={fourthApi} />
        <Offers offerImages={offerImages} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
