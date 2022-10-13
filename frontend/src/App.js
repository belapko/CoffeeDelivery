import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import CategoriesList from "./components/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ProductsList from "./components/Products";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    };
  }

  getCategories = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/categories/");
    this.setState({ categories: response.data });
  };

  getProducts = async (num) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/products/?category=" + (num != null ? num : "")
    );
    this.setState({ products: response.data });
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <CategoriesList
          categories={this.state.categories}
          getProducts={this.getProducts}
        />
      <Routes>
        <Route exact path="/products" element={<ProductsList products={this.state.products}/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
