import React, { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../../Assets/logo/fk-logo.png";
import "./style.css";

function Header(props) {
  const { isCartEnabled = false } = props || {};

  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [searchProduct, setSearchProduct] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  /**
   * @description Getting values from search input box
   * @param {Object} event
   */
  const handleSearch = (event) => {
    setSearchProduct(event.target.value);
  };

  /**
   * @description When user searches any product
   */
  const handleSearchProduct = () => {
    if (!searchProduct) return;

    console.log("handle search button click", searchProduct);
    navigate("/products", { state: { type: "search", value: searchProduct } });
  };

  const localStorageCartCounting = localStorage.getItem("cartData");

  const countingData = JSON.parse(localStorageCartCounting);

  const handleSelectProd = (e, dropDownType) => {
    console.log("dropDownType", dropDownType);
    navigate("/products", { state: { type: "search", value: dropDownType } });
  };

  const handleProductPage = () => {
    navigate("/products", { state: { type: "", value: "" } });
  };

  return (
    <React.Fragment>
      <Navbar expand="lg" className="nav-bar">
        <Container className="nav-fixed">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" width={"100px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-item" href="/home-page">
                Home
              </Nav.Link>

              <Nav.Link
                className="nav-item"
                href="/products"
                onClick={() => handleProductPage()}
              >
                Product
              </Nav.Link>
              <NavDropdown title="Quick Search" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e) => handleSelectProd(e, "phone")}>
                  Phone
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) => handleSelectProd(e, "laptop")}
                >
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) => handleSelectProd(e, "macbook")}
                >
                  Mackbook
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={(e) => handleSelectProd(e, "skin")}>
                  Skin Care
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => handleSelectProd(e, "book")}>
                  Book
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => handleSelectProd(e, "daal")}>
                  Daal
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item" href="/about-us">
                About
              </Nav.Link>
              <Nav.Link className="nav-item" href="/contact-us">
                Contact
              </Nav.Link>
            </Nav>

            <InputGroup className="search-field">
              <InputGroup.Text id="basic-addon1">
                <IoSearchOutline />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for products, Brands and more"
                aria-label="Search for products, Brands and more"
                aria-describedby="basic-addon1"
                value={searchProduct}
                onChange={(e) => handleSearch(e)}
              />
              <Button
                variant="dark"
                disabled={!searchProduct}
                onClick={handleSearchProduct}
              >
                Search
              </Button>
            </InputGroup>

            {isCartEnabled && (
              <Nav.Link>
                <div onClick={handleCartClick} className="cart-icon-cont">
                  <PiShoppingCartBold />
                  {countingData?.length > 0 && (
                    <p className="cart-counts">{countingData?.length}</p>
                  )}
                </div>
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
                  <p className="user-name">{user?.firstName}</p>
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
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
