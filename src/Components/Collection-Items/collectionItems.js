import React from "react";
import { connect } from "react-redux";
import { addItems } from "../../Redux/reducers/cart/cartAction";
import "./collectionItems.css";
import Button from "../Button/Button";
const collectionItems = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addItems(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(collectionItems);
