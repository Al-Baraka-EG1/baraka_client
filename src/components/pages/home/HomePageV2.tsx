"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
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

const heroStats = [
  { value: `${products.length}+`, label: "Catalog Items" },
  { value: "4", label: "Product Families" },
  { value: "2", label: "Fresh / Frozen" },
];

const heroFamilies = [
  { label: "Fresh Vegetables", icon: Sprout },
  { label: "Fresh Fruits", icon: Leaf },
  { label: "Frozen Vegetables", icon: Snowflake },
  { label: "Frozen Fruits", icon: Snowflake },
];

const exportFlow = [
  { title: "Select", copy: "Product specs", icon: Sprout },
  { title: "Pack", copy: "Flexible options", icon: PackageCheck },
  { title: "Document", copy: "Export support", icon: ClipboardCheck },
  { title: "Ship", copy: "Buyer market", icon: Truck },
];

const heroLeaves = [
  { className: "left-[6%] top-[18%] h-14 w-14 md:h-20 md:w-20", delay: 0.25, rotate: -24 },
  { className: "right-[8%] top-[17%] h-12 w-12 md:h-16 md:w-16", delay: 0.5, rotate: 34 },
  { className: "left-[3%] top-[56%] h-10 w-10 md:h-14 md:w-14", delay: 0.75, rotate: -54 },
  { className: "right-[5%] bottom-[20%] h-16 w-16 md:h-24 md:w-24", delay: 0.95, rotate: 52 },
  { className: "left-[14%] bottom-[16%] h-10 w-10 md:h-14 md:w-14", delay: 1.15, rotate: 18 },
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
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,24,16,0.44)_0%,rgba(10,24,16,0.28)_42%,rgba(10,24,16,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(85,165,111,0.28),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(225,181,111,0.13),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/14 to-transparent" />
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:92px_92px]" />

        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-[42%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.30, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          animate={{ scale: [1.08, 1, 1.08], opacity: [0.13, 0.25, 0.13] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          {heroLeaves.map((leaf) => (
            <motion.div
              key={leaf.className}
              initial={{ opacity: 0, y: 28, rotate: leaf.rotate - 10 }}
              animate={{ opacity: 0.68, y: [0, -16, 0], rotate: [leaf.rotate, leaf.rotate + 8, leaf.rotate] }}
              transition={{
                delay: leaf.delay,
                y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8 },
              }}
              className={`absolute ${leaf.className}`}
            >
              <Image src={images.greenLeaf} alt="" fill className="object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)]" aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 mx-auto flex min-h-[100dvh] flex-col justify-center px-5 pb-36 pt-36 text-center md:px-8 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainerVariants} className="mx-auto max-w-5xl">
            <motion.div variants={staggerItemVariants} className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-white/16 bg-white/[0.10] px-4 py-3 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <span className="relative block h-11 w-11 shrink-0 rounded-xl bg-white/12 p-1.5">
                <Image src="/assets/logo-noback.png" alt="Al Baraka logo" fill priority className="object-contain p-1" />
              </span>
              <span className="text-left leading-none">
                <span className="block font-space-mono text-[9px] font-bold uppercase tracking-[0.36em] text-[var(--color-gold-light)]">Company</span>
                <span className="mt-1 block font-playfair text-3xl font-semibold tracking-wide text-white md:text-4xl">AL BARAKA</span>
              </span>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                <Leaf className="h-3.5 w-3.5 text-[var(--color-green-bright)]" />
                Fresh & Frozen Agricultural Products From Egypt
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItemVariants}
              className="font-playfair text-[clamp(3.1rem,8.4vw,8.3rem)] font-bold leading-[0.88] tracking-tight text-white"
              style={{ textShadow: "0 6px 32px rgba(0,0,0,0.42)" }}
            >
              Supply Egypt&apos;s
              <br />
              <span className="font-cormorant italic text-[var(--color-green-bright)]">finest produce</span>
            </motion.h1>

            <motion.p
              variants={staggerItemVariants}
              className="mx-auto mt-8 max-w-3xl text-base font-medium leading-8 text-white/90 md:text-xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.34)" }}
            >
              Al Baraka supports importers, distributors, wholesalers, supermarkets, and food trading companies with reliable fresh and frozen product programs, flexible packaging, and professional shipment support.
            </motion.p>

            <motion.div variants={staggerItemVariants} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/products" className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--color-green-forest)] px-9 py-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(15,107,58,0.34)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-green-fresh)] hover:shadow-[0_18px_42px_rgba(15,107,58,0.45)]">
                Explore Export Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/35 bg-white/8 px-9 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[var(--color-earth-dark)]">
                Request Supply Details
              </Link>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/14 bg-white/[0.10] px-5 py-4 text-white backdrop-blur-md">
                  <div className="font-playfair text-3xl font-bold md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/62">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-10 left-1/2 z-20 hidden w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 lg:block"
        >
          <div className="overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.10] text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[1.1fr_1.25fr]">
              <div className="border-b border-white/12 p-5 lg:border-b-0 lg:border-r">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold-light)]">Product Families</span>
                  <span className="rounded-full bg-[var(--color-green-bright)]/14 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-green-bright)]">Export Ready</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {heroFamilies.map((family) => (
                    <div key={family.label} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3">
                      <family.icon className="h-4 w-4 shrink-0 text-[var(--color-green-bright)]" />
                      <span className="text-xs font-bold text-white/78">{family.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/64">Supply Workflow</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/52">From Egypt to your market</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {exportFlow.map((step, index) => (
                    <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center">
                      {index < exportFlow.length - 1 && <span className="absolute -right-3 top-1/2 hidden h-px w-4 bg-white/18 md:block" />}
                      <step.icon className="mx-auto mb-2 h-4 w-4 text-[var(--color-green-bright)]" />
                      <span className="block text-xs font-bold text-white">{step.title}</span>
                      <span className="mt-1 hidden text-[10px] leading-4 text-white/54 sm:block">{step.copy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15, duration: 0.8 }} className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex lg:bottom-3">
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
