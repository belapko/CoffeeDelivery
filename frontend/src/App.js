import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productCategories: [],
    };
  }

  render() {
    return (
      <body>
        <div style={{height: 60 + 'px'}}>
          <Header/>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
                <Carousel/>
            </div>
            <div className="row">
                <Products />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
