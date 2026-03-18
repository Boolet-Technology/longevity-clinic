'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, imageScale } from '@/lib/animations';
import Image from 'next/image';

const CTASection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y }}
          className="relative w-full h-[150%] -top-[25%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auhref=format&fit=crop"
            alt="Longevity clinic in London offering advanced medical treatments"
            fill
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/80 z-10" />
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 border border-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-accent/10 rounded-full translate-x-1/2 translate-y-1/2 z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Begin Your Journey
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6 leading-tight"
          >
            Ready to Transform
            <br />
            <span className="text-accent italic">Your Future?</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="divider-gold mb-6"
          />

          <motion.p
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary-foreground/70 text-lg md:text-xl font-body leading-relaxed mb-10"
          >
            Schedule your exclusive consultation with our specialists
            and discover a personalized path to optimal health and
            longevity.
          </motion.p>

          <motion.div
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Button asChild className="btn-luxury group">
              <Link href="/book" className="h-auto">
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button> */}

            <Button
              asChild
              variant="ghost"
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          <motion.p
            variants={fadeInUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary-foreground/50 text-base font-body mt-8"
          >
            Complimentary initial consultation • Personalized
            treatment plans • Flexible scheduling
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
