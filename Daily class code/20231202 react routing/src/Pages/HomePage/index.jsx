import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageSliders from "../../components/ImageSliders";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header currPageName={"Homepage"} />
      <ImageSliders />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
