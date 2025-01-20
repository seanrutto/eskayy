import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; 
import App from "./App"; 
import useThemeStore from "./components/ThemeStore"; 

function Root() {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme") || "light";

    if (preferredTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set the theme in the store
    setTheme(preferredTheme);
  }, [setTheme]);

  return <App />;
}

// Render the App component into the root element in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
