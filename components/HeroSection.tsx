'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auhref=format&fit=crop"
          alt="Luxury medical facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-accent/20 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-accent/10 rounded-full animate-float hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-6 font-body">
              Welcome to Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Redefining the
            <br />
            <span className="text-accent italic">Art of Longevity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-10 font-body leading-relaxed"
          >
            Experience world-class anti-aging and regenerative medicine at the UK's 
            premier longevity clinic. Where science meets luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="btn-luxury group">
              <Link href="/book">
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

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent"
      >
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-primary-foreground/10 pt-8">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Clients Treated" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "50+", label: "Expert Specialists" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <span className="block text-3xl md:text-4xl font-heading text-accent mb-1">
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
