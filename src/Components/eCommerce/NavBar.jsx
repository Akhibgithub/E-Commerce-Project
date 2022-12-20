import React from "react";
import "./NavBar.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({setSearch}) => {
  const cartItems = useSelector((state) => state.FirstReducer.cart.length);
  return (
    <div className="nav-container">
      <div className="logoSpace">
        <Link to="/">My Redux App</Link>
      </div>
      <div className="spacing"></div>
      <div className="anchors">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search-box"
            aria-label="Search"
            onChange={(e) =>setSearch(e.target.value)}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Link to="/cart">
          Cart <ShoppingCartIcon /> <sup>{cartItems}</sup>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
