import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, foldInTitle } from "@/lib/animations";

const motionHeadings = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
} as const;

export type FoldInTitleTag = keyof typeof motionHeadings;

const foldTitleViewport = { once: true, margin: "-80px" as const };

export interface FoldInTitleProps {
  as?: FoldInTitleTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** `inView`: animate when scrolled into view. `mount`: animate on first paint (hero, tab/step changes). */
  trigger?: "inView" | "mount";
  id?: string;
}

export const FoldInTitle = ({
  as = "h2",
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  trigger = "inView",
  id,
}: FoldInTitleProps) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = motionHeadings[as];
  const variants = reduceMotion ? fadeInUp(delay, 0.45, 12) : foldInTitle(delay, duration);

  const motionProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: foldTitleViewport,
        };

  return (
    <div className="overflow-visible perspective-[1400px]">
      <MotionTag
        {...motionProps}
        variants={variants}
        className={className}
        style={{ transformOrigin: "50% 100%" }}
        id={id}
      >
        {children}
      </MotionTag>
    </div>
  );
};

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
