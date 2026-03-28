import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Longevity Services in London',
  description:
    'Explore UK Longevity Clinic services in London, including epigenetics, preventative health optimisation, and personalised longevity care programmes.',
  keywords: [
    'longevity services london',
    'longevity clinic london services',
    'healthy longevity clinic uk',
    'longevity care clinic',
  ],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
