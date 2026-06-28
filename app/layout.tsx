import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { LenisProvider } from '@/providers/LenisProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { physicianSchema, localBusinessSchema } from '@/lib/schema';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Ch. Pritam Pratik Praharaj | Implantologist & Root Canal Specialist | Salipur, Odisha',
  description:
    'Dr. Ch. Pritam Pratik Praharaj — BDS (Utkal), Certified Implantologist & Root Canal Specialist at Choudhury Dental & Skin Care Clinic, Salipur, Odisha. 15+ years of advanced, pain-free dental care. Book your appointment today.',
  keywords: [
    'Dr. Pritam Pratik Praharaj',
    'Dental Implantologist Salipur',
    'Root Canal Specialist Odisha',
    'Choudhury Dental Clinic',
    'Best Dentist Salipur',
    'Dental Implants Odisha',
    'RCT Specialist',
    'Pain-Free Dentistry',
  ],
  authors: [{ name: 'Dr. Ch. Pritam Pratik Praharaj' }],
  creator: 'Dr. Ch. Pritam Pratik Praharaj',
  metadataBase: new URL('https://drpritampraharaj.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drpritampraharaj.com',
    siteName: 'Dr. Ch. Pritam Pratik Praharaj — Dental Specialist',
    title: 'Dr. Ch. Pritam Pratik Praharaj | Implantologist & Root Canal Specialist',
    description:
      '15+ years of advanced, pain-free dental care at Choudhury Dental & Skin Care Clinic, Salipur, Odisha. Book your appointment today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Ch. Pritam Pratik Praharaj — Dental Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ch. Pritam Pratik Praharaj | Implantologist & Root Canal Specialist',
    description:
      '15+ years of advanced, pain-free dental care at Choudhury Dental & Skin Care Clinic, Salipur, Odisha.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://drpritampraharaj.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="overflow-x-hidden font-sans antialiased text-slate-900 bg-white">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
