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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'UK Longevity Clinic | The Science of a Healthier Life',
    template: '%s | UK Longevity Clinic',
  },
  description:
    "UK Longevity Clinic - The UK's premier longevity clinic. Where science meets luxury. Advanced diagnostics and personalized longevity protocols.",
  keywords: [
    'Longevity',
    'Anti-aging',
    'Wellness Clinic',
    'UK Health',
    'Biohacking',
    'Precision Medicine',
  ],
  authors: [{ name: 'UK Longevity Clinic' }],
  creator: 'UK Longevity Clinic',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'UK Longevity Clinic',
    title: 'UK Longevity Clinic | The Science of a Healthier Life',
    description:
      'Advanced diagnostics and personalized longevity protocols. Where science meets luxury.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Longevity Clinic | The Science of a Healthier Life',
    description:
      'Advanced diagnostics and personalized longevity protocols. Where science meets luxury.',
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
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
