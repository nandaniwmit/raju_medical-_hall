import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { galleryData } from '../data/galleryData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenWhatsAppModal: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenWhatsAppModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'store', label: 'Store Front & Interior' },
    { key: 'medicines', label: 'Medicines & Storage' },
    { key: 'devices', label: 'Health Devices' },
    { key: 'surgical', label: 'Surgical Supplies' },
    { key: 'babycare', label: 'Baby Care' }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEO
        title="Photo Gallery | Raju Medical Hall Chand Chaura Gaya"
        description="View photos of Raju Medical Hall pharmacy storefront, counter interior, temperature-controlled insulin storage, health monitors, surgical supplies, and baby care section in Gaya."
        keywords="Raju Medical Hall Photos, Store Front Chemist Gaya, Pharmacy Interior Chand Chaura, Medical Store Images Gaya"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            STORE TOUR & HYGIENE VISUALS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">Pharmacy Photo Gallery</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a virtual look inside Raju Medical Hall, our clean counters, organized medicine racks, and cold-chain refrigeration units.
          </p>
        </div>
      </section>

      {/* Filter Category Bar */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedCategory === cat.key
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-10"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-10"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl space-y-4 p-4 md:p-6 text-white max-h-[90vh] flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-black flex items-center justify-center min-h-[300px]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[60vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">{activePhoto.title}</h3>
                <p className="text-xs text-slate-300">{activePhoto.description}</p>
              </div>
              <button
                onClick={() => {
                  closeLightbox();
                  onOpenWhatsAppModal(activePhoto.title);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition flex items-center space-x-1.5 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Products via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Footer Section */}
      <section className="py-12 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Visit Our Counter at Chand Chaura, Gaya</h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-lg mx-auto">
            Experience clean, authentic, and fast medical service in person or order online via WhatsApp.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3 bg-white text-emerald-900 font-bold text-xs rounded-xl shadow hover:bg-emerald-50 transition"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
