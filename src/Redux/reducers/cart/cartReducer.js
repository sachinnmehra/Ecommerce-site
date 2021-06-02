import { userActionTypes } from "../../constant";
import { addItemsToCart, removeItemFromCart } from "./cart.utils";
const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case userActionTypes.CART_ITEMS:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
