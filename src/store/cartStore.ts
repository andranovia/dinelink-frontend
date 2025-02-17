import { CartItem } from "@/types/cart";
import { ProductType } from "@/types/restaurant";
import { create } from "zustand";

type CartState = {
  cart: CartItem[] | null;
  setCart: (cart: CartItem[]) => void;
  addToCart: (addToCartPayload: {
    id: number;
    user_id: number;
    product_id: number;
    product: ProductType;
    quantity: number;
    notes: string;
    size: string;
  }) => void;
  editCart: (editCartItemPayload: {
    product_id: number;
    quantity: number;
    notes: string;
    size: string;
  }) => void;
  removeFromCart: (removeFromCartPayload: {
    product_id: number;
    quantity: number;
    notes: string;
    size: string;
  }) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  setCart: (cart) => set({ cart }),
  addToCart: (addToCartPayload) => {
    set((state) => ({
      cart: state.cart ? [...state.cart, addToCartPayload] : [addToCartPayload],
    }));
  },
  editCart: (editCartItemPayload) => {
    set((state) => ({
      cart: state.cart
        ? state.cart.map((item) =>
            item.product_id === editCartItemPayload.product_id
              ? { ...item, ...editCartItemPayload }
              : item
          )
        : null,
    }));
  },
  removeFromCart: (removeFromCartPayload) => {
    set((state) => ({
      cart: state.cart
        ? state.cart.filter(
            (item) => item.product_id !== removeFromCartPayload.product_id
          )
        : null,
    }));
  },
  clearCart: () => {
    set({ cart: null });
  },
}));
