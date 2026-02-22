import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Premium Longevity Services',
  description:
    'Explore our range of advanced longevity treatments, including stem cell therapy, NAD+ infusions, and personalized hormone optimization.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
