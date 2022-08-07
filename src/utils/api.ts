import axios from "axios";
import { useEffect } from "react";
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
  console.log(order);
  console.log();
  try {
    const response = await axios.post("http://localhost:5000/orders", order);
  } catch (error) {
    console.log(error);
  }
};
