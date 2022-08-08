export interface AppTypes {
  item?: Product;
  show?: boolean;
  onHide?: Function;
  onClick?: Function;
  placement?: string;
  name?: string;
}
export interface Props {
  product?: Product;
  cartProduct?: Product
  order?: Order

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
export interface Order {
  id: number
  firstName: string
  LastName: string
  mobile: string
  city: string 
  address: string 
  orderNo: number
  orderLines: OrderLine[]
  CreatedAt: string
  UpdatedAt: string
}

export interface OrderLine {
  id: number
  product: Product
  quantity: number
}
export interface Category {
  id: number;
  name: string;
}
export interface ProductsAction {
  type: string;
  payload: Product;
}
export interface OrdersAction {
  type: string;
  payload: Order;
}

export interface Products {
  products: Product[];
  cart: Product[]
}
export interface Orders {
  orders: Order[];
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