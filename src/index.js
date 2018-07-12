import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Header />
        <Route path="/" exact component={ProductListing} />
        <Route exact path="/detail" exact component={ProductDetail} />
        <Footer />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
