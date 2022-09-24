import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProductsList from "./components/Products";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductsService from "./API/ProductsService";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const products = await ProductsService.getAll();
    setProducts(products);
  }

  return (
    <body>
      <Header />

      <Carousel />

      <ProductsList products={products} />
    </body>
  );
}

export default App;
