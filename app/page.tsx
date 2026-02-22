import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'UK Longevity Clinic | The Science of a Healthier Life',
  description:
    'Experience the future of health at UK Longevity Clinic. We combine advanced diagnostic testing with personalized longevity protocols to optimize your healthspan.',
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
