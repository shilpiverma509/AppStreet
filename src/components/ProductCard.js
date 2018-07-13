import React from "react";
import { Grid, Image } from "semantic-ui-react";
import _ from "lodash";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  renderProducts() {
    //return _.map(this.props.products, product => {
    let grid = _.map(this.props.products, product => {
      return (
        <Grid.Column key={product._id}>
          <Link to={`/detail/${product._id}`}>
            <Image rounded className="images" src={product.images[0]} />
          </Link>

          <h4 className="product">{product.name}</h4>
          <h3 className="product">&#8377;{product.mark_price}</h3>
        </Grid.Column>
      );
    });
    return (
      <Grid columns={4}>
        <div className="ui grid">
          <div className="doubling four column row">{grid}</div>
        </div>
      </Grid>
    );
  }

  render() {
    return <ul>{this.renderProducts()}</ul>;
  }
}
export default ProductCard;
