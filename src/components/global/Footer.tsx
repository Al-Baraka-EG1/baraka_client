import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { products } from "@/lib/products";

const footerProductSlugs = [
  "fresh-carrots",
  "fresh-potatoes",
  "colored-peppers",
  "frozen-strawberries",
  "frozen-mango",
  "frozen-okra-zero",
];

export default function Footer() {
  const footerProducts = footerProductSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean) as typeof products;

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white text-[var(--color-earth-dark)]">
      <Leaf className="absolute -right-12 -top-12 h-48 w-48 rotate-12 text-[var(--color-leaf-soft)]" />
      <div className="container mx-auto px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <span className="relative block h-14 w-14">
                <Image src="/assets/logo-noback.png" alt="Al BARAKA FOR IMPORT & EXPORT logo" fill className="object-contain" />
              </span>
              <span>
                <span className="block font-playfair text-3xl font-semibold text-[var(--color-green-forest)]">AL BARAKA</span>
                <span className="font-space-mono text-[9px] uppercase tracking-[0.36em] text-[var(--color-earth-mid)]">IMPORT & EXPORT</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-earth-mid)]">
              Reliable Egyptian supplier of fresh and frozen fruits and vegetables for importers, distributors, wholesalers, supermarkets, and food trading companies.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green-forest)] text-white transition-transform hover:-translate-y-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green-forest)] text-white transition-transform hover:-translate-y-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green-forest)] text-white transition-transform hover:-translate-y-0.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="section-label mb-5">Quick Links</h3>
            <div className="grid gap-3 text-sm text-[var(--color-earth-mid)]">
              <Link href="/" className="hover:text-[var(--color-green-forest)]">Home</Link>
              <Link href="/products" className="hover:text-[var(--color-green-forest)]">Products</Link>
              <Link href="/about" className="hover:text-[var(--color-green-forest)]">About Us</Link>
              <Link href="/contact" className="hover:text-[var(--color-green-forest)]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="section-label mb-5">Featured Products</h3>
            <div className="grid gap-3 text-sm text-[var(--color-earth-mid)]">
              {footerProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="hover:text-[var(--color-green-forest)]">
                  {product.name}
                </Link>
              ))}
              <Link href="/products" className="mt-1 inline-flex items-center gap-2 font-bold text-[var(--color-green-forest)] hover:text-[var(--color-green-fresh)]">
                View all products <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="section-label mb-5">Contact Us</h3>
            <div className="grid gap-4 text-sm text-[var(--color-earth-mid)]">
              <span className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-green-forest)]" />
                <span className="leading-6">+20 10 01269029<br />+20 2 24142974</span>
              </span>
              <span className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-green-forest)]" />
                info@albaraka-eg.org
              </span>
              <span className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--color-green-forest)]" />
                64 Rabaa Investment Buildings, Nasr City, 11765 Cairo, Egypt
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 text-xs text-[var(--color-earth-mid)] md:flex-row">
          <p>Copyright {new Date().getFullYear()} Al BARAKA FOR IMPORT & EXPORT. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[var(--color-green-forest)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-green-forest)]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
