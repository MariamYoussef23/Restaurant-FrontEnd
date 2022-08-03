import { Products } from "../types"

export const getProductsAction = (products : Products) => {
    return {
        type: 'GET_PRODUCTS',
        payload: products
    }
}