'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FadeInUp,
  FoldInTitle,
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
  TrendingUp,
  ScanEye,
} from 'lucide-react';
import Link from 'next/link';
import { hoverCard } from '@/lib/animations';

const serviceCategories = [
  {
    id: 'epigenetics',
    eyebrow: 'Science',
    icon: Dna,
    title: 'Epigenetics & Longevity Intelligence',
    description:
      'Understand your biology. Redefine your future. Move beyond surface-level health.',
    bodyParagraphs: [
      'Our Epigenetics Testing service provides a deep, real-time understanding of how your lifestyle, environment, and behaviours are influencing your genes - allowing us to design truly personalised longevity strategies.',
      'This is where science meets precision living.',
      'Unlike traditional health checks, this is not about reacting to illness - it’s about staying ahead of it.',
      'Best suited for: Individuals seeking clarity, performance optimisation, and long-term health control.',
    ],
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
    alt: 'Epigenetics and longevity intelligence - UK Longevity Clinic London',
    services: [
      {
        icon: Dna,
        name: 'Epigenetic testing & biological age',
        description:
          'Advanced epigenetic testing and biological age analysis to map how your biology is responding to life today.',
      },
      {
        icon: TrendingUp,
        name: 'Longevity & performance insights',
        description:
          'Personalised longevity and performance insights grounded in your unique epigenetic profile.',
      },
      {
        icon: ScanEye,
        name: 'Early imbalance detection',
        description:
          'Early detection of imbalance before symptoms appear, so interventions can be proactive, not reactive.',
      },
      {
        icon: Salad,
        name: 'Tailored lifestyle protocols',
        description:
          'Tailored nutrition, lifestyle, and recovery protocols aligned with your data and goals.',
      },
    ],
  },
  {
    id: 'anti-aging',
    eyebrow: 'Regeneration',
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
    eyebrow: 'Beauty',
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
    eyebrow: 'Wellness',
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
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, '');
    if (!id) return;
    const scrollToId = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
    requestAnimationFrame(() => {
      setTimeout(scrollToId, 150);
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 border border-accent rounded-full" />
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-accent rounded-full" />
        </div>

        <div className="page-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Our Services
              </span>
            </FadeInUp>
            <FoldInTitle
              as="h1"
              trigger="mount"
              delay={0.06}
              className="font-heading text-4xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight"
            >
              World-Class{' '}
              <span className="text-accent italic">
                Longevity Care
              </span>
            </FoldInTitle>
            <FadeInUp>
              <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
                We offer advanced health assessments, personalised wellness programmes, and evidence-informed therapies designed to support metabolic health, immune resilience, and long-term wellbeing.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Regulatory / Important information */}
      <section className="section-padding bg-muted">
        <div className="page-container max-w-3xl">
          <FadeInUp className="space-y-6">
            <FoldInTitle
              as="h2"
              delay={0.04}
              className="font-heading text-xl md:text-2xl text-foreground"
            >
              Important information
            </FoldInTitle>
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
          className={`section-padding scroll-mt-28 md:scroll-mt-32 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="page-container">
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
                  {category.eyebrow}
                </span>
                <FoldInTitle
                  as="h2"
                  delay={0.06}
                  className="font-heading text-3xl md:text-4xl text-foreground mt-4 mb-6"
                >
                  {category.title.split(' ')[0]}{' '}
                  <span className="text-accent italic">
                    {category.title.split(' ').slice(1).join(' ')}
                  </span>
                </FoldInTitle>
                <div className="text-muted-foreground font-body leading-relaxed mb-6 space-y-4">
                  <p>{category.description}</p>
                  {category.bodyParagraphs?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
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
                    <FoldInTitle
                      as="h3"
                      delay={0.03}
                      className="font-heading text-lg text-card-foreground mb-2"
                    >
                      {service.name}
                    </FoldInTitle>
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
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Ready to Begin?
              </span>
            </FadeInUp>
            <FoldInTitle
              as="h2"
              delay={0.06}
              className="font-heading text-3xl md:text-5xl text-primary-foreground mt-4 mb-6 mx-auto max-w-3xl"
            >
              Start Your Longevity{' '}
              <span className="text-accent italic">
                Journey Today
              </span>
            </FoldInTitle>
            <FadeInUp>
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
        </div>
      </section>
    </>
  );
};

export default ServicesClient;
