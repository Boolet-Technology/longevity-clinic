'use client';

import { motion } from 'framer-motion';
import {
  FadeInLeft,
  FadeInRight,
} from '@/components/AnimatedSection';
import { Check } from 'lucide-react';
import { scaleIn, fadeInRight, fadeInLeft } from '@/lib/animations';

const features = [
  'World-renowned medical specialists',
  'State-of-the-art facilities',
  'Personalized treatment protocols',
  'Comprehensive aftercare support',
  'Luxurious patient experience',
  'Evidence-based treatments',
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <FadeInLeft className="relative">
            <div className="relative">
              <motion.div
                variants={scaleIn(0, 0.8, 0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?q=80&w=2091&auto=format&fit=crop"
                  alt="Luxury clinic interior"
                  className="w-full rounded-lg shadow-elegant"
                />
              </motion.div>

              {/* Decorative frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/30 rounded-lg z-0" />

              {/* Stats card */}
              <motion.div
                variants={fadeInRight(0.4, 0.6, 50)} // Using fadeInRight because x: 50 typically means coming from right if positive? Wait. Existing was initial x: 50. That means it slides IN from right to 0. Correct.
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-accent p-6 rounded-lg shadow-lg z-20 hidden md:block"
              >
                <span className="block text-4xl font-heading text-accent-foreground">
                  15+
                </span>
                <span className="text-accent-foreground/80 text-sm font-body">
                  Years of Excellence
                </span>
              </motion.div>
            </div>
          </FadeInLeft>

          {/* Content Column */}
          <FadeInRight>
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-4 mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="text-accent italic">
                Medical Excellence
              </span>
            </h2>
            <p className="text-primary-foreground/70 font-body leading-relaxed mb-8">
              At UK Longevity Clinic, we combine decades of medical
              expertise with cutting-edge technology to deliver
              unparalleled results. Our commitment to excellence is
              reflected in every aspect of your journey with us.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  variants={fadeInRight(index * 0.1, 0.4, 20)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm font-body">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt="Doctor"
                    className="w-12 h-12 rounded-full border-2 border-primary"
                  />
                ))}
              </div>
              <div>
                <span className="block text-primary-foreground font-heading text-lg">
                  50+ Specialists
                </span>
                <span className="text-primary-foreground/60 text-sm font-body">
                  World-class medical team
                </span>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
