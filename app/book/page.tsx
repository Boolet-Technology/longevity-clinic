import type { Metadata } from 'next';
import BookClient from './BookClient';

export const metadata: Metadata = {
  title: 'Book an Appointment | Start Your Journey',
  description:
    'Schedule your consultation with the UK Longevity Clinic. Take the first step towards a longer, healthier, and more vibrant life with our personalized longevity protocols.',
};

import { redirect } from 'next/navigation';

export default function BookPage() {
  redirect('/contact');
}
