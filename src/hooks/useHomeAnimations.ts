import { useParallax, useScrollFadeIn } from "@/lib/animations";
import { useRef } from "react";

const useHomeAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);

  useScrollFadeIn(heroContentRef, { stagger: 0.1 });
  useScrollFadeIn(showcaseRef, { stagger: 0.1, delay: 0.2 });
  useScrollFadeIn(aboutRef, { y: 50 });
  useScrollFadeIn(qualityRef, { stagger: 0.1 });
  useParallax(bgRef, 0.4);

  return {
    heroRef,
    heroContentRef,
    bgRef,
    showcaseRef,
    aboutRef,
    statsRef,
    qualityRef,
  };
};

export default useHomeAnimations;
