'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, FoldInTitle } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/hooks/use-toast';
import {
  CalendarIcon,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const services = [
  {
    value: 'anti-aging',
    label: 'Anti-Aging & Regenerative Medicine',
  },
  { value: 'stem-cell', label: 'Stem Cell Therapy' },
  { value: 'nad', label: 'NAD+ Infusions' },
  { value: 'hormone', label: 'Hormone Optimization' },
  { value: 'aesthetic', label: 'Aesthetic Treatments' },
  { value: 'skin', label: 'Skin Rejuvenation' },
  { value: 'body', label: 'Body Contouring' },
  { value: 'lifestyle', label: 'Lifestyle & Prevention' },
  { value: 'nutrition', label: 'Nutrition Optimization' },
  { value: 'general', label: 'General Consultation' },
];

const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];

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

const BookClient = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
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
      title: 'Appointment Requested',
      description: "We'll confirm your appointment within 24 hours.",
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
            <FoldInTitle
              as="h1"
              trigger="mount"
              className="font-heading text-3xl text-foreground mb-4"
            >
              Appointment Requested!
            </FoldInTitle>
            <p className="text-muted-foreground font-body mb-4">
              Thank you for choosing UK Longevity Clinic.
            </p>
            {date && time && (
              <div className="bg-muted p-4 rounded-lg mb-6">
                <p className="text-foreground font-body">
                  <strong>Requested Date:</strong>{' '}
                  {format(date, 'EEEE, MMMM d, yyyy')}
                </p>
                <p className="text-foreground font-body">
                  <strong>Requested Time:</strong> {time}
                </p>
              </div>
            )}
            <p className="text-muted-foreground font-body mb-8 text-sm">
              Our team will contact you within 24 hours to confirm
              your appointment.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="btn-luxury"
            >
              Book Another Appointment
            </Button>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-1/4 w-96 h-96 border border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Book Appointment
              </span>
            </FadeInUp>
            <FoldInTitle
              as="h1"
              trigger="mount"
              delay={0.06}
              className="font-heading text-4xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight"
            >
              Schedule Your{' '}
              <span className="text-accent italic">Consultation</span>
            </FoldInTitle>
            <FadeInUp>
              <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
                Take the first step towards optimal health and
                longevity.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center font-body text-sm transition-all',
                    step >= s
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground',
                  )}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      'w-16 md:w-24 h-0.5 transition-all',
                      step > s ? 'bg-accent' : 'bg-muted',
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card p-8 md:p-12 rounded-lg shadow-elegant">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Select Service & Date */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <FoldInTitle
                      key="step1"
                      as="h2"
                      trigger="mount"
                      className="font-heading text-2xl text-card-foreground mb-2"
                    >
                      Select Service & Date
                    </FoldInTitle>
                    <p className="text-muted-foreground font-body text-sm">
                      Choose the service you're interested in and your
                      preferred date
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="service">Service *</Label>
                    <Select name="service" required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem
                            key={service.value}
                            value={service.value}
                          >
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal mt-2',
                            !date && 'text-muted-foreground',
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date
                            ? format(date, 'PPP')
                            : 'Select a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>Preferred Time *</Label>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mt-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={cn(
                            'py-2 px-3 rounded text-sm font-body transition-all',
                            time === slot
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-accent/20',
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!date || !time}
                      className="btn-luxury"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <FoldInTitle
                      key="step2"
                      as="h2"
                      trigger="mount"
                      className="font-heading text-2xl text-card-foreground mb-2"
                    >
                      Personal Information
                    </FoldInTitle>
                    <p className="text-muted-foreground font-body text-sm">
                      Tell us a bit about yourself
                    </p>
                  </div>

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

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-luxury"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Additional Notes & Confirm */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <FoldInTitle
                      key="step3"
                      as="h2"
                      trigger="mount"
                      className="font-heading text-2xl text-card-foreground mb-2"
                    >
                      Additional Information
                    </FoldInTitle>
                    <p className="text-muted-foreground font-body text-sm">
                      Any additional details you'd like us to know
                    </p>
                  </div>

                  {/* Appointment Summary */}
                  {date && time && (
                    <div className="bg-muted p-6 rounded-lg mb-6">
                      <FoldInTitle
                        as="h3"
                        trigger="mount"
                        className="font-heading text-lg text-foreground mb-4"
                      >
                        Appointment Summary
                      </FoldInTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground font-body">
                        <CalendarIcon className="w-5 h-5 text-accent" />
                        <span>
                          {format(date, 'EEEE, MMMM d, yyyy')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-muted-foreground font-body mt-2">
                        <Clock className="w-5 h-5 text-accent" />
                        <span>{time}</span>
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="notes">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Any specific concerns or questions you'd like to discuss..."
                      rows={4}
                      className="mt-2 resize-none"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="btn-luxury"
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
                          Submitting...
                        </span>
                      ) : (
                        'Confirm Appointment'
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookClient;
