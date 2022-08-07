import { OrdersAction } from "../types";

const reducer = (state = [], action: OrdersAction ) => {
    switch (action.type) {
        case "GET_ORDERS" : 
            return action.payload;
        default: 
        return state;
    }
}

export default reducer