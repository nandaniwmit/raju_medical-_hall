import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, MapPin, ShieldCheck, Clock, Award, 
  ArrowRight, CheckCircle2, Search, Heart, Star, ChevronDown, 
  ChevronUp, Mail, Sparkles, AlertCircle, ShoppingCart, UserCheck, Snowflake
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { faqsData } from '../data/faqsData';
import { healthTipsData } from '../data/healthTipsData';
import { reviewsData } from '../data/reviewsData';
import heroImg from '../assets/images/pharmacy_hero_banner_1785310513243.jpg';
import storeFrontImg from '../assets/images/pharmacy_store_front_1785310530410.jpg';

interface HomeProps {
  onOpenWhatsAppModal: (prefilledMed?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0].id);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredServices = servicesData.slice(0, 6);
  const previewFaqs = faqsData.slice(0, 4);
  const previewTips = healthTipsData.slice(0, 3);
  const previewReviews = reviewsData.slice(0, 3);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEO
        title="Raju Medical Hall | Genuine Medicines & Healthcare Store in Gaya"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Chand Chaura, Gaya, Bihar."
        keywords="Raju Medical Hall, Pharmacy Chand Chaura Gaya, Chemist Gaya Bihar, Genuine Medicine Store Gaya, WhatsApp Medicine Delivery Gaya"
      />

      {/* Hero Banner Section */}
      <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Hero Left Main Vibrant Card */}
          <div className="lg:col-span-7 bg-[#0A8F6A] rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-center min-h-[360px] shadow-2xl">
            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-50">
                Licensed & Certified Pharmacy
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight">
                Genuine Medicines for a Healthier You.
              </h1>

              <p className="text-emerald-50 text-sm sm:text-base opacity-95 leading-relaxed">
                Providing surgical supplies, cold-chain insulin storage, baby care, and daily medical essentials at the best prices in Chand Chaura, Gaya.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="tel:09431409411"
                  className="bg-white text-[#0A8F6A] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-xl hover:bg-emerald-50 transition transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 fill-[#0A8F6A] text-[#0A8F6A]" />
                  <span>Call 09431409411</span>
                </a>

                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="bg-emerald-800/40 backdrop-blur-md border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-800/60 transition"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-200" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-100/90 border-t border-white/15">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-white" /> 100% Genuine Batch
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-white" /> Licensed Pharmacist
                </span>
                <span className="flex items-center gap-1.5">
                  <Snowflake className="w-4 h-4 text-white" /> Cold Chain Storage
                </span>
              </div>
            </div>

            <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Hero Right Visual Storefront Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-[2rem] p-4 border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72">
              <img
                src={storeFrontImg}
                alt="Raju Medical Hall Counter"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              <span className="absolute top-3 right-3 px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                STORE OPEN
              </span>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h2 className="text-base font-bold">Raju Medical Hall</h2>
                <p className="text-xs text-slate-300">Q2J4+67F, Chand Chaura, Gaya, Bihar 823001</p>
              </div>
            </div>

            <div className="p-3 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Working Hours</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">08:00 AM - 10:00 PM</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Emergency Call</span>
                <a href="tel:09431409411" className="font-bold text-[#0A8F6A] dark:text-emerald-400 underline">
                  09431409411
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Short About Preview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                <img
                  src={heroImg}
                  alt="About Raju Medical Hall"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center space-x-3 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl">
                <Award className="w-8 h-8 text-emerald-200" />
                <div>
                  <p className="text-xl font-bold">15+ Years</p>
                  <p className="text-xs text-emerald-100">Serving Gaya Community</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                About Our Pharmacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Trusted Healthcare Partner in Chand Chaura, Gaya
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Raju Medical Hall has been a cornerstone of authentic pharmaceutical care in Chand Chaura, Gaya for over 15 years. Located right in the heart of Gaya near the historic Vishnupad precinct, we stock a complete line of 100% genuine prescription medicines, chronic disease care, surgical dressings, and baby nutrition.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-200 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Chemist</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cold Chain Insulin Facility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Doctor Prescription Audit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Fast Order</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold hover:bg-emerald-600 transition"
                >
                  <span>Read Full Business Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview (Maximum 6) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Comprehensive Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Featured Healthcare Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Explore our core categories ranging from prescription medications to pediatric nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300 font-semibold text-xs transition text-center"
                  >
                    Inquire Category via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition"
            >
              <span>View All Category Services & Stock</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Our Core Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Why Gaya Families Trust Raju Medical Hall
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct procurement from certified pharmaceutical distributor channels ensures zero risk of counterfeit drugs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <UserCheck className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Registered Pharmacist Guidance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Qualified pharmacists check doctor prescriptions, verify tablet dosages, and answer usage questions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <Snowflake className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Cold Chain Storage</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated power-backed refrigeration preserves insulins, eye drops, and vaccines at strict 2°C-8°C.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">WhatsApp Order & Delivery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Send prescription photo on WhatsApp for fast pickup or local home delivery across Chand Chaura & Gaya city.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <Award className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Transparent Fair Pricing</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Clear printed GST invoices with printed MRP and batch details. No hidden extra charges.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Emergency Call Support</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Fast emergency telephone helpline available at 09431409411 for urgent night prescription medicines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stock Shortcut Preview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold">
                EXCLUSIVE FEATURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Check Medicine Stock Live Online</h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Looking for Dolo 650, Pan 40, Accu-Chek Strips, or Omron BP Monitors? Use our online Medicine Stock Checker to verify availability instantly before visiting!
              </p>
            </div>
            <div>
              <Link
                to="/services#stock-checker"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg transition"
              >
                <Search className="w-4 h-4" />
                <span>Launch Medicine Stock Checker</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Local Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              What Gaya Patrons Say
            </h2>
            <div className="flex items-center justify-center space-x-1 mt-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-slate-600 dark:text-slate-300 ml-2 font-bold">4.9 / 5.0 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{rev.author}</h3>
                    <p className="text-[11px] text-slate-500">{rev.location}</p>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-md font-semibold">
                    Verified Customer
                  </span>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between space-x-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  <span>{faq.question}</span>
                  {openFaqId === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqId === faq.id && (
                  <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services#faqs"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center"
            >
              Have more questions? View full FAQ section <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Health Tips Preview */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Health Awareness
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Latest Health & Medicine Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                    {tip.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3">
                    {tip.summary}
                  </p>
                </div>
                <div className="pt-3 text-[11px] text-slate-400 border-t border-slate-200/60 dark:border-slate-700">
                  <span>{tip.date} • {tip.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Mail className="w-8 h-8 text-emerald-400 mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold">Stay Updated with Health Alerts & Medicine Stock</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Subscribe to receive health seasonal tips and stock notifications from Raju Medical Hall, Gaya.
          </p>

          {subscribed ? (
            <div className="p-3 bg-emerald-900/60 text-emerald-300 rounded-xl text-xs font-semibold max-w-sm mx-auto">
              ✓ Thank you for subscribing to Raju Medical Hall updates!
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-xl transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">Need Genuine Medicines Delivered in Gaya?</h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Click below to send your prescription photo on WhatsApp or call our Chand Chaura counter directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-6 py-3.5 bg-white text-emerald-900 font-bold text-sm rounded-xl shadow-lg hover:bg-emerald-50 transition"
            >
              Order via WhatsApp (09431409411)
            </button>
            <a
              href="tel:09431409411"
              className="px-6 py-3.5 bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl border border-white/20 transition"
            >
              Call Counter 09431409411
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
