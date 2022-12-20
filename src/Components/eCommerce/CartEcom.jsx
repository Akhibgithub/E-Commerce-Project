import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
const CartEcom = ({btnName}) => {
  const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.FirstReducer.cart)
    const handleRemoveCartItems = (item) =>
    dispatch({ type: "REMOVE_ITEM", data: item });
    return (
        <div className="card-container">
      {cartItems.map((item) => {
        return <ProductCard btnName="Remove Item" item={item} handlecart={handleRemoveCartItems}/>;
      })}
    </div>
    );
};

export default CartEcom;