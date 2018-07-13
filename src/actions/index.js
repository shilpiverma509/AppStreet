import axios from "axios";

export const FETCH_PRODUCTS = "fetchProducts";
export const FETCH_PRODUCT = "fetchSingleProduct";
const ROOT_URL = "https://assignment-appstreet.herokuapp.com/api/v1/products";

export function fetchProducts() {
  const req = axios.get(`${ROOT_URL}?page=1`);
  //axios.get(`${ROOT_URL}?page=1`).then(res => console.log(res));
  return {
    type: FETCH_PRODUCTS,
    payload: req
  };
}

export function fetchSingleProduct(id) {
  const req = axios.get(`${ROOT_URL}`);
}
