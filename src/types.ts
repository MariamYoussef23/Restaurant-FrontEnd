export interface AppTypes  {
 item? : Food 
 show?: boolean
 onHide?: Function
 placement?: string
 name?: string
} 

export interface Food {
  id: number;
  name: string;
  type: string;
  ingredients?: string[];
  price: number;
  popular: boolean

}