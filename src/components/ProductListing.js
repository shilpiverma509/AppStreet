import React from "react";
import { fetchProducts } from "../actions/index";
import { connect } from "react-redux";

class ProductListing extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return <div>{this.props.products}</div>;
  }
}

function mapStateToProps({ products }) {
  return {
    products
  };
}
export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductListing);
