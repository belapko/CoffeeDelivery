import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => (
  <div style={{ height: 60 + "px" }}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          CoffeeDelivery
        </a>
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
              <a href="#" className="nav-link">
                Блог
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Сделать заказ
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item mr-sm-2">
            <a href="#" className="nav-link">
              Выйти
            </a>
          </li>
          <li className="navbar-nav my-2 my-sm-0">
            <a href="#" className="nav-link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
