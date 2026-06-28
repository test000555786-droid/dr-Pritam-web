import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ch. Pritam Pratik Praharaj | Implantologist & Root Canal Specialist – Salipur, Odisha",
  description:
    "Expert dental care in Salipur, Odisha. Dr. Pritam Praharaj (BDS Utkal, Regd. 1477A) specialises in Dental Implants, Root Canal Treatment, Crowns, Orthodontics and more. Book your appointment today.",
  keywords: [
    "Dentist Salipur", "Implantologist Odisha", "Root Canal Specialist Cuttack",
    "Dental Implants Odisha", "Choudhury Dental Clinic", "Best Dentist Kendrapada",
  ],
  openGraph: {
    title: "Dr. Ch. Pritam Pratik Praharaj | Implantologist & Root Canal Specialist",
    description:
      "15+ years of expert dental care. Dental Implants · Root Canal Treatment · Cosmetic Dentistry — Choudhury Dental & Skin Care Clinic, Salipur, Odisha.",
    url: "https://choudhuryclinic.com",
    siteName: "Choudhury Dental & Skin Care Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ch. Pritam Pratik Praharaj | Dentist, Salipur Odisha",
    description: "Book your dental appointment with a certified Implantologist & RCT Specialist.",
  },
  alternates: {
    canonical: "https://choudhuryclinic.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://choudhuryclinic.com/#physician",
      name: "Dr. Ch. Pritam Pratik Praharaj",
      description:
        "Certified Implantologist and Root Canal Specialist practicing at Choudhury Dental & Skin Care Clinic, Salipur, Odisha.",
      medicalSpecialty: ["Dentistry", "Implantology", "Endodontics"],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "BDS", recognizedBy: { "@type": "CollegeOrUniversity", name: "Utkal University" } },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Implantologist" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "registration", name: "Regd. No. 1477(A)" },
      ],
      worksFor: { "@id": "https://choudhuryclinic.com/#clinic" },
      email: "info@choudhuryclinic.com",
    },
    {
      "@type": ["Dentist", "LocalBusiness"],
      "@id": "https://choudhuryclinic.com/#clinic",
      name: "Choudhury Dental & Skin Care Clinic",
      description: "Multi-speciality dental clinic offering Implants, RCT, Crowns, Whitening, Orthodontics and more in Salipur, Odisha.",
      url: "https://choudhuryclinic.com",
      telephone: "+91-XXXXXXXXXX",
      email: "info@choudhuryclinic.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kendrapada - Cuttack Rd",
        addressLocality: "Salipur",
        addressRegion: "Odisha",
        postalCode: "754202",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "09:00", closes: "20:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "14:00" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200" },
      priceRange: "₹₹",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
