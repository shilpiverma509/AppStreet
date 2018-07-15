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
          className="ui left floated small image"
          src={imageUrl}
          alt="productImage"
        />
        <div className="right">
          <h2>{name}</h2>
          <hr align="left" width="100%" />
          <div className="text">
            <p>{description}</p>
            <p>&#8377;{mark_price}</p>
            <hr align="left" width="100%" />
          </div>

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
function mapStateToProps(state) {
  return {
    ...state.data.product
  };
}

export default connect(
  mapStateToProps,
  { fetchSingleProduct }
)(ProductDetail);
