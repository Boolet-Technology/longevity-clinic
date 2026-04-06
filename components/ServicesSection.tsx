'use client';

import Link from 'next/link';
import type { MotionValue } from 'framer-motion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, FoldInTitle } from '@/components/AnimatedSection';
import { services } from '@/data/data';
import Image from 'next/image';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';

const cardBadges = [
  'Science-led',
  'Regeneration',
  'Aesthetics',
  'Wellness',
] as const;

const ServicesSection = () => {
  const scrollDriverRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;

    const measure = () => {
      const overflow = track.scrollWidth - window.innerWidth;
      setScrollRange(Math.max(0, overflow));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: scrollDriverRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, (p) => {
    if (reduceMotion) return 0;
    return -p * scrollRange;
  });

  // One viewport band for sticky + vertical distance ≈ horizontal scroll (trim trailing gap)
  const driverMinHeight =
    scrollRange > 0
      ? `calc(100dvh - 5rem + ${scrollRange}px)`
      : 'calc(100dvh - 5rem + 400px)';

  if (reduceMotion) {
    return (
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Our Expertise
            </span>
            <FoldInTitle
              as="h2"
              delay={0.06}
              className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4 md:mb-5"
            >
              Personalised Care,{' '}
              <span className="text-accent italic">Personalised Results</span>
            </FoldInTitle>
            <div className="divider-gold mb-4 md:mb-5" />
            <p className="text-muted-foreground font-body leading-relaxed">
              We offer advanced health assessments, personalised wellness
              programmes, and evidence-informed therapies designed to support
              metabolic health, immune resilience, and long-term wellbeing.
            </p>
          </FadeInUp>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ServiceCardStatic
                key={service.title}
                service={service}
                badge={cardBadges[i] ?? 'Service'}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-background pt-10 md:pt-14 pb-2">
      <div
        ref={scrollDriverRef}
        className="relative w-full"
        style={{ minHeight: driverMinHeight }}
      >
        <div className="sticky top-20 z-10 flex h-[calc(100dvh-5rem)] max-h-[calc(100dvh-5rem)] flex-col overflow-hidden bg-background md:top-24 md:h-[calc(100dvh-6rem)] md:max-h-[calc(100dvh-6rem)]">
          <ExpertiseHeader />
          <div className="flex min-h-0 flex-1 items-center overflow-hidden">
            <HorizontalTrack x={x} trackRef={trackRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

function ExpertiseHeader() {
  return (
    <div className="container mx-auto shrink-0 px-4 pb-2 pt-0 text-center md:px-8 md:pb-3 xl:pt-20">
      <span className="text-accent text-xs tracking-[0.3em] uppercase font-body md:text-sm">
        Our Expertise
      </span>
      <FoldInTitle
        as="h2"
        delay={0.04}
        className="font-heading mt-1.5 mb-1.5 text-2xl leading-tight text-foreground md:mt-2 md:mb-2 md:text-3xl lg:text-4xl xl:text-5xl"
      >
        Personalised Care,{' '}
        <span className="text-accent italic">Personalised Results</span>
      </FoldInTitle>
      <div className="divider-gold mx-auto mb-1.5 max-w-xs md:mb-2" />
      <p className="mx-auto max-w-2xl text-xs leading-snug text-muted-foreground md:text-sm md:leading-relaxed lg:text-base">
        We offer advanced health assessments, personalised wellness programmes,
        and evidence-informed therapies designed to support metabolic health,
        immune resilience, and long-term wellbeing.
      </p>
    </div>
  );
}

function HorizontalTrack({
  x,
  trackRef,
}: {
  x: MotionValue<number>;
  trackRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      ref={trackRef}
      style={{ x }}
      className="flex w-max gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 pl-4 md:pl-8 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] will-change-transform"
    >
      {services.map((service, i) => (
        <ServiceCardWide
          key={service.title}
          service={service}
          badge={cardBadges[i] ?? 'Service'}
        />
      ))}
      <div className="w-6 shrink-0 md:w-8" aria-hidden />
    </motion.div>
  );
}

function ServiceCardWide({
  service,
  badge,
}: {
  service: (typeof services)[number];
  badge: string;
}) {
  return (
    <article className="group flex h-[min(38vh,300px)] w-[min(88vw,440px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card sm:h-[min(36vh,320px)] sm:w-[min(86vw,480px)] md:h-[min(34vh,340px)] md:w-[min(78vw,560px)] md:flex-row lg:h-[min(36vh,380px)] lg:w-[min(74vw,640px)] xl:h-[min(38vh,440px)] xl:w-[min(68vw,760px)] 2xl:h-[min(40vh,500px)] 2xl:w-[min(62vw,880px)] min-[1800px]:h-[min(42vh,540px)] min-[1800px]:w-[min(56vw,980px)] min-[2200px]:w-[min(52vw,1100px)]">
      <div className="order-2 flex flex-col justify-center p-3 md:order-1 md:w-[46%] md:p-5 lg:p-6 xl:p-7 2xl:p-8">
        <span className="mb-1.5 inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-body uppercase tracking-wide text-accent md:mb-2 md:px-2.5 md:text-xs xl:text-[13px]">
          {badge}
        </span>
        <FoldInTitle
          as="h3"
          delay={0.02}
          className="mb-1.5 font-heading text-sm leading-tight text-card-foreground md:mb-2 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          {service.title}
        </FoldInTitle>
        <p className="mb-2 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground md:mb-3 md:line-clamp-3 md:text-xs lg:line-clamp-none lg:text-sm xl:text-base 2xl:leading-relaxed">
          {service.description}
        </p>
        <Link
          href={service.link}
          className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-accent md:gap-2 md:text-sm xl:text-base"
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 xl:h-5 xl:w-5" />
        </Link>
      </div>
      <div className="relative order-1 min-h-[100px] flex-1 md:order-2 md:min-h-0">
        <Image
          src={service.image}
          alt={`${service.title} — UK Longevity Clinic London`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 88vw, (max-width: 1280px) 70vw, (max-width: 1536px) 800px, (max-width: 1920px) 900px, 1100px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/45 via-transparent to-transparent md:bg-linear-to-l md:from-primary/35" />
        <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 xl:bottom-4 xl:left-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12">
            <service.icon className="h-3.5 w-3.5 text-accent-foreground md:h-4 md:w-4 xl:h-5 xl:w-5" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceCardStatic({
  service,
  badge,
}: {
  service: (typeof services)[number];
  badge: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card shadow-card">
      <div className="relative h-52 shrink-0">
        <Image
          src={service.image}
          alt={`${service.title} — UK Longevity Clinic London`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/70 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <service.icon className="h-5 w-5 text-accent-foreground" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 font-body text-xs uppercase tracking-wide text-accent">
          {badge}
        </span>
        <FoldInTitle
          as="h3"
          delay={0.02}
          className="mb-2 font-heading text-lg leading-snug text-card-foreground"
        >
          {service.title}
        </FoldInTitle>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <Link
          href={service.link}
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default ServicesSection;
