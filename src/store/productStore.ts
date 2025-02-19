import { create } from "zustand";
import { ProductType } from "@/types/restaurant";

interface ProductStore {
  productsCategoryFilter: number;
  products: ProductType[];
  setProductsCategoryFilter: (categoryId: number) => void;
  setProducts: (products: ProductType[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  productsCategoryFilter: 0,
  setProductsCategoryFilter: (categoryId) =>
    set({ productsCategoryFilter: categoryId }),
  setProducts: (products) => set({ products }),
}));
