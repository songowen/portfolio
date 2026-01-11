import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

export const NavBar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-brand-dark dark:bg-white border-2 border-brand-dark dark:border-white rounded-full px-6 py-3 flex justify-between items-center pop-shadow transition-colors duration-300">
        <div className="text-2xl font-serif font-bold tracking-tight text-white dark:text-brand-dark">
          songchanghyun.
        </div>
        
        <div className="hidden md:flex gap-6 items-center font-medium text-sm text-white dark:text-brand-dark">
          <a href="#about" className="hover:text-brand-pink dark:hover:text-brand-green transition-colors">ABOUT</a>
          <a href="#projects" className="hover:text-brand-pink dark:hover:text-brand-green transition-colors">PROJECTS</a>
          <a href="#stack" className="hover:text-brand-pink dark:hover:text-brand-green transition-colors">STACK</a>
          <a href="#contact" className="hover:text-brand-pink dark:hover:text-brand-green transition-colors">CONTACT</a>
        </div>

        <button 
          onClick={toggleTheme}
          className="bg-brand-pink dark:bg-brand-dark border-2 border-transparent px-3 py-2 rounded-full font-bold text-sm text-brand-dark dark:text-brand-green hover:bg-white dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};