// Navbar.js - Alternatif (hanya logo saja di mobile, logo+text di desktop)
import React from 'react';
import { Moon, Sun, Menu } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode, toggleSidebar, sidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo dan Toggle Sidebar */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105"
              aria-label="Toggle sidebar"
            >
              <Menu size={20} />
            </button>
            
            {/* Logo ARUPONIC - responsive */}
            <div className="flex items-center space-x-3">
              {/* Teks logo hanya tampil di desktop */}
              <div className="hidden md:block">
                <img 
                  src="/Logo-Aruponic-text.png" 
                  alt="ARUPONIC"
                  className="h-10 w-15" 
                />
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 group"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon size={20} className="text-slate-600 group-hover:rotate-12 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;