import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import HeaderComp from "./components/HeaderComp";

import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <HeaderComp />
        <Route path="/" exact component={ProductListing} />
        <Route path="/detail/:id" exact component={ProductDetail} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
