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
    token: string
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
  login: (user, token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
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
