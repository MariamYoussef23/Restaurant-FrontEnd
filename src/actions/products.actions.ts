import { Products } from "../types"

export const getProducts = (products : Products) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}