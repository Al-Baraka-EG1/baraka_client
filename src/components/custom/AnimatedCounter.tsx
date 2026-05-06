"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          },
        });
      },
      once: true,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center text-center p-6">
      <div className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-gold)] mb-3">
        {count}
        {suffix}
      </div>
      <div className="font-dm-sans text-white text-sm md:text-base font-medium uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
