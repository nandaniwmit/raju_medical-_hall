export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  category: string;
  dosage: string;
  prescriptionRequired: boolean;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  popularItems: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'devices' | 'surgical' | 'babycare';
  imageUrl: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  author: string;
}
