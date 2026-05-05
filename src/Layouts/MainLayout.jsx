import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(darkMode));
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="min-h-screen flex flex-col container mx-auto p-0">
      <header>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </header>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 overflow-hidden px-6">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
};

export default MainLayout;
