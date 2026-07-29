import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageCircle, Mail, Clock, Send, 
  ExternalLink, CheckCircle2, ShieldCheck, HelpCircle, Navigation
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        email: '',
        subject: 'General Question',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SEO
        title="Contact Us & Store Location | Raju Medical Hall Gaya"
        description="Get store address, phone number, working hours, and Google Map directions for Raju Medical Hall, Q2J4+67F, Chand Chaura, Gaya, Bihar 823001. Call 09431409411."
        keywords="Contact Raju Medical Hall, Phone Number Chemist Gaya, Address Chand Chaura Pharmacy, Google Map Raju Medical Hall Gaya"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">Contact & Store Location</h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are located in Chand Chaura, Gaya. Call us, send a WhatsApp message, or drop by our pharmacy counter.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Store Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
                
                <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                  Business Details
                </h2>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Store Address</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        Q2J4+67F, Chand Chaura, Gaya, Bihar 823001
                        <br />
                        (Near Vishnupad Temple Precinct)
                      </p>
                      <a
                        href="https://maps.google.com/?q=Raju+Medical+Hall+Chand+Chaura+Gaya+Bihar+823001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                      >
                        <Navigation className="w-3.5 h-3.5 mr-1" />
                        Open in Google Maps App
                      </a>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Phone & WhatsApp Hotline</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        Phone: <a href="tel:09431409411" className="font-bold text-slate-800 dark:text-slate-100 underline">09431409411</a>
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        WhatsApp: <span className="font-bold text-emerald-600">09431409411</span>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Store Working Hours</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        Monday - Saturday: <strong>8:00 AM - 10:00 PM</strong>
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Sunday: <strong>9:00 AM - 8:00 PM</strong>
                      </p>
                      <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Emergency Night Prescription Calls Supported
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Order</span>
                  </button>
                  <a
                    href="tel:09431409411"
                    className="py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow transition flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Store</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
                
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Direct Message</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out the form below to inquire about prescription availability, surgical items, or general medicine pricing.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-2xl space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                    <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Message Sent Successfully!</h3>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300">
                      Thank you {formState.name}. Our pharmacist team at Chand Chaura will review your inquiry and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit phone number"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Optional email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
                      >
                        <option value="General Question">General Question</option>
                        <option value="Prescription Medicine Stock">Prescription Medicine Stock Check</option>
                        <option value="Surgical / Device Bulk Requirement">Surgical / Device Bulk Requirement</option>
                        <option value="Home Delivery Inquiry">Home Delivery Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Message / Medicine Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write details of medicine or question here..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Find Us On Google Maps</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Chand Chaura, Gaya, Bihar 823001
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Raju+Medical+Hall+Chand+Chaura+Gaya+Bihar+823001"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Get Live Directions</span>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg h-96">
            <iframe
              title="Raju Medical Hall Gaya Full Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123!2d85.0065!3d24.7818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a68e826b5e1%3A0x2a048a60cfb3f9!2sChand%20Chaura%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};
