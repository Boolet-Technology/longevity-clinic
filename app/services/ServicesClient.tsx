'use client';

import { motion } from 'framer-motion';
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Heart,
  Leaf,
  ArrowRight,
  Dna,
  Syringe,
  Activity,
  Brain,
  Smile,
  Zap,
  Moon,
  Salad,
} from 'lucide-react';
import Link from 'next/link';
import { hoverCard } from '@/lib/animations';

const serviceCategories = [
  {
    id: 'anti-aging',
    icon: Dna,
    title: 'Anti-Aging & Regenerative',
    description:
      'Cutting-edge treatments designed to reverse the biological clock and restore youthful vitality at the cellular level.',
    image:
      'https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?q=80&w=2070&auto=format&fit=crop',
    alt: 'Anti-aging & regenerative - Longevity clinic in London offering advanced medical treatments',
    services: [
      {
        icon: Dna,
        name: 'Stem Cell Therapy',
        description:
          "Harness your body's own regenerative potential with advanced stem cell treatments.",
      },
      {
        icon: Syringe,
        name: 'NAD+ Infusions',
        description:
          'Boost cellular energy and metabolism with this powerful anti-aging molecule.',
      },
      {
        icon: Activity,
        name: 'Hormone Optimization',
        description:
          'Restore hormonal balance for improved energy, mood, and overall vitality.',
      },
      {
        icon: Brain,
        name: 'Cognitive Enhancement',
        description:
          'Protect and enhance brain function with targeted neuroprotective therapies.',
      },
    ],
  },
  {
    id: 'aesthetic',
    icon: Heart,
    title: 'Aesthetic Treatments',
    description:
      'Refined aesthetic procedures that enhance your natural beauty using the most advanced techniques and technologies.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    alt: 'Aesthetic treatments - Longevity clinic in London offering advanced medical treatments',
    services: [
      {
        icon: Smile,
        name: 'Non-Surgical Facelift',
        description:
          'Achieve a lifted, rejuvenated appearance without surgery using advanced techniques.',
      },
      {
        icon: Sparkles,
        name: 'Skin Rejuvenation',
        description:
          'Advanced laser and light therapies to restore youthful, radiant skin.',
      },
      {
        icon: Zap,
        name: 'Body Contouring',
        description:
          'Sculpt and define your body with non-invasive fat reduction treatments.',
      },
      {
        icon: Heart,
        name: 'Injectable Treatments',
        description:
          'Expert dermal fillers and neuromodulators for natural-looking results.',
      },
    ],
  },
  {
    id: 'lifestyle',
    icon: Leaf,
    title: 'Lifestyle & Prevention',
    description:
      'Comprehensive programs designed to optimize your health and prevent age-related decline before it begins.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Lifestyle & prevention - Longevity clinic in London offering advanced medical treatments',
    services: [
      {
        icon: Salad,
        name: 'Nutrition Optimization',
        description:
          'Personalized nutrition plans based on your unique metabolic profile.',
      },
      {
        icon: Moon,
        name: 'Sleep Enhancement',
        description:
          'Improve sleep quality for better recovery, cognition, and longevity.',
      },
      {
        icon: Activity,
        name: 'Fitness Programming',
        description:
          'Custom exercise protocols designed for optimal healthspan.',
      },
      {
        icon: Brain,
        name: 'Stress Management',
        description:
          'Evidence-based techniques to reduce stress and enhance mental resilience.',
      },
    ],
  },
];

const ServicesClient = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 border border-accent rounded-full" />
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeInUp className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
              World-Class{' '}
              <span className="text-accent italic">
                Longevity Care
              </span>
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              We offer advanced health assessments, personalised wellness programmes, and evidence-informed therapies designed to support metabolic health, immune resilience, and long-term wellbeing.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Regulatory / Important information */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-3xl">
          <FadeInUp className="space-y-6">
            <h2 className="font-heading text-xl md:text-2xl text-foreground">
              Important information
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              All IV nutritional therapies and wellness interventions are delivered following appropriate clinical screening and are intended to support general wellbeing. Individual responses may vary.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Epigenetic and genomic insights are used to inform personalised lifestyle and wellbeing strategies. These tests are not diagnostic and are not intended to replace medical advice from your GP or specialist.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="container mx-auto">
            {/* Category Header */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
              <FadeInUp
                className={
                  categoryIndex % 2 === 1 ? 'lg:order-2' : ''
                }
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full rounded-lg shadow-elegant"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />
                  <div className="absolute top-4 left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp
                delay={0.2}
                className={
                  categoryIndex % 2 === 1 ? 'lg:order-1' : ''
                }
              >
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                  {categoryIndex === 0
                    ? 'Regeneration'
                    : categoryIndex === 1
                      ? 'Beauty'
                      : 'Wellness'}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4 mb-6">
                  {category.title.split(' ')[0]}{' '}
                  <span className="text-accent italic">
                    {category.title.split(' ').slice(1).join(' ')}
                  </span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {category.description}
                </p>
                {/* <Button asChild className="btn-luxury">
                  <Link href="/book">
                    Book Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button> */}
              </FadeInUp>
            </div>

            {/* Services Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service) => (
                <StaggerItem key={service.name}>
                  <motion.div
                    variants={hoverCard()}
                    whileHover="hover"
                    className="bg-card p-6 rounded-lg shadow-card h-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg text-card-foreground mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <FadeInUp className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Ready to Begin?
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-4 mb-6">
              Start Your Longevity{' '}
              <span className="text-accent italic">
                Journey Today
              </span>
            </h2>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed mb-8">
              Schedule a consultation with our specialists to create
              your personalized treatment plan.
            </p>
            {/* <Button asChild className="btn-luxury">
              <Link href="/book">
                Book Your Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button> */}
             <Button asChild className="btn-luxury">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </FadeInUp>
        </div>
      </section>
    </>
  );
};

export default ServicesClient;
