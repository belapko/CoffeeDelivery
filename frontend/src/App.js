import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import List from "./components/ProductsAndCategories";



class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: [],
  //     categories: [],
  //     categoryChose: null,
  //   }
  // }

  render() {

    return (
      <body>
        <Header />
        <List/>
      </body>
    );
  }
}

export default App;
