import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../actions/index";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log("reducer", action.payload);
      return _.mapKeys(action.payload.data.products, "_id");

    case FETCH_PRODUCT:
      console.log(action.id);
      console.log("reducer", action.payload);
      var data = action.payload.res.data;

      var colorAttribute = _.filter(data.attributes, function(attr) {
        return attr.name === "Colour";
      });

      if (colorAttribute) {
        colorAttribute = colorAttribute[0];
      }
      var colors = _.filter(data.options, option => {
        return option.attrib_id === colorAttribute._id;
      });

      var storageAttribute = _.filter(data.attributes, function(attr) {
        return attr.name === "Storage";
      });

      if (storageAttribute) {
        storageAttribute = storageAttribute[0];
      }
      var storage = _.filter(data.options, option => {
        return option.attrib_id === storageAttribute._id;
      });

      //setting default selection as false
      colors = _.map(colors, color => {
        color.className = "box";
        return color;
      });

      storage = _.map(storage, storageVal => {
        storageVal.className = "box";
        return storageVal;
      });

      var selectedProductObj;
      var selectedProduct = _.filter(data.product_variations, function(
        selectedProduct
      ) {
        return selectedProduct._id === action.payload.id;
      });
      selectedProductObj = selectedProduct[0];

      _.map(selectedProduct[0].sign, signId => {
        colors = _.map(colors, color => {
          if (color._id === signId) {
            color.className = "highlight";
          }
          return color;
        });

        storage = _.map(storage, storageVal => {
          if (storageVal._id === signId) {
            storageVal.className = "highlight";
          }
          return storageVal;
        });
      });

      let product = {
        description: data.primary_product.desc,
        imageUrl: selectedProductObj.images[0],
        mark_price: selectedProductObj.mark_price,
        colors: colors,
        storage: storage,
        name: selectedProductObj.name
      };
      //return { ...product };
      return { ...state, ...product };

    default:
      return state;
  }
}
