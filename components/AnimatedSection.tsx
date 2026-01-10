import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      variants={fadeInUp(delay, 0.8, 40)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      variants={fadeInLeft(delay, 0.8, -40)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInRight = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      variants={fadeInRight(delay, 0.8, 40)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      variants={scaleIn(delay, 0.6, 0.9)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={fadeInUp(0, 0.6, 30)}
      className={className}
    >
      {children}
    </motion.div>
  );
};
