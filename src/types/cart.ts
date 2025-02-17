import { ProductType } from "./restaurant";

export type CartItem = {
  id: number;
  user_id: number;
  product_id: number;
  product: ProductType;
  quantity: number;
  notes: string;
  size: string;
};

export type CartType = {
  cart: CartItem[];
};
