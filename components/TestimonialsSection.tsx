'use client';

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeInUp, FoldInTitle } from "@/components/AnimatedSection";
import { carouselFade } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    name: "Lady Victoria Ashworth",
    title: "Entrepreneur",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    quote: "The team at UK Longevity Clinic has transformed my approach to health and aging. Their personalized protocols have given me more energy and vitality than I had in my thirties.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sir Charles Hampton",
    title: "Business Executive",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "Exceptional service from start to finish. The clinic's regenerative treatments have been nothing short of remarkable. I feel decades younger.",
    rating: 5,
  },
  {
    id: 3,
    name: "Duchess Isabelle von Meyer",
    title: "Philanthropist",
    location: "Geneva, Switzerland",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    quote: "The attention to detail and level of care at UK Longevity is unmatched. Every visit feels like a bespoke experience designed just for me.",
    rating: 5,
  },
];

const AUTO_PLAY_MS = 6500;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const [tabHidden, setTabHidden] = useState(false);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const restartAutoplay = useCallback(() => {
    setAutoplayKey((k) => k + 1);
  }, []);

  const autoplayPaused = isPaused || tabHidden;

  useEffect(() => {
    if (reduceMotion || autoplayPaused) return;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplayKey, reduceMotion, autoplayPaused]);

  const next = () => {
    restartAutoplay();
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    restartAutoplay();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    restartAutoplay();
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeInUp>
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Testimonials
            </span>
          </FadeInUp>
          <FoldInTitle
            as="h2"
            delay={0.06}
            className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6 mx-auto max-w-2xl"
          >
            Trusted by{" "}
            <span className="text-accent italic">Distinguished Clients</span>
          </FoldInTitle>
          <FadeInUp>
            <div className="divider-gold" />
          </FadeInUp>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent rounded-full flex items-center justify-center z-10">
            <Quote className="w-8 h-8 text-accent-foreground" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-card rounded-xl shadow-elegant p-8 md:p-12 pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={carouselFade(0.5)}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <p className="text-lg md:text-xl text-card-foreground/80 font-body leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-accent"
                  />
                  <FoldInTitle
                    key={testimonials[currentIndex].id}
                    as="h4"
                    trigger="mount"
                    delay={0.12}
                    duration={0.55}
                    className="font-heading text-xl text-card-foreground"
                  >
                    {testimonials[currentIndex].name}
                  </FoldInTitle>
                  <p className="text-muted-foreground text-sm font-body">
                    {testimonials[currentIndex].title} • {testimonials[currentIndex].location}
                  </p>
                  
                  {/* Stars */}
                  <div className="flex space-x-1 mt-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-accent fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
