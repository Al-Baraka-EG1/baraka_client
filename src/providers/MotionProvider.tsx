"use client";

import { MotionConfig } from "motion/react";
import { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig 
      transition={{ 
        type: "spring", 
        bounce: 0, 
        duration: 0.4 
      }}
    >
      {children}
    </MotionConfig>
  );
}
