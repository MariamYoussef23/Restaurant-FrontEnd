import { combineReducers } from "redux";
import products from "./products.reducer";
import cart from "./cart.reducer"
import orders from "./orders.reducer"

export const reducers = combineReducers({
  products,
  cart,
  orders 
});
