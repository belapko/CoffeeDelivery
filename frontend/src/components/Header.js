import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const logout = () => {
  localStorage.clear();
  console.log(localStorage)
  document.location.href = '/products'
}

const Header = () => (
  <div style={{ height: 60 + "px" }}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          CoffeeDelivery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggler="collapse"
          data-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav mr-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>
                Блог
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>
                Сделать заказ
              </Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item mr-sm-2">
            {localStorage.isAuth ? (
              <Link className="nav-link" onClick={() => logout()}>
                Выйти
              </Link>
            ) : <div></div>}
          </li>
          <li className="navbar-nav my-2 my-sm-0">
            {(localStorage.isAuth && localStorage.username)? (
              <Link className="nav-link" to={"/profile"}>
                {localStorage.username}
              </Link>
            ) : (
              <Link className="nav-link" to={"/login"}>
                Войти
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
