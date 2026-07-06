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
  },
  {
    title: "Fresh Fruits",
    copy: "Seasonal Egyptian citrus prepared according to market requirements.",
    icon: Leaf,
  },
  {
    title: "Frozen Vegetables",
    copy: "Peas, beans, molokhia, okra, spinach, broccoli, and prepared mixes.",
    icon: Snowflake,
  },
  {
    title: "Frozen Fruits",
    copy: "Strawberries and mango for reliable year-round supply programs.",
    icon: Snowflake,
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

const heroLeaves = [
  { className: "left-[5%] top-[14%] h-14 w-14 md:h-20 md:w-20", delay: 0.2, rotate: -22 },
  { className: "right-[6%] top-[16%] h-12 w-12 md:h-16 md:w-16", delay: 0.45, rotate: 38 },
  { className: "left-[3%] top-[52%] h-10 w-10 md:h-14 md:w-14", delay: 0.7, rotate: -54 },
  { className: "right-[4%] bottom-[18%] h-16 w-16 md:h-24 md:w-24", delay: 0.95, rotate: 52 },
  { className: "left-[12%] bottom-[13%] h-10 w-10 md:h-14 md:w-14", delay: 1.15, rotate: 18 },
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
          className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/26 to-black/5" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/30 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-green-bright)]/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          {heroLeaves.map((leaf) => (
            <motion.div
              key={leaf.className}
              initial={{ opacity: 0, y: 30, rotate: leaf.rotate - 10 }}
              animate={{ opacity: 0.78, y: [0, -18, 0], rotate: [leaf.rotate, leaf.rotate + 8, leaf.rotate] }}
              transition={{ delay: leaf.delay, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8 } }}
              className={`absolute ${leaf.className}`}
            >
              <Image src={images.greenLeaf} alt="" fill className="object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)]" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto grid min-h-[100dvh] items-center gap-12 px-5 pb-24 pt-36 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:pt-32">
          <motion.div initial="hidden" animate="visible" variants={staggerContainerVariants} className="max-w-3xl text-center lg:text-left">
            <motion.div variants={staggerItemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5 text-[var(--color-green-bright)]" />
              Al Baraka for Import & Export
            </motion.div>

            <motion.h1 variants={staggerItemVariants} className="font-playfair text-[clamp(3.1rem,7.2vw,6.8rem)] font-bold leading-[0.96] tracking-tight text-white" style={{ textShadow: "0 5px 28px rgba(0,0,0,0.42)" }}>
              Fresh & Frozen
              <br />
              <span className="font-cormorant italic text-[var(--color-green-bright)]">Produce From Egypt</span>
            </motion.h1>

            <motion.p variants={staggerItemVariants} className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-white/90 md:text-lg lg:mx-0" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.32)" }}>
              Reliable Egyptian supply for importers, distributors, wholesalers, supermarkets, and food trading companies — with professional export handling from product selection to shipment support.
            </motion.p>

            <motion.div variants={staggerItemVariants} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Fresh Vegetables", "Frozen Fruits", "Frozen Vegetables", "Flexible Packaging"].map((item) => (
                <span key={item} className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-bold text-white/82 backdrop-blur-md">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/products" className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--color-green-forest)] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(15,107,58,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-green-fresh)] hover:shadow-[0_16px_36px_rgba(15,107,58,0.45)]">
                Explore Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/35 bg-white/8 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[var(--color-earth-dark)]">
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto hidden w-full max-w-xl lg:block">
            <div className="absolute -inset-6 rounded-[44px] bg-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/16 bg-white/[0.14] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="relative h-[420px] overflow-hidden rounded-[30px] bg-[var(--color-earth-dark)]/30">
                <Image src={images.heroCrate} alt="Al Baraka fresh produce crate" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl border border-white/16 bg-white/14 px-4 py-3 text-white backdrop-blur-md">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-white/62">Product Range</span>
                  <span className="mt-1 block font-playfair text-3xl font-bold">{products.length}+ Items</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/12 bg-white/16 px-4 py-4 text-center text-white backdrop-blur-md">
                      <div className="font-playfair text-3xl font-bold">{stat.value}+</div>
                      <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {catalogGroups.slice(0, 4).map((group) => (
                  <div key={group.title} className="rounded-2xl border border-white/12 bg-white/12 p-4 text-white">
                    <group.icon className="mb-3 h-5 w-5 text-[var(--color-green-bright)]" />
                    <span className="block text-sm font-bold">{group.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-white/62">Export-ready supply</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex h-9 w-6 justify-center rounded-full border border-white/35 p-1">
            <span className="h-2 w-1 rounded-full bg-[var(--color-green-bright)]" />
          </motion.div>
        </motion.div>
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
