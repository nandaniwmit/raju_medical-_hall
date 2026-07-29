import React, { useState } from 'react';
import { 
  Pill, Bandage, Activity, Stethoscope, HeartHandshake, ShieldPlus, 
  CheckCircle2, ShoppingCart, MessageCircle, Phone, Search, ChevronDown, ChevronUp, Info
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { faqsData } from '../data/faqsData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0].id);

  const categories = ['All', 'Prescription Medicines', 'OTC Medicines', 'Health Devices', 'Medical Equipment', 'Baby Care', 'Supplements'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEO
        title="Services & Medicine Inventory | Raju Medical Hall Gaya"
        description="Explore 100% genuine prescription drugs, OTC medicines, health monitors, surgical equipment, baby care, and dietary supplements at Raju Medical Hall, Chand Chaura, Gaya."
        keywords="Prescription Medicines Gaya, Buy Insulin Gaya, Omron BP Monitor Chand Chaura, Baby Care Pharmacy Gaya, Surgical Supplies Gaya"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            COMPREHENSIVE PHARMACEUTICAL CARE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">Services & Medicine Categories</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover our vast range of healthcare products, diagnostic devices, pediatric care, and prescription medication.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Service Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {service.category}
                    </span>
                    <Pill className="w-5 h-5 text-emerald-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">Key Advantages:</h4>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1.5">Popular In Stock:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.popularItems.map((item, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order / Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Live Medicine Stock Checker */}
      <section id="stock-checker" className="py-16 bg-slate-100 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onOrderMedicine={(med) => onOpenWhatsAppModal(med)} />
        </div>
      </section>

      {/* Full FAQ Section */}
      <section id="faqs" className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              HELPFUL INFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Complete Pharmacy FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq) => (
              <div
                key={faq.id}
                className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between space-x-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <span>{faq.question}</span>
                  {openFaqId === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqId === faq.id && (
                  <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Can’t Find Your Required Brand?</h2>
          <p className="text-xs sm:text-sm text-emerald-100">
            We stock over 5,000+ formulations at our Chand Chaura store. Call or WhatsApp 09431409411 for instant assistance.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-6 py-3 bg-white text-emerald-900 font-bold text-xs rounded-xl shadow hover:bg-emerald-50 transition"
            >
              Send WhatsApp Inquiry
            </button>
            <a
              href="tel:09431409411"
              className="px-6 py-3 bg-emerald-800 text-white font-bold text-xs rounded-xl border border-white/20 transition"
            >
              Call 09431409411
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
