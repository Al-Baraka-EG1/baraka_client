"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";

interface LeafConfig {
  src: string;
  x: string;
  y: string;
  size: number;
  rotate: number;
  duration: number;
  delay: number;
  opacity: number;
}

const defaultLeaves: LeafConfig[] = [
  { src: images.greenLeaf, x: "5%", y: "15%", size: 48, rotate: -15, duration: 8, delay: 0, opacity: 0.12 },
  { src: images.greenLeaf, x: "88%", y: "25%", size: 36, rotate: 30, duration: 10, delay: 2, opacity: 0.10 },
  { src: images.greenLeaf, x: "92%", y: "60%", size: 52, rotate: -45, duration: 9, delay: 1, opacity: 0.08 },
  { src: images.greenLeaf, x: "8%", y: "70%", size: 40, rotate: 20, duration: 11, delay: 3, opacity: 0.10 },
  { src: images.greenLeaf, x: "50%", y: "85%", size: 44, rotate: -30, duration: 7, delay: 0.5, opacity: 0.07 },
  { src: images.greenLeaf, x: "75%", y: "10%", size: 32, rotate: 60, duration: 12, delay: 4, opacity: 0.09 },
  { src: images.pepperPng1, x: "15%", y: "45%", size: 28, rotate: 10, duration: 14, delay: 2, opacity: 0.06 },
  { src: images.pepperPng2, x: "80%", y: "80%", size: 30, rotate: -20, duration: 13, delay: 1.5, opacity: 0.05 },
];

interface FloatingLeavesProps {
  leaves?: LeafConfig[];
  className?: string;
}

export default function FloatingLeaves({ leaves = defaultLeaves, className = "" }: FloatingLeavesProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: leaf.x, top: leaf.y, width: leaf.size, height: leaf.size }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            rotate: [leaf.rotate, leaf.rotate + 12, leaf.rotate],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: leaf.delay,
          }}
        >
          <Image
            src={leaf.src}
            alt=""
            width={leaf.size}
            height={leaf.size}
            className="object-contain"
            style={{ opacity: leaf.opacity }}
          />
        </motion.div>
      ))}
    </div>
  );
}
