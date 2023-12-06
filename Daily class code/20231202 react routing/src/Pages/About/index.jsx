import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function About() {
  const currentPage = "About";

  return (
    <React.Fragment>
      <Header currPageName={currentPage} />

      <h1>About page</h1>
      <Footer />
    </React.Fragment>
  );
}

export default About;
