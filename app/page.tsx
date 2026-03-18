import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'UK Longevity Clinic | The Science of a Healthier Life',
  description:
  'Leading longevity clinic in London offering IV therapy, advanced diagnostics, and personalised anti-aging treatments. Book your consultation today.',
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
