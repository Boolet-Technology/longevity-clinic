
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Leaf } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    icon: Sparkles,
    title: "Anti-Aging & Regenerative",
    description: "Cutting-edge treatments that reverse the signs of aging at a cellular level. Stem cell therapies, NAD+ infusions, and personalized regenerative protocols.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auhref=format&fit=crop",
    link: "/services#anti-aging",
  },
  {
    icon: Heart,
    title: "Aesthetic Treatments",
    description: "Refined aesthetic procedures that enhance your natural beauty. Non-surgical facelifts, skin rejuvenation, and body contouring by expert practitioners.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auhref=format&fit=crop",
    link: "/services#aesthetic",
  },
  {
    icon: Leaf,
    title: "Lifestyle & Prevention",
    description: "Comprehensive lifestyle optimization programs. Nutrition counseling, stress management, sleep optimization, and preventive health screenings.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auhref=format&fit=crop",
    link: "/services#lifestyle",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Exceptional Care,{" "}
            <span className="text-accent italic">Exceptional Results</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground font-body leading-relaxed">
            We offer a comprehensive suite of longevity services designed to help you 
            live longer, healthier, and more vibrantly.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-accent text-sm font-medium hover:gap-3 gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
