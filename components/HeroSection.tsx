'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  fadeInUp,
  revealText,
  staggerContainer,
  imageScale,
} from '@/lib/animations';
import Image from 'next/image';
import { stats } from '@/data/data';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col md:justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 select-none"
      >
        <motion.div
          variants={imageScale}
          initial="hidden"
          animate="visible"
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auhref=format&fit=crop"
            alt="Luxury medical facility"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent" />
      </motion.div>

      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-accent/10 rounded-full animate-float hidden lg:block" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeInUp(0.2, 0.8)}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-6 font-body">
              Welcome to Excellence
            </span>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-6 overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.h1
                variants={revealText}
                custom={0}
                className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight"
              >
                Redefining the
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={revealText}
                custom={1}
                className="font-heading text-4xl md:text-6xl lg:text-7xl text-accent italic leading-tight"
              >
                Art of Longevity Test lorem
              </motion.h1>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp(0.6, 0.8)}
            initial="hidden"
            animate="visible"
            className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed"
          >
            Experience world-class anti-aging and regenerative
            medicine at the UK's premier longevity clinic. Where
            science meets luxury.
          </motion.p>

          <motion.div
            variants={fadeInUp(0.8, 0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="btn-luxury group">
              <Link href="/book" className="h-auto">
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6"
            >
              <Link href="/services" className="flex items-center">
                <Play className="mr-2 w-4 h-4" />
                Explore Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeInUp(1, 0.8, 50)}
        initial="hidden"
        animate="visible"
        className="relative bottom-0 left-0 right-0 bg-linear-to-t from-primary to-transparent"
      >
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-foreground/10 pt-8 max-md:bg-primary/95 max-md:backdrop-blur-sm max-md:rounded-t-2xl max-md:border-t-0 max-md:pb-12 max-md:gap-y-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp(1.2 + index * 0.1, 0.6, 20)}
                initial="hidden"
                animate="visible"
                className="text-center group cursor-default"
              >
                <span className="block text-3xl md:text-4xl font-heading text-accent mb-1 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/60 text-sm font-body">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
