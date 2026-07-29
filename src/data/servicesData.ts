import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'service-prescription',
    title: 'Prescription Medicines & Batch Verification',
    category: 'Prescription Medicines',
    iconName: 'Pill',
    shortDescription: '100% authentic prescription medicines directly sourced from authorized WHO-GMP certified pharmaceutical distributors.',
    fullDescription: 'At Raju Medical Hall, we prioritize safety and efficacy above all else. Every prescription drug is subjected to batch verification, barcode validation, and temperature-controlled storage. Our qualified pharmacists in Chand Chaura review your prescription to ensure accurate dosage and zero counter-medication risk.',
    features: [
      '100% Genuine Certified Drugs',
      'Qualified Pharmacist Guidance',
      'Cold Chain Maintenance for Biologics & Insulins',
      'Transparent Batch Number & Expiry Printed Invoices'
    ],
    popularItems: ['Dolo 650', 'Pan 40', 'Telma 40', 'Glycomet 500', 'Augmentin 625', 'Lantus Pen']
  },
  {
    id: 'service-otc',
    title: 'OTC Medicines & First Aid Essentials',
    category: 'OTC Medicines',
    iconName: 'Bandage',
    shortDescription: 'Quick access to trusted over-the-counter remedies for cold, cough, digestive care, pain relief, and emergency first-aid.',
    fullDescription: 'From seasonal allergies to minor cuts and headaches, our inventory includes top national OTC brands. Get immediate advice on safe usage, active ingredients, and appropriate dosages for common ailments without waiting in long queues.',
    features: [
      'Instant Local Availability in Chand Chaura',
      'Complete First-Aid Bandages, Antiseptics & Sprays',
      'Digestive, Antacid & Electrolyte Remedies',
      'Cost-Effective Affordable Pricing'
    ],
    popularItems: ['Electral ORS', 'Vicks Vaporub', 'Combiflam', 'Gelusil MPS', 'Betadine Ointment']
  },
  {
    id: 'service-devices',
    title: 'Health Monitors & Diagnostic Devices',
    category: 'Health Devices',
    iconName: 'Activity',
    shortDescription: 'Precision digital BP monitors, glucometers, pulse oximeters, and digital thermometers for home health tracking.',
    fullDescription: 'Empower your home healthcare with clinically validated medical devices from top manufacturers like Omron, Accu-Chek, and Dr. Trust. We provide live demonstration of device usage and battery installation at our counter.',
    features: [
      'Official Manufacturer Warranty',
      'Free On-Site Usage Guidance & Calibration Check',
      'Replacement Strips & Accessories Always In Stock',
      'Delivered Safe & Calibrated'
    ],
    popularItems: ['Omron BP Monitor', 'Accu-Chek Test Strips', 'Fingertip Pulse Oximeter', 'Digital Thermometer']
  },
  {
    id: 'service-surgical',
    title: 'Medical Equipment & Surgical Supplies',
    category: 'Medical Equipment',
    iconName: 'Stethoscope',
    shortDescription: 'Compressor nebulizers, oxygen cannulas, surgical dressings, syringes, catheters, and mobility aids.',
    fullDescription: 'Supporting home patient recovery and local clinical needs in Gaya with reliable hospital-grade surgical items, sterile dressings, suction catheters, nebulizers, and orthopedic support braces.',
    features: [
      'Sterile & Sealed Packaging Assurance',
      'Complete Respiratory & Asthma Care Supplies',
      'Bulk Supply Discounts for Local Clinics & Caregivers',
      'Orthopedic Knee Braces, Lumbar Belts & Walking Canes'
    ],
    popularItems: ['Compressor Nebulizer', 'Steam Inhaler', 'Sterile Gauze Roll', 'Micropore Tape', 'Walker & Canes']
  },
  {
    id: 'service-babycare',
    title: 'Baby Care & Mother Care Products',
    category: 'Baby Care',
    iconName: 'HeartHandshake',
    shortDescription: 'Gentle baby skincare, pediatric nutrition formulas, diapers, wipes, and post-natal care essentials.',
    fullDescription: 'Caring for your newborn and young children with dermatologically tested baby products. We stock leading infant formulas, organic baby wipes, rash creams, and mother nutrition supplements.',
    features: [
      'Hypoallergenic Skincare Lines',
      'Top Brands: Pampers, Himalaya Baby, Johnson & Johnson, Lactogen',
      'Post-Natal Nutritional Drinks for Mothers',
      'Feeding Bottles, Sterilizers & Soothers'
    ],
    popularItems: ['Pampers Diapers', 'Himalaya Baby Lotion', 'Lactogen 1/2', 'Sebamed Baby Cream', 'Mother’s Horlicks']
  },
  {
    id: 'service-supplements',
    title: 'Health Supplements, Vitamins & Protein',
    category: 'Supplements',
    iconName: 'ShieldPlus',
    shortDescription: 'Multivitamins, calcium boosters, iron syrups, protein powders, and herbal wellness drinks.',
    fullDescription: 'Boost daily immunity and support chronic illness recovery with verified nutritional supplements. We offer age-specific formulations for elderly bone health, adult stamina, and childhood growth.',
    features: [
      'FSSAI & Drug License Approved Brands',
      'Senior Citizen Bone & Joint Health Formulas',
      'Anemia Management Syrups & Iron Tonics',
      'Diabetic Friendly Sugar-Free Supplements'
    ],
    popularItems: ['Becosules Z', 'Dexorange Syrup', 'Revital H', 'Ensure Powder', 'Shelcal 500']
  }
];
