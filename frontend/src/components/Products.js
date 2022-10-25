import React from "react";
import axios from "axios";

const ProductItem = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt="Здесь должна быть картинка"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-lg-10">
              <h5 className="card-title">{product.title}</h5>
            </div>
            <div className="col-lg-2">
              <p
                className="card-link"
                tabIndex="0"
                data-bs-toggle="tooltip"
                title={product.calories + " ККал"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </p>
            </div>
          </div>

          <p className="card-text">{product.description}</p>

          <div className="row">
            <div className="col-lg">
              <button
                className="btn btn-dark"
                onClick={() => {
                  let quantity = prompt("How much do u want?", 1)
                  axios.post("http://127.0.0.1:8000/api/cart/", {"quantity": quantity, "user": localStorage.getItem('uid'), "product": product.pk});
                }}
              >
                Buy
              </button>
            </div>
            <div className="col-lg">
              <p className="text-end">{product.price} р.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsList = ({ products, addItemInCart }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.pk}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
