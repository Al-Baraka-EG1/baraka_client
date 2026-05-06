"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { useRef } from "react";

export const useAboutAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useScrollFadeIn(heroRef, { y: 20 });
  useScrollFadeIn(storyRef, { stagger: 0.1 });
  useScrollFadeIn(missionRef, { stagger: 0.2 });
  useScrollFadeIn(qualityRef, { stagger: 0.1 });
  useScrollFadeIn(timelineRef, { stagger: 0.2 });

  return {
    heroRef,
    storyRef,
    missionRef,
    qualityRef,
    timelineRef,
  };
};
