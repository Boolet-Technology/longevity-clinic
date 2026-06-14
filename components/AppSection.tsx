'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, FoldInTitle } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { fadeInUp, scaleIn } from '@/lib/animations';
import {
  appFeatures,
  appJourneySteps,
  WAITLIST_URL,
} from '@/data/data';

const AppSection = () => {
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="page-container">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-body text-accent">
            Launching 2026 · UK first
          </span>
          <FoldInTitle
            as="h2"
            delay={0.06}
            className="font-heading text-3xl md:text-5xl text-foreground mt-5 mb-5"
          >
            Your whole journey,{' '}
            <span className="text-accent italic">in your pocket</span>
          </FoldInTitle>
          <div className="divider-gold mb-5" />
          <p className="text-muted-foreground font-body leading-relaxed">
            A doctor-led, at-home longevity assessment. Measure what matters,
            understand it with a clinician, and act on a plan built around you —
            all through the companion app for iOS &amp; Android, included with
            every kit.
          </p>
        </FadeInUp>

        <FadeInUp className="mb-16 md:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Inside the app
            </span>
            <p className="text-muted-foreground font-body leading-relaxed mt-3">
              The companion app tracks your kit from doorstep to lab, surfaces
              clinician-reviewed results, and keeps your personalised plan one
              tap away.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp(index * 0.1, 0.4, 20)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-card text-center md:text-left"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 mx-auto md:mx-0 mb-4">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp className="mb-10 md:mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              The Longevity Core Kit
            </span>
            <FoldInTitle
              as="h3"
              delay={0.04}
              className="font-heading text-2xl md:text-4xl text-foreground mt-3 mb-4"
            >
              Measure · Understand · Optimise · Thrive
            </FoldInTitle>
            <p className="text-muted-foreground font-body leading-relaxed">
              Everything needed for a complete at-home assessment — posted to
              your door, returned freepost, and read by a clinician before
              anything reaches you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appJourneySteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={scaleIn(index * 0.08, 0.5, 0.95)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-xl border border-border/60 bg-card p-6 shadow-card"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-heading text-accent-foreground">
                  {step.step}
                </span>
                <h4 className="font-heading text-lg text-card-foreground mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp className="text-center">
          <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
            We&apos;re opening access in waves across the UK. Join the waitlist
            to be among the first.
          </p>
          <Button asChild className="btn-luxury group">
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-auto"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-muted-foreground/70 text-sm font-body mt-4">
            No spam. One email when your invitation is ready.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

export default AppSection;
