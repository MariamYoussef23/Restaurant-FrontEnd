import { Product, ProductsAction } from "../types";

const reducer = (state: Product[] = [], action: ProductsAction) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
