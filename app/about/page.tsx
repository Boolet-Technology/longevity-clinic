import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Our London Longevity Clinic',
  description:
    'Learn about UK Longevity Clinic, our London-based clinical team, and our science-led mission to advance preventative and personalised longevity care in the UK.',
  keywords: [
    'about uk longevity clinic',
    'longevity clinic london team',
    'human longevity clinic london',
  ],
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
