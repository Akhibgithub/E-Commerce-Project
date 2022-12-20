import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const ProductsDetails = () => {
  const item = useSelector((state) => state.FirstReducer.selectedItem);
  const dispatch = useDispatch()
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "40%" }}>
        <img src={item.image} alt="" width="100%" height="78%" />
      </div>
      <div style={{ width: "45%", color: "#deb887", marginLeft: "7%" }}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h3>$ {item.price}</h3>
        <h1>Category : {item.category}</h1>
        <h3>Rating : {item.rating.rate} Count : {item.rating.count}</h3>
      <Button
        className="btns"
        variant="outline-warning"
        onClick={() => dispatch({ type: "ADD_TO_CART", data: item })}
      >
        Add To Cart <ShoppingCartCheckoutIcon />
      </Button>
      </div>
    </div>
  );
};

export default ProductsDetails;
