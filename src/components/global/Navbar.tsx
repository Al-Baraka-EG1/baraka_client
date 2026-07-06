"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Leaf, Mail, Menu, PackageCheck, Phone, Snowflake, Sprout, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const mobileHighlights = [
  { label: "Fresh Vegetables", icon: Sprout },
  { label: "Frozen Products", icon: Snowflake },
  { label: "Export Support", icon: PackageCheck },
];

const EASE_SMOOTH_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_SMOOTH_ARR: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION_BASE = 500;

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.26, ease: EASE_SMOOTH_ARR } },
  exit: { opacity: 0, transition: { delay: 0.18, duration: 0.28, ease: EASE_SMOOTH_ARR } },
};

const mobilePanelVariants = {
  hidden: {
    clipPath: "circle(0% at calc(100% - 44px) 44px)",
    opacity: 0.4,
  },
  visible: {
    clipPath: "circle(150% at calc(100% - 44px) 44px)",
    opacity: 1,
    transition: { duration: 0.62, ease: EASE_SMOOTH_ARR },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 44px) 44px)",
    opacity: 0.5,
    transition: { delay: 0.1, duration: 0.48, ease: EASE_SMOOTH_ARR },
  },
};

const mobileContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.18, staggerChildren: 0.055 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.035, staggerDirection: -1, duration: 0.18 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.36, ease: EASE_SMOOTH_ARR } },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.24, ease: EASE_SMOOTH_ARR } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const lastY = useRef(0);
  const ticking = useRef(false);

  const updateScrollState = useCallback(() => {
    const currentY = window.scrollY;

    setScrolled(currentY > 20);

    if (currentY <= 60) {
      setVisible(true);
    } else if (currentY > lastY.current && !mobileMenuOpen) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    lastY.current = currentY;
    ticking.current = false;
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateScrollState]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = useCallback(
    (path: string) => {
      if (path === "/") return pathname === "/";
      return pathname.startsWith(path);
    },
    [pathname]
  );

  const isDarkHeader = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className="fixed left-0 right-0 z-[100] w-full transition-[transform,opacity] duration-500 will-change-transform"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          opacity: visible ? 1 : 0,
          transitionTimingFunction: EASE_SMOOTH_CSS,
        }}
      >
        <div
          className={clsx(
            "relative mx-auto flex items-center justify-between",
            scrolled
              ? "mx-3 mt-3 max-w-[1280px] rounded-full border border-black/[0.06] bg-white/78 px-4 py-2.5 shadow-[0_12px_40px_rgba(16,38,26,0.08)] backdrop-blur-xl md:mx-auto md:px-6"
              : clsx(
                  "mt-0 w-full max-w-[1400px] px-5 py-4 md:px-8",
                  isDarkHeader
                    ? "border-b border-white/[0.08]"
                    : "border-b border-black/[0.06] bg-white/30"
                )
          )}
          style={{
            transitionProperty: "background, border-color, border-radius, box-shadow, backdrop-filter",
            transitionDuration: `${DURATION_BASE}ms`,
            transitionTimingFunction: EASE_SMOOTH_CSS,
            backdropFilter: scrolled ? "blur(18px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          }}
        >
          <Link href="/" className="group/logo flex items-center gap-2.5" aria-label="Al BARAKA FOR IMPORT & EXPORT home">
            <span className="relative block h-10 w-10 shrink-0 transition-transform duration-500 group-hover/logo:scale-105 md:h-14 md:w-14">
              <Image src="/assets/logo-noback.png" alt="Al BARAKA FOR IMPORT & EXPORT logo" fill priority sizes="44px" className="object-contain" />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={clsx(
                  "font-playfair text-lg font-semibold transition-colors duration-300 md:text-2xl",
                  isDarkHeader ? "text-white" : "text-[var(--color-earth-dark)]"
                )}
                style={isDarkHeader ? { textShadow: "0 2px 14px rgba(0,0,0,0.55)" } : undefined}
              >
                AL BARAKA
              </span>
              <span
                className={clsx(
                  "mt-0.5 font-space-mono text-[7px] uppercase tracking-[0.24em] transition-colors duration-300 sm:text-[9px]",
                  isDarkHeader ? "text-white/80" : "text-[var(--color-earth-mid)]"
                )}
                style={isDarkHeader ? { textShadow: "0 1px 10px rgba(0,0,0,0.45)" } : undefined}
              >
                IMPORT & EXPORT
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={clsx(
                  "group relative py-2 text-[15px] font-semibold transition-colors duration-300",
                  isActive(link.path)
                    ? isDarkHeader
                      ? "font-bold text-[var(--color-gold-light)]"
                      : "font-bold text-[var(--color-green-forest)]"
                    : isDarkHeader
                      ? "text-white hover:text-[var(--color-gold-light)]"
                      : "text-[var(--color-earth-dark)] hover:text-[var(--color-green-forest)]"
                )}
                style={isDarkHeader ? { textShadow: "0 2px 12px rgba(0,0,0,0.55)" } : undefined}
              >
                {link.name}
                <span
                  className={clsx(
                    "absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300",
                    isDarkHeader ? "bg-[var(--color-gold-light)]" : "bg-[var(--color-green-forest)]",
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={clsx(
                "hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 md:inline-flex",
                isDarkHeader
                  ? "bg-white text-[var(--color-green-forest)] hover:bg-[var(--color-leaf-soft)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
                  : "bg-[var(--color-green-forest)] text-white hover:shadow-[0_8px_20px_rgba(15,107,58,0.25)]"
              )}
            >
              Request a Quote
              <Leaf className="h-3.5 w-3.5" />
            </Link>

            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              className={clsx(
                "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border transition-colors duration-300 lg:hidden",
                isDarkHeader
                  ? "border-white/25 bg-white/15 text-white hover:bg-white/25"
                  : "border-black/10 bg-white text-[var(--color-earth-dark)] hover:bg-black/5"
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.span className="absolute h-8 w-8 rounded-full bg-[var(--color-green-forest)]/10" animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
              <Menu className="relative h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[110] overflow-hidden bg-[var(--color-earth-dark)] lg:hidden"
          >
            <motion.div variants={mobilePanelVariants} className="absolute inset-0 bg-[var(--color-earth-dark)]" />
            <motion.div variants={mobilePanelVariants} className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,198,63,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(242,193,78,0.18),transparent_40%)]" />
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
              exit={{ opacity: 0, y: -30, rotate: -12, transition: { duration: 0.24 } }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-28 h-32 w-32 opacity-20"
            >
              <Image src="/assets/leaf.png" alt="" fill className="object-contain" aria-hidden="true" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }}
              exit={{ opacity: 0, y: 34, rotate: 16, transition: { duration: 0.24 } }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 bottom-24 h-40 w-40 opacity-20"
            >
              <Image src="/assets/leaf.png" alt="" fill className="object-contain" aria-hidden="true" />
            </motion.div>

            <motion.div
              variants={mobileContentVariants}
              className="relative flex h-full flex-col overflow-y-auto px-5 pb-6 pt-5"
            >
              <motion.div variants={mobileItemVariants} className="flex items-center justify-between">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                  <span className="relative block h-12 w-12 rounded-2xl bg-white/10 p-2 backdrop-blur-md">
                    <Image src="/assets/logo-noback.png" alt="Al BARAKA FOR IMPORT & EXPORT logo" fill className="object-contain p-1" />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="font-playfair text-xl font-semibold text-white">AL BARAKA</span>
                    <span className="mt-1 font-space-mono text-[8px] uppercase tracking-[0.28em] text-white/65">IMPORT & EXPORT</span>
                  </span>
                </Link>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9, rotate: 6 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation"
                >
                  <motion.span animate={{ rotate: [0, 90, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
                    <X className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </motion.div>

              <motion.div variants={mobileItemVariants} className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.08] p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <motion.div variants={mobileItemVariants}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
                    <Leaf className="h-3 w-3" /> Egyptian Export Supplier
                  </span>
                  <h2 className="mt-5 font-playfair text-4xl font-semibold leading-tight">
                    Fresh & Frozen
                    <span className="block text-[var(--color-green-bright)]">Products</span>
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Reliable supply for importers, distributors, wholesalers, supermarkets, and food trading companies.
                  </p>
                </motion.div>

                <nav className="mt-7 grid gap-3">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={mobileItemVariants}>
                      <Link
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={clsx(
                          "group flex items-center justify-between rounded-2xl border px-4 py-4 transition-all",
                          isActive(link.path)
                            ? "border-[var(--color-green-bright)]/40 bg-[var(--color-green-forest)]/45 text-white"
                            : "border-white/10 bg-white/8 text-white/82 hover:border-white/20 hover:bg-white/12"
                        )}
                      >
                        <span className="font-playfair text-2xl font-semibold">{link.name}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div variants={mobileItemVariants} className="mt-5 grid grid-cols-3 gap-2">
                  {mobileHighlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-center">
                      <item.icon className="mx-auto mb-2 h-5 w-5 text-[var(--color-green-bright)]" />
                      <span className="block text-[10px] font-bold leading-4 text-white/72">{item.label}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={mobileItemVariants} className="mt-5 grid gap-3">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-green-forest)] shadow-lg">
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/10 p-4 text-xs text-white/68">
                    <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[var(--color-green-bright)]" /> +20 10 01269029</span>
                    <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[var(--color-green-bright)]" /> info@albaraka-eg.org</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
