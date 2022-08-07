
import { Product } from "../types"

export const addToCart = (product: Product) =>  {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const removeFromCart = (product: Product) =>  {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product
    }
}

export const emptyCart = () => {
    return {
        type: "EMPTY_CART"
    }
}