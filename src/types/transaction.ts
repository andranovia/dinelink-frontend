import { User } from "./auth";
import { RestaurantType } from "./restaurant";

export type TransactionType = {
  id: number;
  items: string;
  order_id: string;
  user_id: number;
  restaurant_id: number;
  status: string;
  total: number;
  subtotal: number;
  tax: number;
  created_at: string;
  updated_at: string;
  user: User;
  restaurant: RestaurantType;
};
