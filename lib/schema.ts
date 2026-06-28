export const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Ch. Pritam Pratik Praharaj',
  jobTitle: 'Implantologist & Root Canal Specialist',
  description:
    'Dr. Ch. Pritam Pratik Praharaj is a BDS (Utkal) graduate with 15+ years of experience in dental implantology and root canal therapy. Practicing at Choudhury Dental & Skin Care Clinic, Salipur, Odisha.',
  url: 'https://drpritampraharaj.com',
  telephone: '+91-XXXXXXXXXX',
  email: 'contact@drpritampraharaj.com',
  image: 'https://drpritampraharaj.com/doctor-photo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Road, Salipur',
    addressLocality: 'Cuttack',
    addressRegion: 'Odisha',
    postalCode: '754202',
    addressCountry: 'IN',
  },
  medicalSpecialty: [
    {
      '@type': 'MedicalSpecialty',
      name: 'Dental Implantology',
    },
    {
      '@type': 'MedicalSpecialty',
      name: 'Endodontics',
    },
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Utkal University',
  },
  credential: 'BDS (Utkal), Regd. No. 1477(A) — Odisha State Dental Council',
  memberOf: {
    '@type': 'Organization',
    name: 'Indian Dental Association (IDA)',
  },
  knowsAbout: [
    'Dental Implants',
    'Root Canal Treatment',
    'Crowns and Bridges',
    'Teeth Whitening',
    'Pain-Free Dentistry',
  ],
  sameAs: [
    'https://facebook.com/drpritampraharaj',
    'https://instagram.com/drpritampraharaj',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Choudhury Dental & Skin Care Clinic',
  description:
    'Choudhury Dental & Skin Care Clinic in Salipur, Odisha offers advanced dental implants, root canal therapy, cosmetic dentistry, and comprehensive oral care. Led by Dr. Ch. Pritam Pratik Praharaj.',
  url: 'https://drpritampraharaj.com',
  telephone: '+91-XXXXXXXXXX',
  email: 'contact@drpritampraharaj.com',
  image: 'https://drpritampraharaj.com/clinic-photo.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Road, Salipur',
    addressLocality: 'Cuttack',
    addressRegion: 'Odisha',
    postalCode: '754202',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '20.5500',
    longitude: '86.3500',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, UPI, Digital Wallet',
  areaServed: {
    '@type': 'Place',
    name: 'Salipur, Cuttack, Odisha, India',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
  },
};
