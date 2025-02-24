import { create } from "zustand";

type AuthState = {
  user: null | { id: number; name: string; email: string };
  token: string | null;
  isAuthenticated: boolean;
};

type AuthActions = {
  setUser: (user: { id: number; name: string; email: string }) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  login: (
    user: { id: number; name: string; email: string },
    token: string,
    type: string
  ) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  isAuthenticated:
    typeof window !== "undefined" && !!localStorage.getItem("token"),
  login: (user, token, type) => {
    if (type === "customer") {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }
    } else if (type === "owner") {
      if (typeof window !== "undefined") {
        localStorage.setItem("restaurantToken", token);
      }
    } else if (type === "cashier") {
      if (typeof window !== "undefined") {
        localStorage.setItem("cashierToken", token);
      }
    }
    set({ user, token, isAuthenticated: true });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
