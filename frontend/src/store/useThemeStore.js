import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("LangoLink-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("LangoLink-theme", theme);
    set({ theme });
  },
}));
