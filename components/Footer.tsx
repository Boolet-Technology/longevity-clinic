'use client';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
} from 'lucide-react';
import Link from 'next/link';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            variants={fadeInUp(0, 0.6, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start md:items-start md:block">
              <Image
                src="/assets/UK-Longevity-clinic-logo.png"
                alt="Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            {/* <h2 className="font-heading text-2xl mb-4">
              UK <span className="text-accent">Longevity</span>
            </h2> */}
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-6 font-body mt-4 text-center md:text-left">
              Pioneering the future of longevity medicine with
              world-class anti-aging and regenerative treatments
              tailored for discerning individuals.
            </p>
            <div className="flex space-x-4 text-center justify-center md:justify-start md:text-left">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp(0.1, 0.6, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-lg mb-6 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Book Appointment', href: '/book' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-base font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeInUp(0.2, 0.6, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-lg mb-6 text-accent">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Anti-Aging Medicine',
                'Regenerative Therapies',
                'Aesthetic Treatments',
                'Lifestyle Optimization',
                'Preventive Care',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-base font-body"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp(0.3, 0.6, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-lg mb-6 text-accent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-primary-foreground/70 text-base font-body">
                  62 Station Road,
                  <br />
                  North Harrow, HA2 7SJ
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-primary-foreground/70 text-base font-body">
                  1 Harley Street
                  <br />
                  London, W1G 6AX
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href="tel:02037730111"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-base font-body"
                >
                  020 3773 0111
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href="mailto:info@uklongevityclinic.co.uk"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-base font-body"
                >
                  info@uklongevityclinic.co.uk
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  size={18}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-primary-foreground/70 text-base font-body">
                  Mon - Fri: 9:00 - 18:00
                  <br />
                  Sat: 10:00 - 16:00
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 text-sm">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/50  font-body text-center md:text-left">
            © {new Date().getFullYear()} UK Longevity Clinic. All
            rights reserved.
          </p>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/"
              className="text-primary-foreground/50 hover:text-accent transition-colors font-body"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-primary-foreground/50 hover:text-accent transition-colors font-body"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-primary-foreground/50 mt-2 md:mt-0">
            Website by{' '}
            <a
              href="https://boolet.co.uk"
              className="hover:bg-[#5D12D2] hover:text-white font-medium hover:py-1 px-1 rounded  transition-all ease-in-out duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boolet.co.uk
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-all duration-300 mt-4 md:mt-0 hover:cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
