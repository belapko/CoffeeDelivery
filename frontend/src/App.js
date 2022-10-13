import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import ListProductsWithCategories from "./components/ListProductsWithCategories";
import LoginPage from "./components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [{pk:1, title: 'all'}],
    };
    localStorage.isAuth = false;
  }


  getCategories = async () => {
    const category_all = [{'pk': null, 'title': "all"}]
    const data = (await axios.get("http://127.0.0.1:8000/api/categories/")).data;
    this.setState({ categories: [...category_all, ...data]});
  };

  getProducts = async (num) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/products/?category=" + (num != null ? num : "")
    );
    this.setState({ products: response.data });
  };

  login = () => {
    const response = axios
      .post("http://127.0.0.1:8000/api/auth/login/", {
        username: "user2",
        password: "04122003",
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          localStorage.setItem('isAuth', true);
          localStorage.setItem('username', response.data.user.username);
          localStorage.setItem('token', response.data.access);
          document.location.href = '/products'
          {console.log("redirect"); console.log(localStorage)}
        }
      });
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
    // this.login();
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
          <Route path="/login" element={<LoginPage login={this.login}/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
