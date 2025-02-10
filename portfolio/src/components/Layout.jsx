import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import lightBg from "../assets/logo_light.png";
import darkBg from "../assets/logo_dark.png";


function Layout({ children }) {
  return (
    <div className="relative min-h-screen mx-auto flex flex-col bg-cover bg-center text-text-light dark:text-text-dark">
      {/* Light Theme Background with Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0)_70%)] dark:hidden"
        style={{ backgroundImage: `url(${lightBg})` }}

      />

      {/* Dark Theme Background with Radial Gradient */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0)_70%)]"
        style={{ backgroundImage: `url(${darkBg})` }}

      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow w-[80vw] mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
