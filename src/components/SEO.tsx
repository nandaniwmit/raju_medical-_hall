import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  schema?: object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Raju Medical Hall, Pharmacy in Gaya, Medical Store Chand Chaura, Buy Genuine Medicines Gaya, WhatsApp Medicine Delivery Gaya, Chemist Gaya Bihar, Surgical Store Gaya',
  canonicalUrl = 'https://raju-medical-hall.vercel.app',
  ogType = 'website',
  schema
}) => {
  useEffect(() => {
    // Document Title
    document.title = `${title} | Raju Medical Hall - Gaya, Bihar`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.setAttribute('name', 'keywords');
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute('content', keywords);

    // Open Graph Title & Description
    const setOgMeta = (property: string, content: string) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    };

    setOgMeta('og:title', title);
    setOgMeta('og:description', description);
    setOgMeta('og:type', ogType);
    setOgMeta('og:url', window.location.href);
    setOgMeta('og:site_name', 'Raju Medical Hall');

    // Twitter Cards
    const setTwitterMeta = (name: string, content: string) => {
      let twMeta = document.querySelector(`meta[name="${name}"]`);
      if (!twMeta) {
        twMeta = document.createElement('meta');
        twMeta.setAttribute('name', name);
        document.head.appendChild(twMeta);
      }
      twMeta.setAttribute('content', content);
    };

    setTwitterMeta('twitter:card', 'summary_large_image');
    setTwitterMeta('twitter:title', title);
    setTwitterMeta('twitter:description', description);

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD Schema
    const defaultSchemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Pharmacy',
        'name': 'Raju Medical Hall',
        'image': 'https://raju-medical-hall.vercel.app/logo.png',
        '@id': 'https://raju-medical-hall.vercel.app',
        'url': 'https://raju-medical-hall.vercel.app',
        'telephone': '+919431409411',
        'priceRange': '₹',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Q2J4+67F, Chand Chaura',
          'addressLocality': 'Gaya',
          'addressRegion': 'Bihar',
          'postalCode': '823001',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 24.7818,
          'longitude': 85.0065
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '08:00',
            'closes': '22:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Sunday'],
            'opens': '09:00',
            'closes': '20:00'
          }
        ],
        'sameAs': [
          'https://wa.me/919431409411'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://raju-medical-hall.vercel.app/'
          }
        ]
      }
    ];

    const activeSchema = schema ? [...defaultSchemas, ...schema] : defaultSchemas;

    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(activeSchema);
    document.head.appendChild(script);

    return () => {
      // Clean up dynamic schema if needed
    };
  }, [title, description, keywords, canonicalUrl, ogType, schema]);

  return null;
};
