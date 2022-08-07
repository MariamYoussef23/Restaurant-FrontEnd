import axios from "axios";
import { Dispatch } from "redux";
import { getOrders } from "../actions/order.actions";
import { Product, Values } from "../types";

export const getProductsApi = () => {
  try {
    const products = axios.get("http://localhost:5000/products");
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const postOrder = async (values: Values, orderLines: Product[]) => {
  let order = { ...values, orderLines };
  
  try {
    const response = await axios.post("http://localhost:5000/orders", order);
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersApi = async (dispatch: Dispatch) => {
  try {
    const orders = await axios.get("http://localhost:5000/orders");
    dispatch(getOrders(orders.data.data));
    
  } catch (error) {
    console.log(error);
  }
};
