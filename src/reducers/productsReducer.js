import { FETCH_PRODUCTS } from "../actions/index";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      //console.log("reducer", action.payload.data.products);
      return _.mapKeys(action.payload.data.products, "_id");

    default:
      return state;
  }
}
