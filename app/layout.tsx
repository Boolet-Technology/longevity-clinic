import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import SmoothScroll from '@/components/SmoothScroll';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  'https://uklongevityclinic.co.uk';

const clinicStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${baseUrl}/#medicalclinic`,
  name: 'UK Longevity Clinic',
  url: baseUrl,
  image: `${baseUrl}/opengraph-image.png`,
  description:
    'UK Longevity Clinic is a science-led longevity clinic in London offering preventative medicine, diagnostics, and personalised health optimisation programmes.',
  telephone: '+44 20 3773 0111',
  email: 'info@uklongevityclinic.co.uk',
  areaServed: ['London', 'United Kingdom'],
  medicalSpecialty: [
    'Preventive Medicine',
    'Functional Medicine',
    'Anti-Aging Medicine',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '1 Harley Street',
      addressLocality: 'London',
      postalCode: 'W1G 6AX',
      addressCountry: 'GB',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '62 Station Road, North Harrow',
      addressLocality: 'London',
      postalCode: 'HA2 7SJ',
      addressCountry: 'GB',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'UK Longevity Clinic London | Human Longevity Clinic UK',
    template: '%s | UK Longevity Clinic',
  },
  description:
    'Leading longevity clinic in London, UK delivering personalised preventative medicine, diagnostics, and evidence-led health optimisation programmes.',
  keywords: [
    'uk longevity clinic',
    'longevity clinic uk',
    'longevity clinic london',
    'london longevity clinic',
    'human longevity clinic london',
    'longevity wellness clinic',
    'healthy longevity clinic',
    'longevity care clinic',
    'preventative medicine clinic london',
    'precision medicine clinic uk',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'UK Longevity Clinic' }],
  creator: 'UK Longevity Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'UK Longevity Clinic',
    title: 'UK Longevity Clinic London | Human Longevity Clinic UK',
    description:
      'A leading longevity clinic in London for personalised diagnostics, preventative care, and healthy ageing programmes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Longevity Clinic London | Human Longevity Clinic UK',
    description:
      'A leading longevity clinic in London for personalised diagnostics, preventative care, and healthy ageing programmes.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(clinicStructuredData),
          }}
        />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
