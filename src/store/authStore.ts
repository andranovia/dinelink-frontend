import { create } from "zustand";

type AuthState = {
  user: null | { id: number; name: string; email: string };
  token: string | null;
  isAuthenticated: boolean;
};

type AuthActions = {
  login: (
    user: { id: number; name: string; email: string },
    token: string
  ) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (user, token) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null, isAuthenticated: false }),
}));

export default useAuthStore;
