import { Dispatch } from "redux";
import { addToCart, removeFromCart } from "../actions/cart.actions";
import cart from "../components/homeComps/cart";
import { Product } from "../types";

export const updateCart = (
  sign: number,
  product: Product,
  dispatch: Dispatch
) => {
  if (sign === 1) {
    dispatch(addToCart(product!));
  } else if (sign == -1) {
    dispatch(removeFromCart(product!));
  }
};


