'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/AnimatedSection';
import { revealImage } from '@/lib/animations';

import { services } from '@/data/data';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Exceptional Care,{' '}
            <span className="text-accent italic">
              Exceptional Results
            </span>
          </h2>
          <div className="divider-gold mb-6" />

          <p className="text-muted-foreground font-body leading-relaxed">
            We offer a comprehensive suite of longevity services
            designed to help you live longer, healthier, and more
            vibrantly.
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
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  variants={revealImage}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </motion.div>

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
