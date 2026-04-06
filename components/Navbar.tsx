'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  fadeInLeft,
  fadeInUp,
  fadeInRight,
  menuSlide,
  rollIn,
} from '@/lib/animations';
import Image from 'next/image';
import { scrollToTop } from '@/lib/lenis-instance';
import { FoldInTitle } from '@/components/AnimatedSection';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleHomeOrScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/85 backdrop-blur-md shadow-elegant py-3 border-b border-primary-foreground/10'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between mb-4 md:mb-0">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleHomeOrScrollTop}
          className="flex items-center space-x-2 ml-4"
        >
          <motion.div
            variants={fadeInLeft(0, 0.6, -20)}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/assets/UK-Longevity-logo.png"
              alt="UK Longevity Clinic logo"
              width={100}
              height={100}
              className="size-16 object-contain mr-4"
            />
          </motion.div>
          <FoldInTitle
            as="h1"
            trigger="mount"
            delay={0.08}
            duration={0.65}
            className="font-heading text-xl md:text-2xl text-primary-foreground"
          >
            UK <span className="text-accent">Longevity</span> Clinic
          </FoldInTitle>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              variants={fadeInUp(index * 0.1, 0.4, -10)} // negative y for falling down or just standard up? Original was y: -10 -> 0. My fadeInUp is y: 30 -> 0.
              // Wait, y: -10 means it starts above and moves down.
              // My fadeInUp starts below (positive 30) and moves up.
              // I should probably use a custom variant or just pass -10 to fadeInUp?
              // fadeInUp(delay, duration, y). If I pass -10, it starts at -10 and moves to 0. Correct.
              // So it acts as fadeInDown.
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                onClick={
                  link.href === '/' ? handleHomeOrScrollTop : undefined
                }
                className={`text-lg font-body tracking-wide transition-colors duration-300 hover:text-accent ${
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-primary-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.a
            href="tel:02037730111"
            variants={fadeInRight(0.3, 0.6, 20)}
            initial="hidden"
            animate="visible"
            className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors"
          >
            <Phone size={16} />
            <span className="text-sm font-body">020 3773 0111</span>
          </motion.a>

          {/* <motion.div
            variants={fadeInRight(0.4, 0.6, 20)}
            initial="hidden"
            animate="visible"
          >
            <Button asChild className="btn-luxury">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </motion.div> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuSlide()}
            initial="closed"
            animate="open"
            exit="exit"
            className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={fadeInLeft(index * 0.1, 0.3, -20)}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={
                      link.href === '/' ? handleHomeOrScrollTop : undefined
                    }
                    className={`block text-base font-body py-2 transition-colors ${
                      pathname === link.href
                        ? 'text-accent'
                        : 'text-primary-foreground/80 hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={fadeInUp(0.4, 0.3, 20)}
                initial="hidden"
                animate="visible"
                className="pt-4"
              >
                {/* <Button asChild className="btn-luxury w-full">
                  <Link href="/book">Book Appointment</Link>
                </Button> */}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
