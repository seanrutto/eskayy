import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: window.localStorage.getItem("theme") || "light", // Initialize from localStorage or default to light
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme); // Persist theme in localStorage
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
