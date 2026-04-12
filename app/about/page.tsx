import type { Metadata } from 'next';
import AboutClient from './AboutClient';

const aboutTitle = 'About Our London Longevity Clinic';
const aboutDescription =
  'Learn about UK Longevity Clinic, our London-based clinical team, and our science-led mission to advance preventative and personalised longevity care in the UK.';

/** Public URL path (spaces encoded for reliable OG/Twitter crawlers). */
const aboutOgImagePath = '/assets/Medic-Care-Direct.jpeg';

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  keywords: [
    'about uk longevity clinic',
    'longevity clinic london team',
    'human longevity clinic london',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: '/about',
    type: 'website',
    siteName: 'UK Longevity Clinic',
    locale: 'en_GB',
    images: [
      {
        url: aboutOgImagePath,
        alt: 'UK Longevity Clinic - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: aboutTitle,
    description: aboutDescription,
    images: [aboutOgImagePath],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
