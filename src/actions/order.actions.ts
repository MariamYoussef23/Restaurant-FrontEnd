import { Orders } from "../types"

export const getOrders = (orders: Orders ) => {
    return {
        type: "GET_ORDERS",
        payload: orders
    }
}
