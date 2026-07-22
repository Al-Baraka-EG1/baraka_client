"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Leaf, Mail, Menu, PackageCheck, Phone, Snowflake, Sprout, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
const DURATION_BASE = 500;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const lastY = useRef(0);
  const ticking = useRef(false);
  const lockedScrollY = useRef(0);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const updateScrollState = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 20);

    if (mobileMenuOpen || currentY <= 60) {
      setVisible(true);
    } else {
      setVisible(currentY <= lastY.current);
    }

    lastY.current = currentY;
    ticking.current = false;
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateScrollState]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    lockedScrollY.current = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${lockedScrollY.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      window.scrollTo(0, lockedScrollY.current);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) closeMobileMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMobileMenu, mobileMenuOpen]);

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  const isActive = useCallback(
    (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path)),
    [pathname]
  );

  const isDarkHeader = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className="fixed left-0 right-0 z-[100] w-full transition-[transform,opacity] duration-500 will-change-transform"
        style={{
          transform: visible ? "translate3d(0,0,0)" : "translate3d(0,-100%,0)",
          opacity: visible ? 1 : 0,
          transitionTimingFunction: EASE_SMOOTH_CSS,
        }}
      >
        <div
          className={clsx(
            "relative mx-auto flex items-center justify-between",
            scrolled
              ? "mx-3 mt-3 max-w-[1280px] rounded-full border border-black/[0.06] bg-white/90 px-4 py-2.5 shadow-[0_12px_40px_rgba(16,38,26,0.08)] md:mx-auto md:px-6"
              : clsx(
                  "mt-0 w-full max-w-[1400px] px-5 py-4 md:px-8",
                  isDarkHeader ? "border-b border-white/[0.08]" : "border-b border-black/[0.06] bg-white/95"
                )
          )}
          style={{
            transitionProperty: "background, border-color, border-radius, box-shadow",
            transitionDuration: `${DURATION_BASE}ms`,
            transitionTimingFunction: EASE_SMOOTH_CSS,
          }}
        >
          <Link href="/" className="group/logo flex min-w-0 items-center gap-2.5" aria-label="Al BARAKA FOR IMPORT & EXPORT home">
            <span className="relative block h-10 w-10 shrink-0 transition-transform duration-500 group-hover/logo:scale-105 md:h-14 md:w-14">
              <Image src="/assets/logo-noback.png" alt="Al BARAKA FOR IMPORT & EXPORT logo" fill priority sizes="56px" className="object-contain" />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className={clsx("truncate font-playfair text-lg font-semibold transition-colors duration-300 md:text-2xl", isDarkHeader ? "text-white" : "text-[var(--color-earth-dark)]")}>AL BARAKA</span>
              <span className={clsx("mt-0.5 truncate font-space-mono text-[7px] uppercase tracking-[0.24em] transition-colors duration-300 sm:text-[9px]", isDarkHeader ? "text-white/80" : "text-[var(--color-earth-mid)]")}>IMPORT & EXPORT</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={clsx(
                  "group relative py-2 text-[15px] font-semibold transition-colors duration-300",
                  isActive(link.path)
                    ? isDarkHeader ? "font-bold text-[var(--color-gold-light)]" : "font-bold text-[var(--color-green-forest)]"
                    : isDarkHeader ? "text-white hover:text-[var(--color-gold-light)]" : "text-[var(--color-earth-dark)] hover:text-[var(--color-green-forest)]"
                )}
              >
                {link.name}
                <span className={clsx("absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300", isDarkHeader ? "bg-[var(--color-gold-light)]" : "bg-[var(--color-green-forest)]", isActive(link.path) ? "w-full" : "w-0 group-hover:w-full")} />
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link href="/contact" className={clsx("hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 md:inline-flex", isDarkHeader ? "bg-white text-[var(--color-green-forest)]" : "bg-[var(--color-green-forest)] text-white")}>Request a Quote <Leaf className="h-3.5 w-3.5" /></Link>
            <button
              type="button"
              className={clsx("flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border transition-colors duration-200 lg:hidden", isDarkHeader ? "border-white/25 bg-white/15 text-white" : "border-black/10 bg-white text-[var(--color-earth-dark)]")}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[110] h-[100dvh] overflow-hidden bg-[var(--color-earth-dark)] lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,198,63,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(242,193,78,0.12),transparent_44%)]" />
            <motion.div
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? { x: 0 } : { x: "100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full min-h-0 flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] [-webkit-overflow-scrolling:touch]"
            >
              <div className="flex items-center justify-between">
                <Link href="/" onClick={closeMobileMenu} className="flex min-w-0 items-center gap-3">
                  <span className="relative block h-12 w-12 shrink-0 rounded-2xl bg-white/10">
                    <Image src="/assets/logo-noback.png" alt="Al BARAKA FOR IMPORT & EXPORT logo" fill sizes="48px" className="object-contain p-1" />
                  </span>
                  <span className="flex min-w-0 flex-col leading-none">
                    <span className="truncate font-playfair text-xl font-semibold text-white">AL BARAKA</span>
                    <span className="mt-1 truncate font-space-mono text-[8px] uppercase tracking-[0.28em] text-white/65">IMPORT & EXPORT</span>
                  </span>
                </Link>
                <button type="button" className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-white/10 text-white" onClick={closeMobileMenu} aria-label="Close navigation"><X className="h-5 w-5" /></button>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.07] p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold-light)]"><Leaf className="h-3 w-3" /> Egyptian Export Supplier</span>
                <h2 className="mt-4 font-playfair text-[clamp(2rem,10vw,2.75rem)] font-semibold leading-[1.05]">Fresh & Frozen <span className="block text-[var(--color-green-bright)]">Products</span></h2>
                <p className="mt-3 text-sm leading-6 text-white/70">Reliable supply for importers, distributors, wholesalers, supermarkets, and food trading companies.</p>

                <nav className="mt-5 grid gap-2.5" aria-label="Mobile navigation links">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.path} onClick={closeMobileMenu} className={clsx("group flex min-h-14 touch-manipulation items-center justify-between rounded-2xl border px-4 py-3.5 transition-colors", isActive(link.path) ? "border-[var(--color-green-bright)]/40 bg-[var(--color-green-forest)]/45 text-white" : "border-white/10 bg-white/[0.06] text-white/85 active:bg-white/12")}>
                      <span className="font-playfair text-xl font-semibold sm:text-2xl">{link.name}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  ))}
                </nav>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {mobileHighlights.map((item) => (
                    <div key={item.label} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 text-center sm:p-3">
                      <item.icon className="mx-auto mb-2 h-5 w-5 text-[var(--color-green-bright)]" />
                      <span className="block break-words text-[9px] font-bold leading-4 text-white/72 sm:text-[10px]">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3">
                  <Link href="/contact" onClick={closeMobileMenu} className="flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-green-forest)]">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
                  <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/10 p-4 text-xs text-white/68">
                    <a href="tel:+201001269029" className="flex min-w-0 items-center gap-2 break-all"><Phone className="h-3.5 w-3.5 shrink-0 text-[var(--color-green-bright)]" /> +20 10 01269029</a>
                    <a href="mailto:info@albaraka-eg.org" className="flex min-w-0 items-center gap-2 break-all"><Mail className="h-3.5 w-3.5 shrink-0 text-[var(--color-green-bright)]" /> info@albaraka-eg.org</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
