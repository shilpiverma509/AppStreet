import React from "react";
import ProductCard from "./ProductCard";

import { fetchProducts } from "../actions/index";
import { connect } from "react-redux";
import { Container, Button } from "semantic-ui-react";
import "../App.css";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  componentDidMount() {
    this.props.fetchProducts(this.state.page);
    this.setState({
      page: this.state.page + 1
    });
  }

  loadMore(page) {
    this.props.fetchProducts(page);
    this.setState({
      page: this.state.page + 1
    });
  }

  render() {
    const { products } = this.props;

    if (!products) {
      return <div>...loading</div>;
    }

    return (
      <Container text>
        <ProductCard products={products} />
        <br />
        <Button
          onClick={() => this.loadMore(this.state.page)}
          size="small"
          id="loadMore"
        >
          load more
        </Button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.data.products
  };
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductListing);
