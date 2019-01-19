import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import logo from "../blockchain.svg"

  const Products = () => (
    <div className="products">
      <div className="App-header">
        <div className="svgs">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to blockGames</h2>
        </div>
      </div>
    </div>
  );

export default Products;

