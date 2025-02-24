import { create } from "zustand";
import { RestaurantTable } from "@/types/restaurant";

interface TableStore {
  tablesCategoryFilter: number;
  tables: RestaurantTable[];
  setTablesCategoryFilter: (categoryId: number) => void;
  setTables: (tables: RestaurantTable[]) => void;
}

export const useTableStore = create<TableStore>((set) => ({
  tables: [],
  tablesCategoryFilter: 1,
  setTablesCategoryFilter: (categoryId) =>
    set({ tablesCategoryFilter: categoryId }),
  setTables: (tables) => set({ tables }),
}));
