import { create } from "zustand";

type AuthState = {
  user: null | { id: number; name: string; email: string };
  token: string | null;
  isAuthenticated: boolean;
};

type AuthActions = {
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
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  isAuthenticated: !!localStorage.getItem("token"),
  login: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
