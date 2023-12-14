import React, { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { json, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

const monthsStr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Header(props) {
  const {
    currPageName,
    isCartEnabled = false,
    cartCounting,
    cartData = [],
  } = props || {};

  const navigate = useNavigate();

  const [sec, setSec] = useState(new Date().getSeconds());
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();

  // setInterval(() => {
  //   setSec(new Date().getSeconds());
  //   setUser(JSON.parse(localStorage.getItem("userData")));
  // }, 1000);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };
  const localStorageCartCounting = localStorage.getItem("cartData");

  const countingData = JSON.parse(localStorageCartCounting);

  return (
    <React.Fragment>
      <Navbar expand="lg" className="nav-bar">
        <Container fluid>
          <Navbar.Brand href="/">Students</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home-page">Home</Nav.Link>
              <Nav.Link href="/about-us">About</Nav.Link>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link href="/trips">Trips</Nav.Link>
              <Nav.Link href="/products">Product</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Headphones
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link className="count">
                <Button onClick={() => addCount()}>+</Button>
                count: {count}
                <Button onClick={removeCount}>-</Button>
              </Nav.Link> */}
            </Nav>
            {isCartEnabled && (
              <Nav.Link>
                <Button variant="dark" onClick={handleCartClick}>
                  <PiShoppingCartBold />
                  {countingData?.length > 0 ? (
                    countingData?.length
                  ) : (
                    <>{cartCounting > 0 && cartCounting}</>
                  )}
                </Button>
              </Nav.Link>
            )}
            {Boolean(user) && (
              <div className="user-details">
                <img
                  src={user?.image}
                  alt={user?.username}
                  style={{ width: "40px" }}
                />
                <Nav.Link>
                  <p className="user-name">
                    {user?.firstName} {user?.lastName}
                  </p>
                </Nav.Link>
              </div>
            )}
            {!user?.email && (
              <Nav.Link href="/login">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            )}
            {user?.email && (
              <Button variant="success" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Navbar.Collapse>
          {currPageName == "Homepage" &&
            `${date}/${monthsStr.at(month)}/${year}: ${hours}:${mins}:${sec}`}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
