import React from "react";
import Button from "react-bootstrap/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductCard = ({ item, btnName, handlecart }) => {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <h3>{item.title.slice(0, 15)}</h3>
      <img src={item.images} alt="" width="200px" height="200px" />
      <h5>Price : ${item.price}</h5>
      <p>{item.description.slice(0, 100)}</p>
      <Button
        className="btns"
        variant="outline-warning"
        onClick={() => handlecart(item)}
      >
        {btnName} <ShoppingCartCheckoutIcon />
      </Button>
      <Link to="/details">
        <Button
          className="btns prod-btn"
          variant="outline-warning"
          onClick={() => dispatch({ type: "SELECTED_ITEM", data: item })}
        >
          Products Details
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
