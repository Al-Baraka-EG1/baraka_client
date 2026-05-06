"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductDetailsAnimations() {
  useGSAP(() => {
    // Hero animations
    gsap.to(".product-hero-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });

    // Scroll triggered animations
    const sections = [".product-gallery", ".product-info", ".product-uses", ".product-storage", ".product-standard", ".product-cta", ".product-related"];
    
    sections.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        });
      });
    });

  });

  return null;
}
