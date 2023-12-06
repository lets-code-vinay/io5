import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

function Contact() {
  const currentPage = "Contact";

  return (
    <React.Fragment>
      <Header currPageName={currentPage} />

      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
