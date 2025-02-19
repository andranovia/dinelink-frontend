import { create } from "zustand";

interface AlertState {
  message: { [key: string]: string } | null;
  type: "default" | "destructive" | null;
  isVisible: boolean;
}

interface AlertActions {
  showAlert: (message: AlertState["message"], type: AlertState["type"]) => void;
  hideAlert: () => void;
}

const useAlertStore = create<AlertState & AlertActions>((set) => ({
  message: null,
  type: null,
  isVisible: false,
  showAlert: (message, type) => set({ message, type, isVisible: true }),
  hideAlert: () => set({ message: null, type: null, isVisible: false }),
}));

export default useAlertStore;
