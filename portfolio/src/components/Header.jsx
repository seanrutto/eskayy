import React from "react";

const Header = () => {
  return (
    <header className="bg-background-light dark:bg-background-dark px-6 py-4 flex items-center justify-between">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </div>
      <nav>
        <a href="#home" className="text-text-light dark:text-text-dark hover:underline">
          Home
        </a>
        <a href="#about" className="text-text-light dark:text-text-dark hover:underline">
          About
        </a>
        <a href="#projects" className="text-text-light dark:text-text-dark hover:underline">
          Projects
        </a>
        <a href="#contact" className="text-text-light dark:text-text-dark hover:underline">
          Contact
        </a>
      </nav>

      <button
        className="text-text-light dark:text-text-dark border border-primary-light dark:border-primary-dark px-3 py-1 rounded"
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
        }
      }
      >
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
