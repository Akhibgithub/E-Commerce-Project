import React, { useState } from "react";
import Home from "./Home";
import "./landing.css";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartEcom from "./CartEcom";
import ProductsDetails from "./ProductsDetails";
const Landing = () => {
    const [search, setSearch] = useState("")
  return (
    <div className="landing-container">
      <BrowserRouter>
        <NavBar setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search}/>} />
          <Route path="cart" element={<CartEcom/>} />
          <Route path="details" element={<ProductsDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
