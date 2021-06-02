import { userActionTypes } from "../../constant";

export const toggleCartHidden = () => ({
  type: userActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItems = (user) => ({
  type: userActionTypes.CART_ITEMS,
  payload: user,
});

export const clearItemFromCart = (item) => ({
  type: "CLEAR_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});
