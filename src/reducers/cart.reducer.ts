import { ProductsAction, Product } from "../types";

const reducer = (state: Product[] = [], action: ProductsAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartItem = state.find(
        (product) => product.id === action.payload.id
      );
      if (!cartItem) {
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        return state.map((product) => {
          if (product.id === cartItem.id) {
            return { ...product, quantity: (product.quantity as number) + 1 };
          } else {
            return product;
          }
        });
      }

    case "REMOVE_FROM_CART":
      let data = state.map((product) => {
        if (product.id === action.payload.id) {
          if ((product.quantity as number) > 0) {
            return { ...product, quantity: (product.quantity as number) - 1 };
          } else {
            return product;
          }
        } else {
          return product;
        }
      });
      return data.filter((product) => product.quantity! > 0);

    case "EMPTY_CART":
      return (state = []);

    default:
      return state;
  }
};
export default reducer;
