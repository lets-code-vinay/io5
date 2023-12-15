import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "./style.css";

const Cart = (props) => {
  const location = useLocation();
  const localStorageCartData = localStorage.getItem("cartData");
  const [total, setTotal] = useState(0);
  let discount = (Math.random() * 10).toFixed(0);
  let coupon = (Math.random() * 10).toFixed(0);
  let delivery = 10;

  const selectedCartData =
    localStorageCartData &&
    JSON?.parse(localStorageCartData ? localStorageCartData : []);

  useEffect(() => {
    let tot = 0; // 1529

    selectedCartData.forEach((product) => {
      tot = tot + Number(product.price); // 0 + 1249    // 1249 + 280
    });

    setTotal(tot);
  }, []);

  return (
    <>
      <Header isCartEnabled={true} />
      <div className="cart-section">
        <div className="product-section">
          {selectedCartData?.map((cartData, index) => {
            return (
              <div className="product-card" key={index}>
                <img
                  className="product-card__image"
                  src={cartData?.mainImage}
                />
                <div>
                  <div className="bra-des">
                    <p className="product-card__brand">
                      {cartData?.brand} &nbsp;{" "}
                    </p>
                    <p className="product-card__description">
                      {cartData?.description} &nbsp;
                    </p>
                  </div>
                  <p className="product-card__price">
                    {" "}
                    &#8377; {cartData?.price}
                  </p>
                  <div className="btn-container">
                    {/* <Button>Rating: {cartData?.rating}</Button> */}
                    <Button variant="success">Buy Now</Button>
                    <Button variant="danger">Remove</Button>
                  </div>

                  <button className="product-card__btn-wishlist">
                    <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="amount-section">
          <h4>PRICE DETAILS</h4>
          <hr />
          <div className="dis-flex">
            <p>Price ({selectedCartData.length} items) </p> <p>{total}</p>
          </div>
          <div className="dis-flex">
            <p>Discount </p> <p>− ₹{discount} </p>
          </div>
          <div className="dis-flex">
            <p>Coupons for you </p> <p>− ₹{coupon}</p>
          </div>
          <div className="dis-flex">
            <p>Delivery Charges </p>
            <p>
              <span className="strike">₹{(Math.random() * 10).toFixed(0)}</span>
              &nbsp; ₹{delivery}
            </p>
          </div>
          <div className="dis-flex">
            <p>Total Amount </p> <p>₹{total - discount - coupon + delivery}</p>
          </div>
          You will save ₹{discount} on this order
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
