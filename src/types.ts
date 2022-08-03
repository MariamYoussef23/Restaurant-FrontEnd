export interface AppTypes  {
item?: Product
 show?: boolean
 onHide?: Function
 placement?: string
 name?: string

 
} 

export interface Product {
  id: number;
  name: string;
  type: string;
  ingredients?: string[];
  description?: string
  price: number;
  popular: boolean
  category?: Category
 
}
export interface Category {
  id: number
  name: string
}
export interface ProductsAction {
  type: string
  payload: Product
}

export interface Products {
  products: Product[]
}

export interface ProductType {
  product: Product
}