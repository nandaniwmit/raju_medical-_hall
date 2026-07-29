import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, ShoppingBag } from 'lucide-react';

interface FloatingButtonsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3 items-end">
      {/* Sticky Mobile CTA Order Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="md:hidden flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2.5 rounded-full shadow-xl shadow-emerald-600/30 font-semibold text-xs animate-pulse hover:animate-none transition transform hover:scale-105"
        aria-label="Order via WhatsApp"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>Order Medicine</span>
      </button>

      {/* Floating Call Button */}
      <a
        href="tel:09431409411"
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-xl shadow-sky-600/30 transition-all transform hover:scale-110"
        title="Call Raju Medical Hall (09431409411)"
        aria-label="Call Store"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
          Call 09431409411
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-500/40 transition-all transform hover:scale-110"
        title="Order via WhatsApp"
        aria-label="WhatsApp Order"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-white/20" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-md">
          WhatsApp Order
        </span>
      </button>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 h-10 bg-slate-800 dark:bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition transform hover:scale-110"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
