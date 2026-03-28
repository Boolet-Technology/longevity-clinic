import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Longevity Clinic London | UK Longevity Clinic',
  description:
    'UK Longevity Clinic is a leading longevity clinic in London, UK offering preventative medicine, diagnostics, and personalised healthy ageing programmes.',
  keywords: [
    'uk longevity clinic',
    'longevity clinic london',
    'london longevity clinic',
    'human longevity clinic london',
    'longevity clinic uk',
    'longevity wellness clinic',
  ],
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
