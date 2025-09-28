'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const Navigation: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isDarkMode = useMemo(
    () => (theme === 'system' ? resolvedTheme === 'dark' : theme === 'dark'),
    [theme, resolvedTheme]
  );

  const toggleDarkMode = useCallback(() => {
    setTheme(isDarkMode ? 'light' : 'dark');
  }, [isDarkMode, setTheme]);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'border-b border-slate-200 bg-slate-50/95 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='font-display text-xl font-extralight tracking-tight text-slate-900 dark:text-slate-100'
            >
              Michael Emmanuel
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden items-center space-x-8 md:flex'>
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-sm font-light tracking-wide transition-colors duration-300 ${
                  isActiveRoute(item.path)
                    ? 'border-b border-slate-900 text-slate-900 dark:border-slate-100 dark:text-slate-100'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className='p-2 text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? (
                <Sun className='h-5 w-5' />
              ) : (
                <Moon className='h-5 w-5' />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-slate-600 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='border-t border-slate-200 bg-slate-50/95 backdrop-blur-sm md:hidden dark:border-slate-700 dark:bg-slate-900/95'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navItems.map(item => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full px-3 py-2 text-left text-base font-light tracking-wide transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className='flex w-full items-center space-x-2 px-3 py-2 text-left text-base font-light tracking-wide text-slate-600 transition-colors duration-300 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
              >
                {isDarkMode ? (
                  <Sun className='h-5 w-5' />
                ) : (
                  <Moon className='h-5 w-5' />
                )}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
