//import { combineReducers } from "redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import productsReducer from "./productsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//   data: productsReducer
// });
export default () => {
  const store = createStore(
    combineReducers({
      data: productsReducer
    }),
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
  return store;
};

//export default rootReducer;
