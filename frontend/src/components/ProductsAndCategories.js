import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function ProductItem(props) {
  return (
    <div className="col-lg-3 col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={props.product.image}
          className="card-img-top"
          alt="Здесь должна быть картинка"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-lg-10">
              <h5 className="card-title">{props.product.title}</h5>
            </div>
            <div className="col-lg-2">
              <p
                class="card-link"
                tabindex="0"
                data-bs-toggle="tooltip"
                title={props.product.calories + " ККал"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </p>
            </div>
          </div>

          <p className="card-text">{props.product.description}</p>

          <div className="row">
            <div className="col-lg">
              <a href="#" className="btn btn-dark">
                В корзину
              </a>
            </div>
            <div className="col-lg">
              <p className="text-end">{props.product.price} р.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

class CategoryItem extends React.Component {
  render() {
    return (
      <button
        className="btn btn-dark col-lg-1 m-3"
        onClick={() => {
          List.getProducts(this.props.category.pk);
        }}
      >
        {this.props.category.title}
      </button>
    );
  }
}

class List extends React.Component {
  state = {
    categories: [],
    products: [],
  };

  getCategories = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/categories/");
    this.setState({ categories: response.data });
  };

  getProducts = async (num) => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/products/?category=" + (num != null ? num : "")
      // "http://127.0.0.1:8000/api/products/"
    );
    this.setState({ products: response.data });
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  render() {
    return (
      <div>
        <div className="container col-lg-9">
          <div className="row justify-content-center">
            {this.state.categories.map((category) => (
              <button
                className="btn btn-dark col-lg-1 m-3"
                onClick={() => {
                  this.getProducts(category.pk);
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {this.state.products.map((product) => (
              <ProductItem product={product} key={product.pk} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
