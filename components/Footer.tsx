"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl mb-4">
              UK <span className="text-accent">Longevity</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 font-body">
              Pioneering the future of longevity medicine with world-class 
              anti-aging and regenerative treatments tailored for discerning 
              individuals.
            </p>
            <div className="flex space-x-4">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Book Appointment", href: "/book" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-lg mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              {[
                "Anti-Aging Medicine",
                "Regenerative Therapies",
                "Aesthetic Treatments",
                "Lifestyle Optimization",
                "Preventive Care",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading text-lg mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm font-body">
                  123 Harley Street<br />
                  London, W1G 6AX
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+44123456789"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body"
                >
                  +44 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@uklongevity.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body"
                >
                  info@uklongevity.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm font-body">
                  Mon - Fri: 9:00 - 18:00<br />
                  Sat: 10:00 - 16:00
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/50 text-sm font-body text-center md:text-left">
            © {new Date().getFullYear()} UK Longevity Clinic. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors font-body"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors font-body"
            >
              Terms of Service
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent transition-all duration-300 mt-4 md:mt-0"
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
