export interface AppTypes {
  item?: Product;
  show?: boolean;
  onHide?: Function;
  onClick?: Function;
  placement?: string;
  name?: string;
}
export interface ProductProps {
  product?: Product;
  cartProduct?: Product
}

export interface Product {
  id: number;
  name: string;
  type: string;
  ingredients?: string[];
  description?: string;
  price: number;
  popular: boolean;
  category?: Category;
  quantity?:number;
}

export interface Category {
  id: number;
  name: string;
}
export interface ProductsAction {
  type: string;
  payload: Product;
}

export interface Products {
  products: Product[];
  cart: Product[]
}

export interface UpdateFilter {
  updateFilter: Function;
}
export interface DisplayProducts {
  displayProducts: Function;
}

export interface Cart {
  cart: CartItem[]
}

export interface CartItem {
  productId: number 
  quantity: number
}

export interface CartAction {
  type: string;
  payload: Cart;
}


export interface Values {
  firstName: string
  lastName: string
  mobile: string
  address: string
  city: string
}