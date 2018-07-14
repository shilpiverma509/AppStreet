import React from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { fetchProducts } from "../actions/index";
import { connect } from "react-redux";
import { Container, Button } from "semantic-ui-react";
import "../App.css";

class ProductListing extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    //console.log(this.props);
    const { products } = this.props;

    if (!products) {
      return <div>...loading</div>;
    }

    return (
      <Container text>
        <ProductCard products={products} />
        <br />
        <Button size="small">load more</Button>
      </Container>
    );
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
