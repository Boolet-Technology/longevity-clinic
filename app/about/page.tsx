import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Our Mission & Excellence',
  description:
    'Learn about the UK Longevity Clinic, our world-renowned physicians, and our commitment to pioneering the future of longevity and regenerative medicine.',
};

export default function AboutPage() {
  return <AboutClient />;
}
