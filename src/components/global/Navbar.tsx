"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { products } from "@/lib/products";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  useGSAP(() => {
    if (mobileMenuOpen && mobileMenuRef.current && linksRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, delay: 0.1, ease: "power2.out" }
      );
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-[var(--color-earth-dark)]/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-[var(--color-gold)] transition-transform group-hover:scale-110" />
          <span className="font-playfair text-2xl font-bold tracking-wider text-[var(--color-gold)]">
            AL BARAKA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.path}
                className={clsx(
                  "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors",
                  pathname === link.path ? "text-[var(--color-gold)]" : "text-white hover:text-[var(--color-gold-light)]"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {/* Gold Underline Animation */}
              <div
                className={clsx(
                  "absolute -bottom-1 left-0 h-[2px] bg-[var(--color-gold)] transition-all duration-300",
                  pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}
              />

              {/* Dropdown */}
              {link.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                  <div className="p-2 flex flex-col">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-cream)] rounded-lg transition-colors"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: product.color }}
                        />
                        <span className="text-[var(--color-earth-dark)] font-medium text-sm">
                          {product.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link
            href="/contact"
            className="bg-[var(--color-green-fresh)] hover:bg-[var(--color-green-bright)] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 top-[72px] bg-[var(--color-earth-dark)] z-40 md:hidden overflow-y-auto"
        >
          <div ref={linksRef} className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <Link
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-playfair text-white hover:text-[var(--color-gold)]"
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="flex flex-col gap-3 pl-4 border-l border-white/20">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-white/80 hover:text-white"
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: product.color }}
                        />
                        <span className="text-lg">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[var(--color-green-fresh)] text-white text-center py-4 rounded-full text-lg font-semibold mt-4"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
