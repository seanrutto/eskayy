import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: window.localStorage.getItem("theme") || "light", // Initialize from localStorage or default to light
  setTheme: (theme) => {
    window.localStorage.setItem("theme", theme); // Persist theme in localStorage
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme); // Persist theme in localStorage
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
