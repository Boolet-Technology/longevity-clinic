import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Our Longevity Clinic in London',
  description:
    'Contact UK Longevity Clinic in London and North Harrow to book a consultation for personalised longevity and preventative health programmes.',
  keywords: [
    'contact longevity clinic london',
    'london longevity clinic contact',
    'uk longevity clinic harley street',
  ],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
