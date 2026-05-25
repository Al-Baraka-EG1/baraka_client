"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { products } from "@/lib/products";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products", hasDropdown: true },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

/* ------------------------------------------------------------------ */
//  Easing tokens
const EASE_SMOOTH_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_SMOOTH_ARR: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION_BASE = 500; // ms

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();
  const lastY = useRef(0);
  const ticking = useRef(false);

  /* -------------------- Scroll handler (RAF-throttled) -------------------- */
  const updateScrollState = useCallback(() => {
    const currentY = window.scrollY;

    setScrolled(currentY > 20);

    if (currentY <= 60) {
      setVisible(true);
    } else if (currentY > lastY.current) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    lastY.current = currentY;
    ticking.current = false;
  }, []);

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

  /* -------------------- Body lock on mobile menu -------------------- */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileMenuOpen]);

  /* -------------------- Close menus on route change -------------------- */
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  /* -------------------- Helpers -------------------- */
  const isActive = useCallback(
    (path: string) => {
      if (path === "/") return pathname === "/";
      if (path.includes("#")) return false;
      return pathname.startsWith(path);
    },
    [pathname]
  );

  // Navbar sits on homepage hero video → transparent dark text
  const isDarkHeader = pathname === "/" && !scrolled;

  /* ------------------------------------------------------------------ */
  return (
    <>
      <header
        className={clsx(
          "fixed left-0 right-0 z-[100] w-full will-change-transform",
          "transition-[transform,opacity] duration-500"
        )}
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          opacity: visible ? 1 : 0,
          transitionTimingFunction: EASE_SMOOTH_CSS,
        }}
      >

        {/* Inner shell — layout snaps instantly, only colour/shadow animate */}
        <div
          className={clsx(
            "relative mx-auto flex items-center justify-between",
          scrolled
            ? "mx-4 md:mx-auto mt-3 max-w-[1280px] rounded-full border border-black/[0.06] bg-white/70 px-6 py-2.5 shadow-[0_12px_40px_rgba(16,38,26,0.08)]"
            : clsx(
                "mt-0 w-full max-w-[1400px] px-6 md:px-8 py-4",
                isDarkHeader
                  ? "border-b border-white/[0.08]"
                  : "border-b border-black/[0.06] bg-white/30"
              )
          )}
          style={{
            transitionProperty: "background, border-color, border-radius, box-shadow, backdrop-filter",
            transitionDuration: `${DURATION_BASE}ms`,
            transitionTimingFunction: EASE_SMOOTH_CSS,
            backdropFilter: scrolled ? "blur(16px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          }}
        >
          {/* -------------------- Logo -------------------- */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group/logo"
            aria-label="Al BARAKA FOR IMPORT & EXPORT home"
          >
            <span className="relative block h-10 w-10 md:h-14 md:w-14 shrink-0 transition-transform duration-500 group-hover/logo:scale-105">
              <Image
                src="/assets/logo-noback.png"
                alt="Al BARAKA FOR IMPORT & EXPORT logo"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span
                className={clsx(
                  "font-playfair text-xl md:text-2xl font-semibold transition-colors duration-300",
                  isDarkHeader
                    ? "text-white"
                    : "text-[var(--color-earth-dark)]"
                )}
                style={
                  isDarkHeader
                    ? { textShadow: "0 2px 14px rgba(0,0,0,0.55)" }
                    : undefined
                }
              >
                AL BARAKA
              </span>
              <span
                className={clsx(
                  "mt-0.5 font-space-mono text-[9px] uppercase tracking-[0.3em] transition-colors duration-300",
                  isDarkHeader
                    ? "text-white/80"
                    : "text-[var(--color-earth-mid)]"
                )}
                style={
                  isDarkHeader
                    ? { textShadow: "0 1px 10px rgba(0,0,0,0.45)" }
                    : undefined
                }
              >
                IMPORT & EXPORT
              </span>
            </span>
          </Link>

          {/* -------------------- Desktop Nav -------------------- */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="group relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.path}
                  className={clsx(
                    "flex items-center gap-1 py-2 text-[15px] font-semibold transition-colors duration-300",
                    isActive(link.path)
                      ? isDarkHeader
                        ? "text-[var(--color-gold-light)] font-bold"
                        : "text-[var(--color-green-forest)] font-bold"
                      : isDarkHeader
                        ? "text-white hover:text-[var(--color-gold-light)]"
                        : "text-[var(--color-earth-dark)] hover:text-[var(--color-green-forest)]"
                  )}
                  style={
                    isDarkHeader
                      ? { textShadow: "0 2px 12px rgba(0,0,0,0.55)" }
                      : undefined
                  }
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={clsx(
                        "h-4 w-4 transition-transform duration-300",
                        dropdownOpen && link.hasDropdown && "rotate-180",
                        isDarkHeader
                          ? "text-[var(--color-gold-light)]"
                          : "text-current"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Active / hover underline */}
                <span
                  className={clsx(
                    "absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300",
                    isDarkHeader
                      ? "bg-[var(--color-gold-light)]"
                      : "bg-[var(--color-green-forest)]",
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />

                {/* Products Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={clsx(
                      "absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3",
                      "transition-[opacity,transform] duration-300"
                    )}
                    style={{
                      transitionTimingFunction: EASE_SMOOTH_CSS,
                      opacity: dropdownOpen ? 1 : 0,
                      transform: dropdownOpen
                        ? "translateX(-50%) translateY(0)"
                        : "translateX(-50%) translateY(8px)",
                      pointerEvents: dropdownOpen ? "auto" : "none",
                      visibility: dropdownOpen ? "visible" : "hidden",
                    }}
                  >
                    <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-2.5 border border-white/10 shadow-[0_20px_50px_rgba(16,38,26,0.12)]">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--color-leaf-soft)]/70"
                        >
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="min-w-0">
                            <span className="block font-medium text-[var(--color-earth-dark)] text-[14px]">
                              {product.name}
                            </span>
                            <span className="text-[11px] capitalize text-[var(--color-earth-mid)]">
                              {product.origin} / {product.category} {product.type}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* -------------------- CTA + Mobile Toggle -------------------- */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={clsx(
                "hidden md:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                isDarkHeader
                  ? "bg-white text-[var(--color-green-forest)] hover:bg-[var(--color-leaf-soft)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
                  : "bg-[var(--color-green-forest)] text-white hover:shadow-[0_8px_20px_rgba(15,107,58,0.25)]"
              )}
            >
              Request a Quote
              <Leaf className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
                isDarkHeader
                  ? "border-white/25 bg-white/15 text-white hover:bg-white/25"
                  : "border-black/10 bg-white text-[var(--color-earth-dark)] hover:bg-black/5"
              )}
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

      {/* ==================== Mobile Menu ==================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_SMOOTH_ARR }}
            className="fixed inset-0 z-[110] overflow-y-auto bg-[var(--color-cream)] px-5 py-5 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <span className="relative block h-10 w-10">
                  <Image
                    src="/assets/logo-noback.png"
                    alt="Al BARAKA FOR IMPORT & EXPORT logo"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-playfair text-lg font-semibold text-[var(--color-earth-dark)]">
                    AL BARAKA
                  </span>
                  <span className="mt-0.5 font-space-mono text-[8px] uppercase tracking-[0.2em] text-[var(--color-earth-mid)]">
                    IMPORT & EXPORT
                  </span>
                </span>
              </Link>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5 text-[var(--color-earth-dark)]" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.35,
                    ease: EASE_SMOOTH_ARR,
                  }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "block border-b border-black/10 py-4 font-playfair text-2xl transition-colors duration-200",
                      isActive(link.path)
                        ? "text-[var(--color-green-forest)] font-semibold"
                        : "text-[var(--color-earth-dark)]"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: EASE_SMOOTH_ARR }}
              className="mt-8"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-green-forest)] px-6 py-3.5 font-bold text-white text-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(15,107,58,0.30)]"
              >
                Request a Quote <Leaf className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: EASE_SMOOTH_ARR }}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-black/10 bg-white p-3.5 text-sm font-medium text-[var(--color-earth-dark)] transition-colors hover:bg-[var(--color-leaf-soft)]"
                >
                  {product.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>);
}
