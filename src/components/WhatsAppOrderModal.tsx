import React, { useState } from 'react';
import { X, Send, Phone, Upload, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine || '',
    hasPrescription: 'Yes',
    prescriptionFile: null as File | null,
    deliveryTime: 'Immediate (Within 1 Hour)',
    message: ''
  });

  const [fileName, setFileName] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, prescriptionFile: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Raju Medical Hall,
Medicine Order Request

Customer Name: ${formData.name || 'N/A'}
Phone Number: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Delivery Address: ${formData.address || 'Chand Chaura / Gaya Local Pickup'}
Medicine Required: ${formData.medicineName || 'Attached in Prescription'}
Prescription Available: ${formData.hasPrescription} ${fileName ? `(${fileName})` : ''}
Preferred Delivery Time: ${formData.deliveryTime}
Additional Notes: ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919431409411?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-lg overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/10 rounded-xl">
              <FileText className="w-6 h-6 text-emerald-100" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Quick WhatsApp Medicine Order</h3>
              <p className="text-emerald-100 text-xs mt-0.5">
                Send doctor prescription or medicine list directly to Raju Medical Hall
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-slate-800 dark:text-slate-100">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit Mobile No."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Optional email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
              Medicine Required / Brand Name
            </label>
            <input
              type="text"
              placeholder="e.g. Dolo 650, Pan 40, Insulin Lantus"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
              Delivery / Pickup Address <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              placeholder="Street name, landmark in Chand Chaura, Gaya or surrounding area"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Prescription Available?
              </label>
              <select
                value={formData.hasPrescription}
                onChange={(e) => setFormData({ ...formData, hasPrescription: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              >
                <option value="Yes">Yes (Have Doctor Prescription)</option>
                <option value="No">No (OTC Medicine / General Store)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.deliveryTime}
                onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              >
                <option value="Immediate (Within 1 Hour)">Immediate (Within 1 Hour)</option>
                <option value="Same Day Evening">Same Day Evening</option>
                <option value="Store Self-Pickup">Store Counter Pickup</option>
              </select>
            </div>
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
              Upload Prescription Image / PDF
            </label>
            <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 rounded-xl p-3 text-center transition bg-slate-50 dark:bg-slate-800/50">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex items-center justify-center space-x-2 text-slate-600 dark:text-slate-300 text-xs">
                <Upload className="w-4 h-4 text-emerald-600" />
                <span>
                  {fileName ? (
                    <strong className="text-emerald-700 dark:text-emerald-400 font-medium">Selected: {fileName}</strong>
                  ) : (
                    'Click or Drag & Drop prescription photo here'
                  )}
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1">
              Message / Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Need 2 strips, please call before arriving"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Order via WhatsApp
            </button>
            <a
              href="tel:09431409411"
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition"
            >
              <Phone className="w-4 h-4 mr-2 text-emerald-600" />
              Call Store
            </a>
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-slate-500 dark:text-slate-400 text-xs pt-1">
            <AlertCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Prescription medicines are verified by licensed pharmacist before dispatch.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
