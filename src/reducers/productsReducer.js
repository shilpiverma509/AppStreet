import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../actions/index";
import _ from "lodash";

export default function(state = { products: {}, product: {} }, action) {
  /**
   * we need to convert the list of object of products to object of products
   * with id as key and object as value
   * using _.mapKeys for pulling off the id property
   * of the individual object
   */
  switch (action.type) {
    case FETCH_PRODUCTS:
      if (action.payload.data.products.length > 0) {
        document.getElementById("loadMore").removeAttribute("disabled");
        if (!_.isEmpty(state.products)) {
          let temp = Object.assign(
            state.products,
            _.mapKeys(action.payload.data.products, "_id")
          );
          return Object.assign({}, state, { products: temp });
        }
        return Object.assign({}, state, {
          products: _.mapKeys(action.payload.data.products, "_id")
        });
      } else {
        document
          .getElementById("loadMore")
          .setAttribute("disabled", "disabled");
        return state;
      }

    case FETCH_PRODUCT:
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
      return Object.assign({}, state, { product: product });

    default:
      return state;
  }
}
