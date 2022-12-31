import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Cards.css";
import ProductCard from "./ProductCard";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const allProducts = useSelector((state) => state.FirstReducer.allProducts);
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    const resp = await axios.get(`https://fakestoreapi.com/products`);
    setProducts(resp.data);
    dispatch({ type: "ALL_PRODUCTS", data: resp.data });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    const filteredItems = allProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredItems);
  }, [search]);
  const handleAddCartItems = (item) =>
    dispatch({ type: "ADD_TO_CART", data: item });
  const handleCaregories = (category) => {
    if (category) {
      const selectedCategory = allProducts.filter(
        (item) => item.category === category
      );
      setProducts(selectedCategory);
    } else {
      setProducts(allProducts);
    }
  };
  const handleSorting = (sortBy) => {
    if (sortBy === "asc") {
      const sorted = products.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProducts(sorted);
    }
    if (sortBy === "dsc") {
      const sorted = products.sort((a, b) => (a.price > b.price ? -1 : 1));
      setProducts(sorted);
    }
    if (sortBy === "clr") {
      const sorted = products.sort((a, b) => (a.id > b.id ? 1 : -1));
      setProducts(sorted);
    }
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => handleCaregories()}>
            All
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleCaregories("men's clothing")}
          >
            Men
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleCaregories("women's clothing")}
          >
            Women
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleCaregories("electronics")}
          >
            Electronics
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleCaregories("jewelery")}
          >
            Jewelery
          </Button>
          <Button onClick={() => handleSorting("asc")} variant="secondary">
            Low To High
          </Button>
          <Button onClick={() => handleSorting("dsc")} variant="secondary">
            High To Low
          </Button>
          <Button onClick={() => handleSorting("clr")} variant="secondary">
            Clear Sort
          </Button>
        </ButtonGroup>
      </div>
      <div className="card-container">
        {products.map((item) => {
          return (
            <ProductCard
              btnName="Add To Cart"
              item={item}
              handlecart={handleAddCartItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
