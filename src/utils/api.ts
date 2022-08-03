import axios from "axios";
import { useEffect } from "react";


export const getProductsApi =  () => {
  
  try {
    const products =  axios.get("http://localhost:5000/products");
    return products
  } catch (error) {
      console.log(error)
  }
 
};
