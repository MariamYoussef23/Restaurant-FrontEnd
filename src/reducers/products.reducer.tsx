import { ProductsAction } from "../types";

const reducer = (state = [], action: ProductsAction) => {
    switch (action.type) {
        case 'GET_PRODUCTS' : 
            return action.payload;
        default: 
        return state;
    }
}

export default reducer