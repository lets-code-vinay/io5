import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageSliders from "../../components/ImageSliders";

const HomePage = () => {
  const currentPage = "Homepage";

  return (
    <React.Fragment>
      <Header currPageName={currentPage} />
      <ImageSliders />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
