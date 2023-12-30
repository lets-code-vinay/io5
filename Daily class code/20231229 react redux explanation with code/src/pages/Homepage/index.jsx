import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ToDoPage from "../../components/ToDoPage";
import { useDispatch } from "react-redux";
import { cokeBoy, pepsiBoy } from "../../redux/products/actions";
import { COKE, PEPSI } from "../../redux/products/type";

const Homepage = () => {
  const dispatch = useDispatch();

  dispatch(pepsiBoy(PEPSI, "🍾🍾🍾🍾🍾")); // window + .
  dispatch(cokeBoy(COKE, "🍸🍹🍺🍸"));

  return (
    <>
      <Header />
      <ToDoPage />
      <Footer />
    </>
  );
};

export default Homepage;
