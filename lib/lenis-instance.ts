import type Lenis from 'lenis';

let lenisRef: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisRef = instance;
}

/** Scroll to top; uses Lenis when smooth scroll is active. */
export function scrollToTop() {
  if (lenisRef) {
    lenisRef.scrollTo(0, { immediate: false });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
