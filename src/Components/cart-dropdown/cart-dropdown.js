import React from "react";
import "./cart-dropdown.css";
import { connect } from "react-redux";
import Button from "../Button/Button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../Redux/reducers/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../Redux/reducers/cart/cartAction";
const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItems) => (
          <CartItem key={cartItems.id} item={cartItems} />
        ))
      ) : (
        <span className="empty-msg">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Check Out
    </Button>
  </div>
);

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropDown));
