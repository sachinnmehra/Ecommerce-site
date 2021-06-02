import React from "react";
import "./cart-item.css";

const cartIem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default cartIem;
