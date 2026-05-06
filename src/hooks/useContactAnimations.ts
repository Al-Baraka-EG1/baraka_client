"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { useRef } from "react";

export const useContactAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useScrollFadeIn(heroRef, { y: 20 });
  useScrollFadeIn(infoRef, { y: 30 });
  useScrollFadeIn(formRef, { y: 30, delay: 0.2 });
  useScrollFadeIn(mapRef, { y: 30 });
  useScrollFadeIn(faqRef, { y: 30 });

  return {
    heroRef,
    infoRef,
    formRef,
    mapRef,
    faqRef,
  };
};
