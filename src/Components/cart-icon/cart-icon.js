import React from "react";
import "./cart-icon.css";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/reducers/cart/cartAction";
import { selectCartItemsCount } from "../../Redux/reducers/cart/cart.selectors";
const cartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
