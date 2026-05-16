"use client";

import { useEffect, useState } from "react";
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
  { name: "Quality", path: "/about#quality" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path.includes("#")) return false;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-white/95 shadow-[0_4px_30px_rgba(16,38,26,0.06)] backdrop-blur-xl border-b border-black/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 md:px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Al Baraka home"
        >
          <span className="relative block h-10 w-10 md:h-11 md:w-11 shrink-0">
            <Image
              src="/assets/logo-noback.png"
              alt="Al Baraka Fruits and Vegetables logo"
              fill
              priority
              sizes="44px"
              className="object-contain"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-playfair text-xl md:text-2xl font-semibold text-[var(--color-earth-dark)]">
              AL BARAKA
            </span>
            <span className="mt-0.5 font-space-mono text-[9px] uppercase tracking-[0.3em] text-[var(--color-earth-mid)]">
              Fruits & Vegetables
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
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
                  "flex items-center gap-1 py-2 text-[15px] font-medium transition-colors duration-300",
                  isActive(link.path)
                    ? "text-[var(--color-green-forest)]"
                    : "text-[var(--color-earth-dark)]/70 hover:text-[var(--color-green-forest)]"
                )}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 transition-transform duration-300",
                      dropdownOpen && link.hasDropdown && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Active / Hover underline */}
              <span
                className={clsx(
                  "absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-[var(--color-green-forest)] transition-all duration-300",
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />

              {/* Products Dropdown */}
              {link.hasDropdown && (
                <div
                  className={clsx(
                    "absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3 transition-all duration-300",
                    dropdownOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  )}
                >
                  <div className="rounded-2xl bg-white p-2.5 border border-black/5 shadow-[0_20px_50px_rgba(16,38,26,0.1)]">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--color-leaf-soft)]"
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

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--color-green-forest)] px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_8px_20px_rgba(15,107,58,0.25)] hover:-translate-y-0.5"
          >
            Request a Quote
            <Leaf className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-earth-dark)] lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-[var(--color-cream)] px-5 py-5 lg:hidden"
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
                    alt="Al Baraka logo"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="font-playfair text-xl font-semibold text-[var(--color-earth-dark)]">
                  AL BARAKA
                </span>
              </Link>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "block border-b border-black/10 py-4 font-playfair text-2xl transition-colors",
                      isActive(link.path)
                        ? "text-[var(--color-green-forest)]"
                        : "text-[var(--color-earth-dark)]"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-green-forest)] px-6 py-3.5 font-bold text-white text-center"
              >
                Request a Quote <Leaf className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
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
    </header>
  );
}
