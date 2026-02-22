import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch',
  description:
    'Have questions about our longevity treatments? Contact the UK Longevity Clinic today. Our team is here to help you on your journey to optimal health.',
};

export default function ContactPage() {
  return <ContactClient />;
}
