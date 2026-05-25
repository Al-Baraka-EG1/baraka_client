"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll threshold to show/hide button
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Initial check in case page starts scrolled down
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  // Smooth scroll back to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.85 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 20px 38px rgba(15, 107, 58, 0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-light)]/30 bg-[var(--color-green-forest)] text-white shadow-[0_12px_30px_rgba(16,38,26,0.25)] outline-none transition-colors duration-300 hover:bg-[var(--color-green-fresh)]"
          )}
          aria-label="Back to top"
        >
          {/* Animated bouncing arrow inside */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="h-5 w-5 stroke-[2.5]" />
          </motion.div>

          {/* Dynamic pulsing glow ring */}
          <span className="absolute -inset-0.5 rounded-full border border-[var(--color-gold)]/20 opacity-0 transition-opacity duration-300 hover:opacity-100 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
