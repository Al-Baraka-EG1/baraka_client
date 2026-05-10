"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
import { Variant } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * GSAP IMPLEMENTATIONS (Legacy/Existing)
 */
export function useScrollFadeIn(
  ref: RefObject<HTMLElement | null>,
  options?: { delay?: number; y?: number; duration?: number; stagger?: number },
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from(
        ref.current.children.length > 0 && options?.stagger
          ? ref.current.children
          : ref.current,
        {
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
        },
      );
    },
    { scope: ref },
  );
}

/**
 * MOTION IMPLEMENTATIONS (New Performance-Focused)
 * These follow the S-Tier Motion AI Kit recommendations.
 */

export const fadeInUpVariants: Record<string, Variant> = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth ease
    },
  }),
};

// Stagger children reveal
export const staggerContainerVariants: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Record<string, Variant> = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

// Scale reveal from center
export const scaleRevealVariants: Record<string, Variant> = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

// Clip reveal (slides up from behind a mask)
export const clipRevealVariants: Record<string, Variant> = {
  hidden: { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.9,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

// Slide in from left
export const slideInLeftVariants: Record<string, Variant> = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

// Slide in from right
export const slideInRightVariants: Record<string, Variant> = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed: number = 0.5,
) {
  useGSAP(
    () => {
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
    },
    { scope: ref },
  );
}

// Video scroll-speed effect: play/pause based on visibility
export function useScrollVideo(ref: RefObject<HTMLVideoElement | null>) {
  useGSAP(
    () => {
      if (!ref.current) return;
      const video = ref.current;

      ScrollTrigger.create({
        trigger: video,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      });
    },
    { scope: ref },
  );
}
