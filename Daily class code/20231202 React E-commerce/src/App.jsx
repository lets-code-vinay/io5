import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/index.jsx";
import About from "./Pages/About/index.jsx";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Trips from "./Pages/Trips";
import Cart from "./Pages/Cart";
import SelectedProduct from "./Pages/SelectedProduct";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<SelectedProduct />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
