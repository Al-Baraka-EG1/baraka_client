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
    <div ref={containerRef} className="flex flex-col items-center justify-center border-black/10 p-8 text-center md:border-r md:last:border-r-0">
      <div className="mb-3 font-playfair text-5xl font-semibold text-[var(--color-green-forest)] md:text-6xl lg:text-7xl">
        {count}
        {suffix}
      </div>
      <div className="max-w-[11rem] text-sm font-medium text-[var(--color-earth-mid)] md:text-base">
        {label}
      </div>
    </div>
  );
}
