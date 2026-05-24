"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import ProductCard from "@/components/custom/ProductCard";
import AnimatedCounter from "@/components/custom/AnimatedCounter";
import TransparentImage from "@/components/custom/TransparentImage";
import {
  clipRevealVariants,
  scaleRevealVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import { images, videos } from "@/lib/images";
import { products } from "@/lib/products";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Leaf,
  ShieldCheck,
  Snowflake,
  Truck,
  Award,
  Sprout,
  HeartHandshake,
  PackageCheck,
} from "lucide-react";
import { qualityItems } from "@/constants/homedata";

const trustBadges = [
  { icon: Sprout, label: "100% Natural", desc: "Farm-fresh quality" },
  { icon: Award, label: "ISO Certified", desc: "Global standards" },
  { icon: ShieldCheck, label: "Since 1995", desc: "30+ years trusted" },
  { icon: Snowflake, label: "Cold Chain", desc: "End-to-end freshness" },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Immersive 3-layer parallax coordinates for premium depth
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yFrame = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <div className="overflow-hidden bg-[var(--color-cream)]" ref={containerRef}>
      {/* ============================================
          HERO SECTION — Immersive Nature Loop & Leaf Canopy
          ============================================ */}
      <section className="relative min-h-[100dvh] bg-black overflow-hidden flex items-center">
        {/* Layer 1: Cloudinary Looping Video Background */}
        <motion.div
          style={{ y: yVideo }}
          className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden"
        >
          <video
            src={videos.hero}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-[1.05]"
          />
        </motion.div>

        {/* Layer 2: Radial Contrast Gradient & Blends */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/35 to-[var(--color-cream)]" />

        {/* Layer 3: Organic Leafs-Frame Canopy Parallax Overlay */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.95 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yFrame }}
          className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        >
          <Image
            src="/assets/leafs-frame.png"
            alt=""
            fill
            priority
            className="object-cover w-full h-full opacity-50"
            aria-hidden="true"
          />
        </motion.div>

        {/* Floating Leaves — Organically surrounding the centered content */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[15]">
          {/* Leaf 1 — Top-left corner */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -20 }}
            animate={{ opacity: 0.85, y: 0, rotate: -25 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[10%] left-[5%] w-14 h-14 md:w-20 md:h-20 leaf-drift"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full" />
          </motion.div>

          {/* Leaf 2 — Left of headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="absolute top-[32%] left-[6%] md:left-[12%] w-12 h-12 md:w-16 md:h-16 leaf-drift-slow"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full rotate-[20deg]" />
          </motion.div>

          {/* Leaf 3 — Right of headline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 0.75, x: 0 }}
            transition={{ delay: 0.8, duration: 1.1 }}
            className="absolute top-[28%] right-[6%] md:right-[12%] w-16 h-16 md:w-22 md:h-22 leaf-drift"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full rotate-[40deg]" />
          </motion.div>

          {/* Leaf 4 — Bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.65, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="absolute bottom-[18%] left-[8%] md:left-[15%] w-10 h-10 md:w-14 md:h-14 leaf-drift-slow"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full rotate-[-35deg]" />
          </motion.div>

          {/* Leaf 5 — Bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute bottom-[20%] right-[8%] md:right-[14%] w-12 h-12 md:w-18 md:h-18 leaf-drift"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full rotate-[55deg]" />
          </motion.div>

          {/* Leaf 6 — Top-right accent */}
          <motion.div
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 0.6, rotate: 45 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="absolute top-[14%] right-[4%] w-10 h-10 md:w-14 md:h-14 float-gentle-delayed"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full" />
          </motion.div>

          {/* Leaf 7 — Mid-left accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-[55%] left-[3%] w-8 h-8 md:w-12 md:h-12 float-gentle"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full rotate-[-60deg]" />
          </motion.div>

          {/* Leaf 8 — Mid-right accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute top-[50%] right-[3%] w-9 h-9 md:w-13 md:h-13 leaf-drift-slow"
          >
            <TransparentImage src={images.greenLeaf} alt="" fill className="w-full h-full rotate-[70deg]" />
          </motion.div>
        </div>

        {/* Hero Content — Centered Layout */}
        <motion.div
          style={{ y: yText }}
          className="container relative z-20 mx-auto px-5 md:px-8 lg:px-12 pt-32 pb-20 lg:pt-36 lg:pb-24 w-full flex items-center justify-center min-h-[80vh]"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="flex flex-col items-center text-center max-w-3xl z-20"
          >
            {/* Small Label */}
            <motion.div
              variants={staggerItemVariants}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-white uppercase border border-white/15 backdrop-blur-md"
            >
              <Leaf className="h-3.5 w-3.5 text-[var(--color-green-bright)]" />
              Premium Egyptian Produce
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItemVariants}
              className="font-playfair text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold leading-[1.05] text-white tracking-tight"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)" }}
            >
              Fresh From{" "}
              <span className="text-[var(--color-green-bright)] italic font-cormorant">Nature,</span>
              <br />
              Delivered With Care
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItemVariants}
              className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/90 font-medium"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              Premium fruits and vegetables sourced from trusted farms in Egypt
              and Poland, delivered with cold-chain precision and unmatched
              quality directly to you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--color-green-forest)] px-8 py-4 font-bold text-white text-sm shadow-[0_12px_28px_rgba(15,107,58,0.3)] transition-all hover:bg-[var(--color-green-fresh)] hover:shadow-[0_16px_36px_rgba(15,107,58,0.45)] hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/35 px-8 py-4 font-bold text-white text-sm backdrop-blur-md transition-all hover:bg-white hover:text-[var(--color-earth-dark)] hover:border-white hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Trust badges row — below CTA */}
            <motion.div
              variants={staggerItemVariants}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8"
            >
              {[
                { icon: Sprout, text: "100% Natural" },
                { icon: Award, text: "ISO Certified" },
                { icon: ShieldCheck, text: "Since 1995" },
                { icon: Snowflake, text: "Cold Chain" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white/80">
                  <badge.icon className="h-4 w-4 text-[var(--color-green-bright)]" />
                  <span className="text-xs font-bold tracking-wide uppercase" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}>
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator — Minimal, elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1 backdrop-blur-sm"
          >
            <div className="w-1 h-2 rounded-full bg-[var(--color-green-bright)]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          TRUST BADGES — Minimal 4-Column Row
          ============================================ */}
      <section className="relative z-30 px-5 md:px-8 bg-[var(--color-cream)] pb-16 md:pb-20 mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariants}
          className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {trustBadges.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItemVariants}
              className="flex items-center gap-3 md:gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-green-forest)]/8 text-[var(--color-green-forest)]">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[var(--color-earth-dark)]">{item.label}</span>
                <span className="text-xs text-[var(--color-earth-mid)]">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================
          PRODUCTS SECTION
          ============================================ */}
      <section className="relative bg-[var(--color-cream)] py-20 md:py-28 overflow-hidden">
        {/* Decorative leaf */}
        <div className="absolute top-20 right-10 w-24 h-24 opacity-20 pointer-events-none rotate-12">
          <Image src={images.greenLeaf} alt="" fill className="object-contain" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={clipRevealVariants}
            className="flex flex-col items-center mx-auto mb-14 md:mb-20 max-w-2xl text-center"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-green-forest)] uppercase mb-4">
              Our Products
            </span>
            <h2 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-bold text-[var(--color-earth-dark)] leading-[1.1]">
              Our Fresh <span className="italic text-[var(--color-green-forest)]">Selection</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[var(--color-earth-mid)] leading-relaxed max-w-lg">
              Handpicked freshness, naturally cultivated and delivered directly to your business.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainerVariants}
            className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.slice(0, 6).map((product, index) => (
              <motion.div key={product.slug} variants={staggerItemVariants}>
                <ProductCard product={product} featured={index === 0} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-green-forest)] px-8 py-3.5 font-bold text-[var(--color-green-forest)] text-sm transition-all hover:bg-[var(--color-green-forest)] hover:text-white"
            >
              View Full Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          ABOUT PREVIEW SECTION
          ============================================ */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto grid items-center gap-12 md:gap-16 px-5 md:px-8 lg:grid-cols-2">
          {/* Left: Image with organic shape */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeftVariants}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-[500px] mx-auto lg:mx-0">
              {/* Organic rounded mask */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: "40% 60% 55% 45% / 55% 45% 55% 45%" }}
              >
                <Image
                  src={images.aboutPreview}
                  alt="Fresh produce heritage at Al Baraka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Soft shadow behind */}
              <div
                className="absolute inset-4 bg-[var(--color-green-forest)]/10 -z-10"
                style={{ borderRadius: "45% 55% 50% 50% / 50% 50% 50% 50%", filter: "blur(30px)" }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 md:right-8 rounded-2xl bg-white px-6 py-4 shadow-[0_12px_30px_rgba(16,38,26,0.1)] border border-black/5"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--color-leaf-soft)] flex items-center justify-center text-[var(--color-green-forest)]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-playfair text-xl font-bold text-[var(--color-earth-dark)]">30+</div>
                  <div className="text-[10px] font-bold text-[var(--color-earth-mid)] uppercase tracking-wider">Years of Trust</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRightVariants}
            className="lg:pl-8"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-green-forest)] uppercase mb-4 block">
              About Al Baraka
            </span>

            <h2 className="font-playfair text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.1] text-[var(--color-earth-dark)]">
              Built on Trust,{" "}
              <span className="italic text-[var(--color-green-forest)]">Grown with Integrity</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-earth-mid)]">
              For over 30 years, Al Baraka has been a symbol of quality,
              reliability, and excellence in agricultural exports. From our
              farms to your table, we ensure freshness, safety, and satisfaction
              in every shipment.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { title: "Direct Farmer Partnerships", desc: "Working closely with growers in Egypt and Poland" },
                { title: "Global Certifications", desc: "ISO, HACCP, and Global GAP certified facilities" },
                { title: "Advanced Cold-Chain", desc: "State-of-the-art logistics preserving peak freshness" },
              ].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  key={item.title}
                  className="flex gap-3 p-3 rounded-xl transition-colors hover:bg-[var(--color-cream)]"
                >
                  <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-[var(--color-green-forest)]/10 flex items-center justify-center text-[var(--color-green-forest)]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-earth-dark)] text-sm">{item.title}</h4>
                    <p className="text-[var(--color-earth-mid)] text-sm mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-earth-dark)] px-7 py-3.5 font-bold text-white text-sm transition-all hover:bg-[var(--color-green-forest)] hover:shadow-lg"
              >
                Discover Our Heritage <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          METRICS ROW
          ============================================ */}
      <section className="bg-[var(--color-cream)] py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: 30, suffix: "+", label: "Years Experience" },
              { value: 6, suffix: "", label: "Product Lines" },
              { value: 100, suffix: "%", label: "Natural & Safe" },
              { value: 2, suffix: "", label: "Countries Served" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                className="text-center"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PROMISE SECTION
          ============================================ */}
      <section className="relative bg-[var(--color-cream)] py-20 md:py-28 overflow-hidden">
        {/* Decorative leaf */}
        <div className="absolute top-16 left-10 w-20 h-20 opacity-15 pointer-events-none -rotate-12">
          <Image src={images.greenLeaf} alt="" fill className="object-contain" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={clipRevealVariants}
            className="mx-auto mb-14 md:mb-20 max-w-2xl text-center flex flex-col items-center"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[var(--color-green-forest)] uppercase mb-4">
              Our Promise
            </span>
            <h2 className="font-playfair text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-[var(--color-earth-dark)] leading-[1.1]">
              Quality in <span className="italic text-[var(--color-green-forest)]">Every Step</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[var(--color-earth-mid)] max-w-lg">
              We oversee every detail from planting to export, ensuring you receive only the best.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {qualityItems.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItemVariants}
                className="group rounded-3xl bg-white p-8 text-center shadow-[0_8px_24px_rgba(16,38,26,0.04)] border border-black/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,107,58,0.08)] hover:-translate-y-1"
              >
                {/* Circular Icon Container */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[var(--color-earth-dark)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-earth-mid)]">
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION — Rounded Dark Green Banner
          ============================================ */}
      <section className="relative bg-[var(--color-cream)] pb-20 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleRevealVariants}
            className="relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-[var(--color-earth-dark)] p-10 md:p-16 lg:p-20 text-white"
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 bg-[url('/assets/Texture-Overlay_pd7zx5.png')] opacity-15 mix-blend-overlay pointer-events-none" />

            {/* Decorative leaves inside CTA */}
            <div className="absolute top-8 right-8 w-16 h-16 opacity-10 pointer-events-none">
              <Image src={images.greenLeaf} alt="" fill className="object-contain rotate-45" aria-hidden="true" />
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10 pointer-events-none">
              <Image src={images.greenLeaf} alt="" fill className="object-contain -rotate-12" aria-hidden="true" />
            </div>

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-white/80 uppercase mb-5 border border-white/10">
                  <Globe2 className="h-3.5 w-3.5" /> Global Export
                </span>
                <h2 className="font-playfair text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1]">
                  Ready to Work With Us?
                </h2>
                <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">
                  Let us build a fresh and fruitful partnership. Contact our sales team today to discuss your supply needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[var(--color-green-forest)] text-sm transition-transform hover:scale-105 shadow-lg"
                >
                  Contact Sales <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-bold text-white text-sm transition-all hover:bg-white/10"
                >
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
