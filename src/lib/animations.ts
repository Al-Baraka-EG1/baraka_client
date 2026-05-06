"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function useScrollFadeIn(ref: RefObject<HTMLElement | null>, options?: { delay?: number; y?: number; duration?: number; stagger?: number }) {
  useGSAP(() => {
    if (!ref.current) return;
    
    gsap.from(ref.current.children.length > 0 && options?.stagger ? ref.current.children : ref.current, {
      opacity: 0,
      y: options?.y ?? 30,
      duration: options?.duration ?? 0.8,
      delay: options?.delay ?? 0,
      stagger: options?.stagger ?? 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: ref });
}

export function useParallax(ref: RefObject<HTMLElement | null>, speed: number = 0.5) {
  useGSAP(() => {
    if (!ref.current) return;
    
    gsap.to(ref.current, {
      y: () => -window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: ref });
}
