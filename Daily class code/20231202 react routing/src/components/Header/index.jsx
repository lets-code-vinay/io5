import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import { ArrowRight } from "react-bootstrap-icons";

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
  const { currPageName = "Nothing" } = props || {};

  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(new Date().getSeconds());
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  console.log("userData--", user);

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();

  const removeCount = () => {
    if (count == 0) return;
    setCount(count - 1);
  };

  const addCount = () => {
    setCount(count + 1);
    document.title = `${count + 1}`;
  };

  setInterval(() => {
    setSec(new Date().getSeconds());
    setUser(JSON.parse(localStorage.getItem("userData")));
  }, 1000);

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
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
              <Nav.Link className="count">
                <Button onClick={() => addCount()}>+</Button>
                count: {count}
                <Button onClick={removeCount}>-</Button>
              </Nav.Link>
            </Nav>
            <Nav.Link href="/login">
              <Button variant="dark">
                <ArrowRight />
              </Button>
            </Nav.Link>
            <img />
            vinay maurya
            {!user?.email && (
              <Nav.Link href="/login">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            )}
          </Navbar.Collapse>
          {date}/{monthsStr.at(month)}/{year}: {hours}:{mins}:{sec}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
