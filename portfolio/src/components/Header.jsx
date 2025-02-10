import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background-light/30 dark:bg-background-dark px-6 py-4 flex items-center justify-between">
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">ESKAYY</h1>
        </Link>
        
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-text-light dark:text-text-dark hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-text-light dark:text-text-dark hover:underline">
          About
        </Link>
        <Link to="/projects" className="text-text-light dark:text-text-dark hover:underline">
          Projects
        </Link>
        <Link to="/contact" className="text-text-light dark:text-text-dark hover:underline">
          Contact
        </Link>
      </nav>

      <button
        className="text-text-light dark:text-text-dark border border-primary-light dark:border-primary-dark px-3 py-1 rounded"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
