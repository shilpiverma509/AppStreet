import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../actions";

class ProductDetail extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleProduct(id);
  }

  render() {
    const {
      name,
      imageUrl,
      mark_price,
      colors,
      storage,
      description
    } = this.props;
    return (
      <div className="ui segment container">
        <img
          className="ui left medium image"
          src={imageUrl}
          alt="productImage"
        />
        <div className="right">
          <p>{name}</p>
          <hr align="left" width="100%" />
          <p>{description}</p>
          <p>&#8377;{mark_price}</p>
          <hr align="left" width="100%" />
          <div>
            <ul>
              {colors &&
                colors.map(color => (
                  <li className={color.className} key={color.name}>
                    {color.name}
                  </li>
                ))}
            </ul>
          </div>

          <ul>
            {storage &&
              storage.map(size => (
                <li className={size.className} key={size.name}>
                  {size.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ products }) {
  return {
    ...products
  };
}

export default connect(
  mapStateToProps,
  { fetchSingleProduct }
)(ProductDetail);
