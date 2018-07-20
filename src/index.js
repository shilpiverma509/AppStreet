import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import HeaderComp from "./components/HeaderComp";

import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import configureStore from "./reducers/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="wrapper">
        <HeaderComp />
        <Route path="/" exact component={ProductListing} />
        <Route path="/detail/:id" exact component={ProductDetail} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
