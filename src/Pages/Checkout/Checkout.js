import React from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/reducers/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutIem from "../../Components/Checkout-items/Checkout-item";
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutIem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total:${total} </span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
