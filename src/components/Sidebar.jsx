import React from 'react';
import { Home, Info, X } from 'lucide-react';

const Sidebar = ({ active, onNavigate, onClose, isOpen }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Header Sidebar dengan Logo */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-3">
          {/* Logo ARUPONIC dengan gambar */}
          <div className="flex items-center space-x-3">
            <img 
              src="/Logo-Aruponic-text.png" 
              alt="ARUPONIC"
              className="h-20 w-30" 
            />
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        <button
          onClick={() => onNavigate('Home')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
            active === 'Home'
              ? 'bg-gradient-to-r from-aruponic-blue to-aruponic-green text-white shadow-lg'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:translate-x-1'
          }`}
        >
          <Home size={20} className={`${active === 'Home' ? 'text-white' : 'text-slate-400 group-hover:text-aruponic-blue'} transition-colors`} />
          <span className="font-medium">Dashboard</span>
        </button>

        <button
          onClick={() => onNavigate('About Us')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
            active === 'About Us'
              ? 'bg-gradient-to-r from-aruponic-blue to-aruponic-green text-white shadow-lg'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:translate-x-1'
          }`}
        >
          <Info size={20} className={`${active === 'About Us' ? 'text-white' : 'text-slate-400 group-hover:text-aruponic-blue'} transition-colors`} />
          <span className="font-medium">About Us</span>
        </button>
      </nav>

      {/* Footer Sidebar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 dark:border-slate-700">
        <div className="text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Smart Farming Solution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;