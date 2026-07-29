import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy loading all required pages as per routing rules
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));

// Scroll To Top on Route Change component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950">
    <div className="flex flex-col items-center space-y-3">
      <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
        Loading Raju Medical Hall...
      </p>
    </div>
  </div>
);

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppModal = (medName?: string) => {
    if (medName) {
      setPrefilledMedicine(medName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-emerald-500 selection:text-white">
          
          <Header onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/about" element={<About onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/gallery" element={<Gallery onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/contact" element={<Contact onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />

          <FloatingButtons onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={() => setIsWhatsAppModalOpen(false)}
            prefilledMedicine={prefilledMedicine}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
