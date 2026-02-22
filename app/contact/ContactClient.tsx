'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
} from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react';

const nationalities = [
  'British',
  'American',
  'Canadian',
  'Australian',
  'German',
  'French',
  'Italian',
  'Spanish',
  'Dutch',
  'Swiss',
  'Swedish',
  'Norwegian',
  'Danish',
  'Belgian',
  'Austrian',
  'Irish',
  'Portuguese',
  'Japanese',
  'Chinese',
  'South Korean',
  'Indian',
  'Brazilian',
  'Mexican',
  'Other',
];

const ContactClient = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: 'Message Sent Successfully',
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <>
        <section className="min-h-screen flex items-center justify-center bg-background pt-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="font-heading text-3xl text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-muted-foreground font-body mb-8">
              Your message has been received. Our team will contact
              you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="btn-luxury"
            >
              Send Another Message
            </Button>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 border border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeInUp className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
              Contact <span className="text-accent italic">Us</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              Have questions? We're here to help. Reach out to our
              team and we'll respond within 24 hours.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeInLeft>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Contact Information
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4 mb-8">
                Visit Our{' '}
                <span className="text-accent italic">Clinic</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground font-body">
                      123 Harley Street
                      <br />
                      London, W1G 6AX
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+44123456789"
                      className="text-muted-foreground font-body hover:text-accent transition-colors"
                    >
                      +44 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@uklongevityclinic.co.uk"
                      className="text-muted-foreground font-body hover:text-accent transition-colors"
                    >
                      info@uklongevityclinic.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">
                      Hours
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Monday - Friday: 9:00 - 18:00
                      <br />
                      Saturday: 10:00 - 16:00
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden h-64 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2050&auto=format&fit=crop"
                  alt="London Map"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card/90 backdrop-blur-sm px-6 py-4 rounded-lg">
                    <p className="text-foreground font-body text-sm">
                      📍 123 Harley Street, London
                    </p>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight>
              <div className="bg-card p-8 md:p-10 rounded-lg shadow-elegant">
                <h3 className="font-heading text-2xl text-card-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nationality">
                        Nationality *
                      </Label>
                      <Select name="nationality" required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          {nationalities.map((nationality) => (
                            <SelectItem
                              key={nationality}
                              value={nationality.toLowerCase()}
                            >
                              {nationality}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select name="gender" required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">
                            Female
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">
                            Prefer not to say
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="mt-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-luxury w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactClient;
