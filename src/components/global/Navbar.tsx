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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6">
      <div
        className={clsx(
          "mx-auto flex w-full max-w-[1480px] items-center justify-between border transition-all duration-300",
          scrolled
            ? "rounded-[28px] border-black/5 bg-white/[0.92] px-4 py-3 shadow-[0_18px_50px_rgba(16,38,26,0.1)] backdrop-blur-xl md:px-6"
            : "rounded-none border-transparent bg-white/0 px-1 py-2 md:px-0",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Al Baraka home"
        >
          <span className="relative block h-12 w-12 shrink-0 md:h-14 md:w-14">
            <Image
              src="/assets/logo-noback.png"
              alt="Al Baraka Fruits and Vegetables logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-playfair text-2xl font-semibold text-[var(--color-green-forest)]">
              AL BARAKA
            </span>
            <span className="mt-1 font-space-mono text-[9px] uppercase tracking-[0.36em] text-[var(--color-earth-mid)]">
              Fruits & Vegetables
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              <Link
                href={link.path}
                className={clsx(
                  "flex items-center gap-1 py-2 text-[15px] font-medium transition-colors",
                  isActive(link.path)
                    ? "text-[var(--color-green-forest)]"
                    : "text-[var(--color-earth-dark)]/80 hover:text-[var(--color-green-forest)]",
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
              <span
                className={clsx(
                  "absolute bottom-0 left-0 h-px bg-[var(--color-green-forest)] transition-all duration-300",
                  isActive(link.path) ? "w-full" : "w-0 group-hover:w-full",
                )}
              />

              {link.hasDropdown && (
                <div className="invisible absolute left-1/2 top-full w-[330px] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="soft-card overflow-hidden rounded-[24px] p-3">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="flex items-center gap-3 rounded-[18px] px-3 py-3 transition-colors hover:bg-[var(--color-leaf-soft)]"
                      >
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: product.color }}
                        />
                        <span className="min-w-0">
                          <span className="block font-medium text-[var(--color-earth-dark)]">
                            {product.name}
                          </span>
                          <span className="text-xs capitalize text-[var(--color-earth-mid)]">
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

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-green-forest)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,107,58,0.22)] transition-transform hover:-translate-y-0.5 md:flex"
          >
            Get in Touch
            <Leaf className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-earth-dark)] lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--color-cream)] px-5 py-5 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="relative block h-12 w-12">
                  <Image
                    src="/assets/logo-noback.png"
                    alt="Al Baraka logo"
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="font-playfair text-2xl font-semibold text-[var(--color-green-forest)]">
                  AL BARAKA
                </span>
              </Link>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
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
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block border-b border-black/10 py-5 font-playfair text-4xl text-[var(--color-earth-dark)]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-[18px] border border-black/10 bg-white p-4 text-sm font-medium text-[var(--color-earth-dark)]"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
