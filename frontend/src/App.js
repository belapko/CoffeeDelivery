import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import ListProductsWithCategories from "./components/ListProductsWithCategories";
import LoginPage from "./components/Login";
import RegistrationPage from "./components/Registration";
import ShoppingCart from "./components/ShoppingCart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [{ pk: 1, title: "all" }],
      cart: [],
    };
    localStorage.isAuth = false;
  }

  getCategories = async () => {
    const category_all = [{ pk: null, title: "all" }];
    const data = (await axios.get("http://127.0.0.1:8000/api/categories/"))
      .data;
    this.setState({ categories: [...category_all, ...data] });
  };

  getProducts = async (num) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/products/?category=" + (num != null ? num : "")
    );
    this.setState({ products: response.data });
  };

  getCartData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/cart/checkout/" + localStorage.getItem("uid") + "/")
    .then(result => this.setState({cart: result.data.checkout_details}));
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  componentDidUpdate() {
    this.getCartData();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/products"
            element={
              <ListProductsWithCategories
                categories={this.state.categories}
                getProducts={this.getProducts}
                products={this.state.products}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/cart" element={<ShoppingCart cart={this.state.cart} products={this.state.products} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
