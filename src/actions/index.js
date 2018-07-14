import axios from "axios";

export const FETCH_PRODUCTS = "fetchProducts";
export const FETCH_PRODUCT = "fetchSingleProduct";
const ROOT_URL = "https://assignment-appstreet.herokuapp.com/api/v1/products";

export function fetchProducts() {
  return dispatch => {
    axios.get(`${ROOT_URL}?page=1`).then(res => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res
      });
    });
  };
}

export function fetchSingleProduct(id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/${id}`).then(res => {
      dispatch({
        type: FETCH_PRODUCT,
        payload: {
          id,
          res
        }
      });
    });
  };
}
