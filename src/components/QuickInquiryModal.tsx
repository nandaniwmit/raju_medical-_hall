import React, { useState } from 'react';
import { X, Send, PhoneCall, CheckCircle } from 'lucide-react';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-md overflow-hidden relative p-6 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Inquiry Received!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Thank you {formData.name}. Raju Medical Hall team will contact you shortly at {formData.phone}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2 text-emerald-600 font-semibold text-lg">
              <PhoneCall className="w-5 h-5" />
              <span>Quick Medical Inquiry</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Have a question about medicine stock, prices, or healthcare items in Gaya? Send us a quick note.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                Inquiry Topic
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Medicine Availability">Medicine Availability Check</option>
                <option value="Medical Device Purchase">Medical Device Purchase</option>
                <option value="Surgical / Clinic Bulk Supply">Surgical / Clinic Bulk Supply</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                Message / Details
              </label>
              <textarea
                rows={3}
                placeholder="Write your question..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
