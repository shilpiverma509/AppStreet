import axios from "axios";

export const FETCH_PRODUCTS = "fetchProducts";
const ROOT_URL = "https://assignment-appstreet.herokuapp.com/api/v1/products";

export function fetchProducts() {
  const req = axios.get(`${ROOT_URL}?page=1`);
  return {
    type: FETCH_PRODUCTS,
    payload: req
  };
}
