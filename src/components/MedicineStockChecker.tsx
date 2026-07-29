import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShieldCheck, ShoppingCart, Filter, RefreshCw, Info } from 'lucide-react';
import medicineDataRaw from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderMedicine?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOrderMedicine }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const medicineStock = medicineDataRaw as MedicineItem[];

  const categories = useMemo(() => {
    const set = new Set(medicineStock.map((item) => item.category));
    return ['All', ...Array.from(set)];
  }, [medicineStock]);

  const filteredMedicines = useMemo(() => {
    return medicineStock.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicineStock, searchTerm, selectedCategory, statusFilter]);

  const getStatusBadge = (status: MedicineItem['status'], qty: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300">
            <CheckCircle2 className="w-3 h-3 mr-1 text-green-600" />
            Available ({qty} units)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
            <AlertTriangle className="w-3 h-3 mr-1 text-amber-600" />
            Limited ({qty} left)
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300">
            <XCircle className="w-3 h-3 mr-1 text-red-600" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8 space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-6 bg-[#0A8F6A] rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] dark:text-emerald-400">
              Live Inventory Checker
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Medicine & Product Stock Checker
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Search genuine medicines, health monitors, and baby care stock available at Raju Medical Hall, Gaya.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-950/40 text-[#0A8F6A] dark:text-emerald-300 px-3.5 py-2 rounded-2xl text-xs font-semibold border border-emerald-100 dark:border-emerald-900/60">
          <ShieldCheck className="w-4 h-4 text-[#0A8F6A] shrink-0" />
          <span>Real-Time Counter Sync • 100% Genuine Certified</span>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search Bar */}
        <div className="relative sm:col-span-2 lg:col-span-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search medicine name, brand (e.g. Dolo, Pan 40, Omron)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] focus:bg-white dark:focus:bg-slate-800 outline-none transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Select */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                Category: {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Status Select */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3.5 py-3 text-xs sm:text-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0A8F6A] outline-none transition"
          >
            <option value="All">Status: All</option>
            <option value="Available">In Stock Only</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Count & Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Showing {filteredMedicines.length} items from inventory database</span>
        <span className="hidden sm:inline-block">Prices inclusive of GST</span>
      </div>

      {/* Medicine Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.map((med) => (
          <div
            key={med.id}
            className="group bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl p-5 transition duration-200 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {med.category}
                </span>
                {getStatusBadge(med.status, med.availableQuantity)}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                {med.name}
              </h3>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Brand: {med.brand} • {med.dosage}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                {med.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/50 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">MRP:</span>{' '}
                  <span className="text-base font-bold text-emerald-700 dark:text-emerald-400">
                    ₹{med.mrp}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400">Expiry:</span>{' '}
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{med.expiry}</span>
                </div>
              </div>

              {med.prescriptionRequired && (
                <div className="flex items-center space-x-1 text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-lg">
                  <Info className="w-3.5 h-3.5 shrink-0" />
                  <span>Doctor Prescription Required (Rx)</span>
                </div>
              )}

              <button
                onClick={() => onOrderMedicine && onOrderMedicine(med.name)}
                disabled={med.status === 'Out of Stock'}
                className={`w-full py-2 px-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 transition ${
                  med.status === 'Out of Stock'
                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>
                  {med.status === 'Out of Stock' ? 'Currently Out of Stock' : 'Order via WhatsApp'}
                </span>
              </button>
            </div>
          </div>
        ))}

        {filteredMedicines.length === 0 && (
          <div className="col-span-full py-12 text-center space-y-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <Search className="w-10 h-10 text-slate-400 mx-auto" />
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              No matching medicine found in inventory database
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We stock over 5,000+ unlisted brands at our Chand Chaura store. Please send a quick WhatsApp query or call 09431409411 to check counter stock immediately.
            </p>
            <button
              onClick={() => onOrderMedicine && onOrderMedicine(searchTerm)}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow transition"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Inquire This Item via WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
