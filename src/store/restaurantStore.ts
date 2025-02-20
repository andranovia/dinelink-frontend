import { create } from "zustand";

interface RestaurantState {
  RestaurantCode: string;
}

interface RestaurantActions {
  setRestaurantCode: (code: RestaurantState["RestaurantCode"]) => void;
}

const useRestaurantStore = create<RestaurantState & RestaurantActions>(
  (set) => ({
    RestaurantCode: "",
    setRestaurantCode: (code) => set({ RestaurantCode: code }),
  })
);

export default useRestaurantStore;
