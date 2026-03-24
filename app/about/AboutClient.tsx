'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
} from '@/components/AnimatedSection';
import {
  Award,
  Users,
  Clock,
  Heart,
  Star,
  Shield,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description:
      'Every patient is treated with the utmost respect, empathy, and individualized attention.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description:
      'We pursue the highest standards in medical practice, research, and patient outcomes.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Transparent, honest communication and ethical practices guide everything we do.',
  },
];

const team = [
  {
    name: 'Prof. Dr O. Uğur Sezerman',
    specialty: 'Genomics • Epigenetics • Bioinformatics • Precision Medicine',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect fill='%239ca3af' width='400' height='500'/%3E%3Cg fill='%236b7280' opacity='0.9'%3E%3Crect x='120' y='140' width='160' height='140' rx='8' fill='none' stroke='%236b7280' stroke-width='10'/%3E%3Ccircle cx='160' cy='200' r='30'/%3E%3Cpath d='M100 310 L155 250 L210 290 L270 220 L300 260 L300 310 Z'/%3E%3C/g%3E%3C/svg%3E",
    bio: "Prof. Dr O. Uğur Sezerman is Professor and Head of Biostatistics and Medical Informatics at Acıbadem Mehmet Ali Aydınlar University, Istanbul. A pioneer in computational biology and precision medicine, he established Turkey's first bioinformatics undergraduate and graduate programmes and has led internationally recognised research in multi-omics data integration, functional genomics, and personalised healthcare. His work spans genomic and epigenetic analysis to help translate complex biological data into predictive, data-driven health insights. Through the UK Longevity Clinic alliance, Prof. Sezerman provides scientific leadership supporting a new generation of personalised, preventative health strategies.",
  },
  {
    name: 'Dr Jawahar Mohammad',
    specialty: 'Integrative Medicine • Metabolic Health • Preventative Care',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect fill='%239ca3af' width='400' height='500'/%3E%3Cg fill='%236b7280' opacity='0.9'%3E%3Crect x='120' y='140' width='160' height='140' rx='8' fill='none' stroke='%236b7280' stroke-width='10'/%3E%3Ccircle cx='160' cy='200' r='30'/%3E%3Cpath d='M100 310 L155 250 L210 290 L270 220 L300 260 L300 310 Z'/%3E%3C/g%3E%3C/svg%3E",
    bio: "Dr Jawahar Mohammad is an experienced clinician focused on integrative and preventative approaches to metabolic and whole-system health. His work centres on identifying root drivers of imbalance and supporting patients through evidence-informed, personalised care strategies. Within the UK Longevity Clinic alliance, Dr Mohammad contributes clinical insight that bridges traditional medicine with emerging longevity science, supporting programmes designed to enhance resilience, vitality, and long-term wellbeing.",
  },
  {
    name: 'Taz Khan MBE',
    specialty: 'Social Impact • Community Health • Systems Innovation',
    image:
      '/assets/Taz-Khan.jpeg',
    bio: "Mumtaz (Taz) Khan MBE is an award-winning social entrepreneur and founder of London's Community Kitchen. Widely recognised for his leadership at the intersection of food systems, public health, and community innovation, he has dedicated his career to improving health outcomes at scale. At the UK Longevity Clinic, Taz brings the critical people-place-planet perspective — ensuring that advanced longevity science is delivered in ways that are accessible, community-rooted, and designed for meaningful real-world impact.",
  },
  {
    name: 'Füsun Suman',
    specialty: 'Functional Medicine • Biohacking Therapies • IV Nutritional Science',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect fill='%239ca3af' width='400' height='500'/%3E%3Cg fill='%236b7280' opacity='0.9'%3E%3Crect x='120' y='140' width='160' height='140' rx='8' fill='none' stroke='%236b7280' stroke-width='10'/%3E%3Ccircle cx='160' cy='200' r='30'/%3E%3Cpath d='M100 310 L155 250 L210 290 L270 220 L300 260 L300 310 Z'/%3E%3C/g%3E%3C/svg%3E",
    bio: "Füsun Suman is a Düsseldorf-based practitioner specialising in functional medicine, personalised wellness protocols, and advanced IV nutritional therapies. Her clinical focus is on supporting cellular health, immune resilience, and whole-body optimisation through tailored, preventative approaches. Through the UK Longevity Clinic alliance, Füsun contributes frontline therapeutic expertise, helping translate evolving longevity science into practical wellbeing strategies for clients in the UK and internationally.",
  },
];

const milestones = [
  {
    year: '2009',
    event: "Founded in London's prestigious Harley Street",
  },
  {
    year: '2012',
    event: 'Expanded to include regenerative medicine division',
  },
  {
    year: '2015',
    event: 'Opened state-of-the-art research laboratory',
  },
  {
    year: '2018',
    event: "Recognized as UK's leading longevity clinic",
  },
  { year: '2021', event: 'Launched personalized genomics program' },
  { year: '2024', event: 'Celebrating 15 years of excellence' },
];

const AboutClient = () => {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 border border-accent rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 border border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeInUp className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
              Pioneering the Future of{' '}
              <span className="text-accent italic">Longevity</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              For over 15 years, UK Longevity Clinic has been at the
              forefront of anti-aging medicine, helping discerning
              clients achieve optimal health and vitality.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                  alt="UK Longevity Clinic"
                  className="rounded-lg shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 rounded-lg -z-10" />
              </div>
            </FadeInLeft>

            <FadeInRight>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-4 mb-6">
                A Commitment to
                <br />
                <span className="text-accent italic">Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  With a combined legacy of over four decades in
                  advanced medical practice across the globe, the team
                  behind UK Longevity Clinic brings together some of
                  the most experienced minds in preventative and
                  regenerative healthcare.
                </p>
                <p>
                  Now established in London, we are introducing a new
                  standard of personalised, science-led healthcare to
                  the UK—one that moves beyond reactive medicine and
                  into precision-based longevity.
                </p>
                <p>
                  Our approach is rooted in clinical evidence,
                  data-driven diagnostics, and tailored interventions
                  designed to optimise health at every stage of life.
                  This is not wellness as a trend—this is medicine
                  redefined.
                </p>
                <p>
                  At UK Longevity Clinic, we focus not simply on
                  extending lifespan, but on elevating
                  healthspan—enhancing energy, resilience, and
                  long-term vitality through deeply personalised care.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { icon: Award, value: '15+', label: 'Years' },
                  { icon: Users, value: '5000+', label: 'Clients' },
                  { icon: Clock, value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="block text-2xl font-heading text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground text-sm font-body">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6">
              Guided by{' '}
              <span className="text-accent italic">Principles</span>
            </h2>
            <div className="divider-gold" />
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card p-8 rounded-lg shadow-card text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6">
              Meet Our{' '}
              <span className="text-accent italic">Specialists</span>
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground font-body">
              Our team of world-renowned physicians brings decades of
              combined experience in longevity medicine.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-card rounded-lg overflow-hidden shadow-card"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-3/4 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-body mt-1">
                      {member.specialty}
                    </p>
                    <AnimatePresence>
                      {expandedBio === member.name ? (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-muted-foreground text-sm font-body leading-relaxed mt-3 overflow-hidden"
                        >
                          {member.bio}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedBio(
                          expandedBio === member.name ? null : member.name
                        )
                      }
                      className="text-accent text-sm font-body mt-2 flex items-center gap-1 hover:underline focus:outline-none focus:underline"
                    >
                      {expandedBio === member.name ? (
                        <>
                          Read less <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read more <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-4 mb-6">
              Milestones of{' '}
              <span className="text-accent italic">Excellence</span>
            </h2>
            <div className="divider-gold" />
          </FadeInUp>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-20 shrink-0 text-right">
                  <span className="text-accent font-heading text-xl">
                    {milestone.year}
                  </span>
                </div>
                <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                <p className="text-primary-foreground/80 font-body">
                  {milestone.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutClient;
