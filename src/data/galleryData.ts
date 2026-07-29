import { GalleryItem } from '../types';

import heroImg from '../assets/images/pharmacy_hero_banner_1785310513243.jpg';
import storeFrontImg from '../assets/images/pharmacy_store_front_1785310530410.jpg';

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Raju Medical Hall Store Front View',
    category: 'store',
    imageUrl: storeFrontImg,
    description: 'Prominent, welcoming storefront located conveniently at Chand Chaura, Gaya.'
  },
  {
    id: 'gal-02',
    title: 'Modern Pharmacy Interior & Counter',
    category: 'store',
    imageUrl: heroImg,
    description: 'Organized prescription counters and digital billing desks for quick customer service.'
  },
  {
    id: 'gal-03',
    title: 'Temperature Controlled Medicine Storage',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
    description: 'Dedicated pharmaceutical refrigeration unit ensuring cold-chain integrity for insulins and vaccines.'
  },
  {
    id: 'gal-04',
    title: 'Digital Health Devices & Diagnostic Station',
    category: 'devices',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    description: 'Clinically tested blood pressure monitors, pulse oximeters, and glucometers display.'
  },
  {
    id: 'gal-05',
    title: 'Complete Infant Care & Pediatric Section',
    category: 'babycare',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1000&auto=format&fit=crop',
    description: 'Range of baby skincare, diapers, infant formulas, and mother care essentials.'
  },
  {
    id: 'gal-06',
    title: 'Surgical & Emergency Medical Supplies Shelf',
    category: 'surgical',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1000&auto=format&fit=crop',
    description: 'Sterile surgical bandages, nebulizers, gloves, and patient care equipment.'
  },
  {
    id: 'gal-07',
    title: 'Multi-Vitamin & Health Supplements Rack',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000&auto=format&fit=crop',
    description: 'Comprehensive stock of immunity supplements, protein, and dietary minerals.'
  },
  {
    id: 'gal-08',
    title: 'Licensed Pharmacist Dispensing Care',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop',
    description: 'Our experienced staff reviewing prescription dosages and advising patients.'
  }
];
