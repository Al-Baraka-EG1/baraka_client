"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Globe2,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Sprout,
  Truck,
} from "lucide-react";

import ProductCard from "@/components/custom/ProductCard";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { clipRevealVariants, scaleRevealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { images, videos } from "@/lib/images";
import { products } from "@/lib/products";
import { ProductsType } from "@/types/ProductsTypes";

const featuredSlugs = [
  "colored-peppers",
  "fresh-carrots",
  "fresh-potatoes",
  "frozen-strawberries",
  "frozen-mango",
  "frozen-okra-zero",
];

const featuredProducts = featuredSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is ProductsType => Boolean(product));

const catalogGroups = [
  {
    title: "Fresh Vegetables",
    copy: "Carrots, potatoes, colored peppers, broccoli, garlic, onions, and green beans.",
    icon: Sprout,
    href: "/products",
  },
  {
    title: "Fresh Fruits",
    copy: "Seasonal Egyptian citrus prepared according to market requirements.",
    icon: Leaf,
    href: "/products",
  },
  {
    title: "Frozen Vegetables",
    copy: "Peas, beans, molokhia, okra, spinach, broccoli, and prepared mixes.",
    icon: Snowflake,
    href: "/products",
  },
  {
    title: "Frozen Fruits",
    copy: "Strawberries and mango for reliable year-round supply programs.",
    icon: Snowflake,
    href: "/products",
  },
];

const trustItems = [
  { icon: PackageCheck, label: "Export Handling", detail: "Documentation and shipment support" },
  { icon: ShieldCheck, label: "Quality Selection", detail: "Products selected for market needs" },
  { icon: Truck, label: "Reliable Supply", detail: "Professional wholesale planning" },
  { icon: Globe2, label: "Egyptian Origin", detail: "Fresh and frozen agricultural products" },
];

const stats = [
  { value: products.length, label: "Catalog Items" },
  { value: 4, label: "Main Categories" },
  { value: 2, label: "Fresh & Frozen" },
];

export default function HomePageV2() {
  return (
    <div className="overflow-hidden bg-[var(--color-cream)]">
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--color-earth-dark)]">
        <video
          src={videos.hero}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--color-cream)]" />
        <Image src="/assets/leafs-frame.png" alt="" fill priority className="object-cover opacity-40" aria-hidden="true" />

        <div className="container relative z-10 mx-auto px-5 pb-20 pt-36 text-center md:px-8 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainerVariants} className="mx-auto max-w-4xl">
            <motion.div variants={staggerItemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5 text-[var(--color-green-bright)]" />
              Al Baraka for Import & Export
            </motion.div>

            <motion.h1 variants={staggerItemVariants} className="font-playfair text-[clamp(3rem,7vw,6.4rem)] font-bold leading-[0.98] tracking-tight text-white" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.35)" }}>
              Fresh & Frozen
              <br />
              <span className="font-cormorant italic text-[var(--color-green-bright)]">Produce From Egypt</span>
            </motion.h1>

            <motion.p variants={staggerItemVariants} className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-white/88 md:text-lg" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
              A reliable Egyptian supplier for importers, distributors, wholesalers, supermarkets, and food trading companies.
            </motion.p>

            <motion.div variants={staggerItemVariants} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/products" className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--color-green-forest)] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(15,107,58,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-green-fresh)] hover:shadow-[0_16px_36px_rgba(15,107,58,0.45)]">
                Explore Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/35 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[var(--color-earth-dark)]">
                Request a Quote
              </Link>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-white backdrop-blur-md">
                  <div className="font-playfair text-3xl font-bold">{stat.value}+</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 bg-[var(--color-cream)] px-5 pb-16 pt-10 md:px-8 md:pb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainerVariants} className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {trustItems.map((item) => (
            <motion.div key={item.label} variants={staggerItemVariants} className="flex items-center gap-3 md:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-green-forest)]/8 text-[var(--color-green-forest)]">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[var(--color-earth-dark)]">{item.label}</span>
                <span className="text-xs text-[var(--color-earth-mid)]">{item.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <FloatingLeaves />
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={clipRevealVariants} className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center md:mb-16">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-green-forest)]">Our Product Range</span>
            <h2 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] text-[var(--color-earth-dark)]">
              Fresh & Frozen <span className="italic text-[var(--color-green-forest)]">Export Catalog</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-earth-mid)] md:text-lg">
              A focused range of Egyptian agricultural products with flexible packaging, competitive prices, and professional export handling.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainerVariants} className="mb-10 grid gap-4 md:grid-cols-4">
            {catalogGroups.map((group) => (
              <motion.div key={group.title} variants={staggerItemVariants} className="rounded-3xl border border-black/10 bg-[var(--color-cream)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-green-forest)]/30 hover:bg-[var(--color-leaf-mist)]">
                <group.icon className="mb-4 h-7 w-7 text-[var(--color-green-forest)]" />
                <h3 className="font-playfair text-2xl font-bold text-[var(--color-earth-dark)]">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-earth-mid)]">{group.copy}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainerVariants} className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.div key={product.slug} variants={staggerItemVariants}>
                <ProductCard product={product} featured={index === 0} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex justify-center">
            <Link href="/products" className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-green-forest)] px-8 py-3.5 text-sm font-bold text-[var(--color-green-forest)] transition-all hover:bg-[var(--color-green-forest)] hover:text-white">
              View Full Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-cream)] py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scaleRevealVariants} className="relative aspect-[4/5] overflow-hidden rounded-[38px] bg-[var(--color-leaf-soft)] shadow-[0_24px_70px_rgba(16,38,26,0.08)]">
            <Image src={images.aboutPreview} alt="Fresh produce heritage at Al Baraka" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={clipRevealVariants}>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-green-forest)]">Why Work With Al Baraka?</span>
            <h2 className="font-playfair text-[clamp(2.3rem,4.5vw,3.7rem)] font-bold leading-[1.1] text-[var(--color-earth-dark)]">
              Reliable supply, clear communication, and professional export support.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--color-earth-mid)] md:text-lg">
              We help buyers source fresh and frozen products from Egypt with quality-focused selection, flexible packaging options, and shipment support based on current requirements.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Reliable supply from Egypt",
                "Competitive export prices",
                "Flexible packaging options",
                "Professional documentation and shipment support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/70 p-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-green-forest)]" />
                  <span className="text-sm font-bold text-[var(--color-earth-dark)]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-cream)] pb-20 md:pb-28">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={scaleRevealVariants} className="relative overflow-hidden rounded-[32px] bg-[var(--color-earth-dark)] p-10 text-white md:rounded-[48px] md:p-16 lg:p-20">
            <div className="absolute inset-0 bg-[url('/assets/Texture-Overlay_pd7zx5.png')] opacity-15 mix-blend-overlay" />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
                  <Boxes className="h-3.5 w-3.5" /> Export Partnerships
                </span>
                <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1]">Ready to source from Egypt?</h2>
                <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                  Share your required products, specifications, packaging, quantity, and destination. Our team will prepare supply details for your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-green-forest)] shadow-lg transition-transform hover:scale-105">
                  Contact Sales <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10">
                  View Catalog
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
