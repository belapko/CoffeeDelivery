import axios from "axios";
import React from "react";

const CartItem = ({ item, products }) => {
  console.log(item);
  console.log(products);
  return (
    <div className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
          className="img-fluid"
          style={{ width: 150 + "px" }}
          alt="Generic placeholder image"
        />
      </div>
      <div className="flex-grow-1 ms-3">
        <a href="#!" className="float-end text-black">
          <i className="fas fa-times"></i>
        </a>
        <h5 className="text-primary">{products[item.product_id].title}</h5>
        <h6 style={{ color: "#9e9e9e" }}>
          {products[item.product_id].description}
        </h6>
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-5 pe-3">
            Cost: {products[item.product_id].price}$
          </p>
          <p className="fw-bold mb-0 me-5 pe-3">Amount: {item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

const ShoppingCart = ({ cart, products }) => {
  console.log(cart);

  return (
    <section className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card shopping-cart"
              style={{ borderRadius: 15 + "px" }}
            >
              <div className="card-body text-black">
                <div className="row">
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                      Your products
                    </h3>

                    {cart.products?.map((item) => (
                      <CartItem item={item} products={products} />
                    ))}

                    <hr className="mb-4" />
                    <div className="d-flex justify-content-between p-2 mb-2">
                      <h5 className="fw-bold mb-0">Total:</h5>
                      <h5 className="fw-bold mb-0">
                        {cart.total_quantity} items for {cart.total_sum}$
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                      Delivery details
                    </h3>

                    <form className="mb-5">
                      <div className="form-outline mb-5">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeText">
                          Your address
                        </label>
                      </div>

                      <div className="form-outline mb-5">
                        <input
                          type="text"
                          id="typeName"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeName">
                          Your name
                        </label>
                      </div>

                      <div className="form-outline mb-5">
                        <input
                          type="text"
                          id="typeName"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeName">
                          Order comments
                        </label>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        Buy now
                      </button>

                      <h5 className="fw-bold mb-5"></h5>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
