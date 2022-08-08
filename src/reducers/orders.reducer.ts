import { OrdersAction, Order } from "../types";

const reducer = (state : Order[]= [], action: OrdersAction ) => {
    switch (action.type) {
        case "GET_ORDERS" : 
            return action.payload;
        default: 
        return state;
    }
}

export default reducer