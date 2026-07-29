import React from 'react';
import { 
  Award, ShieldCheck, Heart, Users, Clock, MapPin, 
  CheckCircle2, Sparkles, Building2, UserCheck, MessageCircle, Phone, Snowflake
} from 'lucide-react';
import { SEO } from '../components/SEO';
import heroImg from '../assets/images/pharmacy_hero_banner_1785310513243.jpg';
import storeFrontImg from '../assets/images/pharmacy_store_front_1785310530410.jpg';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  const timelineEvents = [
    {
      year: '2011',
      title: 'Store Founding in Chand Chaura',
      description: 'Raju Medical Hall was established in Chand Chaura, Gaya, with a single mission: to provide authentic, affordable pharmaceutical care to local families and pilgrims.'
    },
    {
      year: '2015',
      title: 'Expansion of Surgical & Device Inventory',
      description: 'Introduced medical equipment, nebulizers, digital BP monitors, glucometers, and orthopedic rehabilitation aids.'
    },
    {
      year: '2019',
      title: 'Cold Chain Refrigeration Upgrade',
      description: 'Installed dedicated power-backed pharmaceutical cold-chain units for temperature-sensitive Insulins, eye drops, and vaccines.'
    },
    {
      year: '2023',
      title: 'WhatsApp Ordering & Digital Stock Verification',
      description: 'Launched instant WhatsApp prescription upload and medicine availability checking for Gaya residents.'
    },
    {
      year: 'Present',
      title: 'Serving 20,000+ Satisfied Families',
      description: 'Continuing our pledge of 100% genuine medicines, friendly pharmacist consultation, and reliable community care.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEO
        title="About Us | Raju Medical Hall Pharmacy Gaya"
        description="Learn about Raju Medical Hall's 15+ years journey in Chand Chaura, Gaya, Bihar. Dedicated to genuine medicines, qualified pharmacist care, and strict cold-chain insulin storage."
        keywords="About Raju Medical Hall, History Chemist Gaya, Genuine Pharmacy Chand Chaura, Licensed Pharmacist Gaya Bihar"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            ESTABLISHED IN CHAND CHAURA, GAYA
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">About Raju Medical Hall</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Delivering trust, authenticity, and compassionate healthcare to Gaya families for over a decade.
          </p>
        </div>
      </section>

      {/* Main Story & Overview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Our Heritage & Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                A Legacy of Trust in Chand Chaura, Gaya
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Raju Medical Hall was established at Q2J4+67F, Chand Chaura, Gaya with a commitment that remains unchanged today: ensuring every resident, pilgrim, and family in Gaya has access to 100% genuine, unadulterated pharmaceutical drugs and vital healthcare supplies.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Situated near the renowned Vishnupad Temple area, our pharmacy has grown from a humble neighborhood dispensary into a full-scale medical destination stocking over 5,000+ prescription drugs, chronic illness care kits, pediatric supplements, and surgical essentials.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 flex items-start space-x-3 text-xs text-emerald-900 dark:text-emerald-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold">Drug License & Standardized Compliance</h4>
                  <p className="mt-0.5">
                    We adhere strictly to Drugs and Cosmetics Act regulations. Every medicine batch is sourced directly from certified C&F distributors with complete GST tax invoices.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src={storeFrontImg}
                alt="Store Front View"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800"
                referrerPolicy="no-referrer"
              />
              <img
                src={heroImg}
                alt="Pharmacy Counter Interior"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 mt-6"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To safeguard community health in Gaya by providing authentic medicines, fair pricing, personalized pharmacist guidance, and prompt local delivery.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To remain the most trusted, accessible, and technologically enabled retail pharmacy in Gaya, bridging traditional care with convenient digital ordering.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Uncompromised Authenticity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Patient Safety & Batch Audit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Ethical Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Owner / Pharmacist Message */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-white/10">
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/30">
                MESSAGE FROM STORE LEADERSHIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "Your Health & Peace of Mind Is Our Highest Duty"
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                "When a customer walks into Raju Medical Hall in Chand Chaura, they are not just buying a strip of tablets — they are seeking relief, health, and trust. That is why we personally inspect supplier invoices, monitor refrigerator temperatures continuously, and ensure our staff provides warm, patient-first advice."
              </p>
              <div className="pt-2 flex items-center space-x-4 border-t border-white/10">
                <div>
                  <p className="text-base font-bold text-emerald-400">Raju Medical Hall Management</p>
                  <p className="text-xs text-slate-400">Chand Chaura, Gaya, Bihar 823001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              15+ Years Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Our Journey Over The Years
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-32 space-y-8">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition"></div>
                
                <span className="hidden sm:block absolute -left-28 top-0 text-sm font-black text-emerald-600 dark:text-emerald-400">
                  {evt.year}
                </span>
                
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1">
                  <span className="sm:hidden inline-block text-xs font-bold text-emerald-600 mb-1">
                    {evt.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{evt.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Have Questions About Your Prescription?</h2>
          <p className="text-xs sm:text-sm text-emerald-100">
            Contact our licensed pharmacist team directly on WhatsApp or call 09431409411 for assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3 bg-white text-emerald-900 font-bold text-xs rounded-xl shadow-md hover:bg-emerald-50 transition"
            >
              Order via WhatsApp
            </button>
            <a
              href="tel:09431409411"
              className="px-6 py-3 bg-emerald-800 text-white font-bold text-xs rounded-xl border border-white/20 transition"
            >
              Call Store 09431409411
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
