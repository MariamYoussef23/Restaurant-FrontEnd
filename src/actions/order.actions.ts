import { Order } from "../types"

export const getOrders = (orders: Order[] ) => {
    return {
        type: "GET_ORDERS",
        payload: orders
    }
}
