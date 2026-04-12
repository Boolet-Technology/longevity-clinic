'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  FoldInTitle,
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
    image:"/assets/Dr-O.Uğur-Sezerman.jpeg",
    bio: "Prof. Dr O. Uğur Sezerman is Professor and Head of Biostatistics and Medical Informatics at Acıbadem Mehmet Ali Aydınlar University, Istanbul. A pioneer in computational biology and precision medicine, he established Turkey's first bioinformatics undergraduate and graduate programmes and has led internationally recognised research in multi-omics data integration, functional genomics, and personalised healthcare. His work spans genomic and epigenetic analysis to help translate complex biological data into predictive, data-driven health insights. Through the UK Longevity Clinic alliance, Prof. Sezerman provides scientific leadership supporting a new generation of personalised, preventative health strategies.",
  },
  {
    name: 'Taz Khan MBE',
    specialty: 'Social Impact • Community Health • Systems Innovation',
    image:
      '/assets/Taz-Khan.jpeg',
    bio: "Mumtaz (Taz) Khan MBE is an award-winning social entrepreneur and founder of London's Community Kitchen. Widely recognised for his leadership at the intersection of food systems, public health, and community innovation, he has dedicated his career to improving health outcomes at scale. At the UK Longevity Clinic, Taz brings the critical people-place-planet perspective — ensuring that advanced longevity science is delivered in ways that are accessible, community-rooted, and designed for meaningful real-world impact.",
  },
  {
    name: 'Dr. Jawahir Marikkar',
    specialty: 'Integrative Medicine • Metabolic Health • Preventative Care',
    image:
      "/assets/Dr-Jawahir.jpeg",
    bio: "Dr. Jawahir Marikkar is an experienced clinician focused on integrative and preventative approaches to metabolic and whole-system health. His work centres on identifying root drivers of imbalance and supporting patients through evidence-informed, personalised care strategies. Within the UK Longevity Clinic alliance, Dr. Jawahir Marikkar contributes clinical insight that bridges traditional medicine with emerging longevity science, supporting programmes designed to enhance resilience, vitality, and long-term wellbeing.",
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
    <div className="min-w-0 overflow-x-clip">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 border border-accent rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 border border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                About Us
              </span>
            </FadeInUp>
            <FoldInTitle
              as="h1"
              trigger="mount"
              delay={0.06}
              className="font-heading text-4xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight"
            >
              Pioneering the Future of{' '}
              <span className="text-accent italic">Longevity</span>
            </FoldInTitle>
            <FadeInUp>
            <p className="text-primary-foreground/50 md:text-2xl text-xl font-body leading-relaxed mb-4">
              We are entering a new chapter in personalised healthcare.
            </p>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              Across the world, longevity is shifting towards proactive, science-led care - and we are bringing that approach to you,
              focusing on prevention, early insight, and personalised medicine to help you live with greater vitality, clarity, and longevity.
            </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background overflow-x-clip">
        <div className="container mx-auto min-w-0">
          <div className="grid min-w-0 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInLeft className="min-w-0">
              <div className="relative max-w-full">
                <img
                  src="/assets/Medic Care Direct.jpeg"
                  alt="UK Longevity Clinic"
                  className="rounded-lg shadow-elegant w-full max-w-full"
                />
                <div
                  className="pointer-events-none absolute -z-10 w-full h-full rounded-lg border-2 border-accent/30 max-md:-bottom-2 max-md:-right-2 md:-bottom-6 md:-right-6"
                  aria-hidden
                />
              </div>
            </FadeInLeft>

            <FadeInRight className="min-w-0">
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Our Story
              </span>
              <FoldInTitle
                as="h2"
                delay={0.06}
                className="font-heading text-3xl md:text-4xl text-foreground mt-4 mb-6"
              >
                A Commitment to
                <br />
                <span className="text-accent italic">Excellence</span>
              </FoldInTitle>
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
      <section className="section-padding bg-muted overflow-x-clip">
        <div className="container mx-auto min-w-0">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeInUp>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Our Values
              </span>
            </FadeInUp>
            <FoldInTitle
              as="h2"
              delay={0.06}
              className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6 mx-auto max-w-2xl"
            >
              Guided by{' '}
              <span className="text-accent italic">Principles</span>
            </FoldInTitle>
            <FadeInUp>
              <div className="divider-gold" />
            </FadeInUp>
          </div>

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
                  <FoldInTitle
                    as="h3"
                    delay={0.04}
                    className="font-heading text-xl text-card-foreground mb-3"
                  >
                    {value.title}
                  </FoldInTitle>
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
      <section className="section-padding bg-background overflow-x-clip">
        <div className="container mx-auto min-w-0">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeInUp>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
                Our Team
              </span>
            </FadeInUp>
            <FoldInTitle
              as="h2"
              delay={0.06}
              className="font-heading text-3xl md:text-5xl text-foreground mt-4 mb-6 mx-auto max-w-2xl"
            >
              Meet Our{' '}
              <span className="text-accent italic">Specialists</span>
            </FoldInTitle>
            <FadeInUp>
              <div className="divider-gold mb-6" />
              <p className="text-muted-foreground font-body">
                Our team of world-renowned physicians brings decades of
                combined experience in longevity medicine.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid min-w-0 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-card rounded-lg overflow-hidden shadow-card"
                >
                  <div className="relative aspect-3/5 w-full overflow-hidden rounded-t-lg bg-muted sm:aspect-3/4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 h-full w-full object-cover object-[center_12%] group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-700 sm:object-[center_20%] md:object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <FoldInTitle
                      as="h3"
                      delay={0.03}
                      className="font-heading text-lg text-foreground"
                    >
                      {member.name}
                    </FoldInTitle>
                    <p className="text-accent text-sm font-body mt-1 wrap-break-word">
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
      {/* <section className="section-padding bg-primary">
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
      </section> */}
    </div>
  );
};

export default AboutClient;
