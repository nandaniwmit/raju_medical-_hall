import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Sun, Moon, Menu, X, Cross, Shield, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenWhatsAppModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsAppModal }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      {/* Top Emergency / Contact Strip */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-sky-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 font-medium">
              <Cross className="w-3.5 h-3.5 text-emerald-300 fill-emerald-300" />
              <span>Chand Chaura, Gaya, Bihar 823001</span>
            </span>
            <span className="hidden md:flex items-center space-x-1 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>Mon-Sat: 8:00 AM - 10:00 PM | Sun: 9:00 AM - 8:00 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-semibold">
            <a
              href="tel:09431409411"
              className="flex items-center space-x-1 hover:text-emerald-200 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>Call: 09431409411</span>
            </a>
            <span className="opacity-40">|</span>
            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center space-x-1 hover:text-emerald-200 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp Medicine Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition transform">
            <Cross className="w-5 h-5 fill-white stroke-none" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                RAJU MEDICAL HALL
              </span>
            </div>
            <p className="text-[10px] font-semibold text-[#0A8F6A] dark:text-emerald-400 tracking-[0.2em] uppercase mt-1">
              Trusted Care Since 1998 • Gaya
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-1 transition-all ${
                isActive(link.path)
                  ? 'text-[#0A8F6A] dark:text-emerald-400 font-bold border-b-2 border-[#0A8F6A]'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Header Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            aria-label="Toggle theme"
            title="Toggle Light/Dark Mode"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* WhatsApp CTA Button */}
          <button
            onClick={onOpenWhatsAppModal}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 dark:text-white" />
            <span>Order Online</span>
          </button>
        </div>

        {/* Mobile Menu & Theme Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition ${
                isActive(link.path)
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Medicine Order</span>
            </button>
            <a
              href="tel:09431409411"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold rounded-xl"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Call 09431409411</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
