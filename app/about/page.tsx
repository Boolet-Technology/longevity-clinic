'use client';

import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Award, Users, Clock, Heart, Star, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every patient is treated with the utmost respect, empathy, and individualized attention.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We pursue the highest standards in medical practice, research, and patient outcomes.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent, honest communication and ethical practices guide everything we do.",
  },
];

const team = [
  {
    name: "Dr. Elizabeth Harrington",
    role: "Medical Director",
    specialty: "Regenerative Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. James Whitmore",
    role: "Lead Physician",
    specialty: "Anti-Aging Medicine",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. Sophia Chen",
    role: "Aesthetic Director",
    specialty: "Aesthetic Medicine",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Reynolds",
    role: "Senior Consultant",
    specialty: "Preventive Health",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
  },
];

const milestones = [
  { year: "2009", event: "Founded in London's prestigious Harley Street" },
  { year: "2012", event: "Expanded to include regenerative medicine division" },
  { year: "2015", event: "Opened state-of-the-art research laboratory" },
  { year: "2018", event: "Recognized as UK's leading longevity clinic" },
  { year: "2021", event: "Launched personalized genomics program" },
  { year: "2024", event: "Celebrating 15 years of excellence" },
];

const About = () => {
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
              Pioneering the Future of{" "}
              <span className="text-accent italic">Longevity</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed">
              For over 15 years, UK Longevity Clinic has been at the forefront of 
              anti-aging medicine, helping discerning clients achieve optimal health 
              and vitality.
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
                  Founded in 2009 on London's prestigious Harley Street, UK Longevity 
                  Clinic was born from a vision to revolutionize how we approach aging 
                  and wellness.
                </p>
                <p>
                  Our founders, world-renowned physicians in regenerative medicine, 
                  recognized that true longevity isn't just about adding years to life—
                  it's about adding life to years.
                </p>
                <p>
                  Today, we continue to push the boundaries of medical science, 
                  combining cutting-edge research with personalized care to help our 
                  clients live longer, healthier, and more vibrant lives.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { icon: Award, value: "15+", label: "Years" },
                  { icon: Users, value: "5000+", label: "Clients" },
                  { icon: Clock, value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <span className="block text-2xl font-heading text-foreground">{stat.value}</span>
                    <span className="text-muted-foreground text-sm font-body">{stat.label}</span>
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
              Guided by{" "}
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
              Meet Our{" "}
              <span className="text-accent italic">Specialists</span>
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground font-body">
              Our team of world-renowned physicians brings decades of combined 
              experience in longevity medicine.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-body">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-body">{member.specialty}</p>
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
              Milestones of{" "}
              <span className="text-accent italic">Excellence</span>
            </h2>
            <div className="divider-gold" />
          </FadeInUp>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-accent font-heading text-xl">{milestone.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 font-body">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
          </section>
</>

  );
};

export default About;
