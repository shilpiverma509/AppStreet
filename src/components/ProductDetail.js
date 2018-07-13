import React from "react";
import { connect } from "react-redux";

class ProductDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //this.props.fetchSingleProduct(id);
  }
  render() {
    return <div>Details</div>;
  }
}
const mapStateToProps = () => {};

export default connect(mapStateToProps)(ProductDetail);
