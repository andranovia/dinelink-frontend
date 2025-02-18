export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
  restaurantId: number;
};

export type RestaurantTableType = {
  restaurant_table: RestaurantTable[];
};

export type RestaurantTable = {
  id: number;
  floor: number;
  number: number;
  seats: number;
  is_active: string;
  notes: string;
  persons: number;
  restaurant_id: number;
  user_id: null;
  created_at: Date;
  updated_at: Date;
};
