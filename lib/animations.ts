import { Variants } from "framer-motion";

export const fadeIn = (delay: number = 0, duration: number = 0.6): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
});

export const fadeInUp = (delay: number = 0, duration: number = 0.6, y: number = 30): Variants => ({
    hidden: { opacity: 0, y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
});

export const fadeInLeft = (delay: number = 0, duration: number = 0.8, x: number = -40): Variants => ({
    hidden: { opacity: 0, x },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
});

export const fadeInRight = (delay: number = 0, duration: number = 0.8, x: number = 40): Variants => ({
    hidden: { opacity: 0, x },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
});

export const scaleIn = (delay: number = 0, duration: number = 0.6, scale: number = 0.9): Variants => ({
    hidden: { opacity: 0, scale },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] }
    }
});

export const carouselFade = (duration: number = 0.5): Variants => ({
    enter: { opacity: 0, y: 20 },
    center: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration, ease: [0.25, 0.1, 0.25, 1] }
    }
});

export const hoverCard = (y: number = -5): Variants => ({
    hover: {
        y,
        boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
    }
});

export const menuSlide = (duration: number = 0.3): Variants => ({
    closed: { opacity: 0, height: 0 },
    open: {
        opacity: 1,
        height: "auto",
        transition: { duration, ease: "easeInOut" }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration, ease: "easeInOut" }
    }
});

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

export const titleAnim: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export const revealText: Variants = {
    hidden: { y: "100%" },
    visible: (custom) => ({
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: custom * 0.05
        }
    })
};

export const revealImage: Variants = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    visible: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const imageScale: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export const rollIn: Variants = {
    hidden: { rotate: -180, opacity: 0, scale: 0.5, x: -50 },
    visible: {
        rotate: 0,
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};
