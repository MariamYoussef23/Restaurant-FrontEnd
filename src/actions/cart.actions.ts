import { Cart } from "../types"

export const updateCart = (cart: Cart) =>  {
    return {
        type: 'UPDATE_CART',
        payload: cart
    }
}