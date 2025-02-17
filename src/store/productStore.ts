import { create } from "zustand";
import { ProductType } from "@/types/restaurant";

interface ProductStore {
  products: ProductType[];
  setProducts: (products: ProductType[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
