"use client";

import Link from "next/link";
import {
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Globe,
  HeartHandshake,
} from "lucide-react";
import { CldImage } from "next-cloudinary";
import { products } from "@/lib/products";
import ProductCard from "@/components/custom/ProductCard";
import AnimatedCounter from "@/components/custom/AnimatedCounter";
import useHomeAnimations from "@/hooks/useHomeAnimations";

export default function HomePage() {
  const {
    heroRef,
    heroContentRef,
    bgRef,
    showcaseRef,
    aboutRef,
    qualityRef,
    statsRef,
  } = useHomeAnimations();

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center pt-20"
      >
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        >
          <CldImage
            src="hero-bg" // Assumes an asset named hero-bg in Cloudinary
            alt="Farm fresh produce"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-earth-dark)]/80 via-[var(--color-earth-dark)]/60 to-[var(--color-earth-dark)]/90" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div
            ref={heroContentRef}
            className="max-w-4xl flex flex-col items-center"
          >
            <span className="inline-block text-[var(--color-gold)] font-dm-sans font-bold tracking-[0.2em] uppercase text-sm mb-6">
              Premium Egyptian Produce
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-playfair font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Nature&apos;s Finest,
              <br />
              Delivered with Integrity
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-dm-sans max-w-2xl mb-12 leading-relaxed">
              Al Baraka brings farm-fresh fruits and vegetables from the
              world&apos;s best growing regions directly to your table. ISO &
              HACCP certified. Trusted since 1995.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
              <Link
                href="/products"
                className="bg-[var(--color-green-fresh)] hover:bg-[var(--color-green-bright)] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 text-center"
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/5 text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/70 font-space-mono text-xs md:text-sm uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" /> ISO
                Certified
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" />{" "}
                HACCP Certified
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--color-gold)]" /> Since
                1995
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[var(--color-gold)]" /> 100%
                Natural
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* 2. PRODUCTS SHOWCASE */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3 block">
                Fresh Selection
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-earth-dark)]">
                From Farm to Your Table
              </h2>
            </div>
            <p className="text-[var(--color-earth-mid)] font-dm-sans max-w-sm">
              Six premium products. Zero compromises on quality.
            </p>
          </div>

          <div
            ref={showcaseRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
          >
            {products.map((product, idx) => (
              <ProductCard
                key={product.slug}
                product={product}
                featured={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW & STATS */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={aboutRef}
            className="flex flex-col lg:flex-row gap-16 items-center mb-24"
          >
            <div className="lg:w-1/2 relative">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <CldImage
                  src="about-preview" // Assuming about-preview asset exists
                  alt="Harvesting fresh produce"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="font-playfair text-2xl font-bold text-[var(--color-earth-dark)] mb-1">
                  Trusted Since
                </p>
                <p className="font-space-mono text-4xl text-[var(--color-gold)]">
                  1995
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col items-start">
              <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-4">
                Our Heritage
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-earth-dark)] mb-6 leading-tight">
                Built on Trust,
                <br />
                Grown with Integrity
              </h2>
              <p className="text-[var(--color-earth-mid)] font-dm-sans text-lg mb-8 leading-relaxed">
                Founded on the principles of integrity and excellence, Al Baraka
                started as a small vision to connect local farmers with families
                who value premium produce. Today we serve clients across the
                Middle East and beyond, partnering with certified growers in
                Egypt and importing premium Polish produce through our sister
                company Marianna in Warsaw, Poland.
              </p>

              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "Direct farmer partnerships",
                  "Cold chain technology",
                  "ISO & HACCP certified",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[var(--color-earth-dark)] font-medium"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-green-fresh)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="text-[var(--color-gold)] font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-[var(--color-gold-light)] transition-colors"
              >
                Read Our Full Story <ArrowDown className="w-4 h-4 -rotate-90" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="bg-[var(--color-earth-dark)]">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-y border-white/10">
            <AnimatedCounter
              value={30}
              suffix="+"
              label="Years of Excellence"
            />
            <AnimatedCounter value={6} suffix="+" label="Premium Products" />
            <AnimatedCounter value={100} suffix="%" label="Natural" />
            <AnimatedCounter value={2} label="Countries" />
          </div>
        </div>
      </section>

      {/* 4. QUALITY PROMISE & CTA */}
      <section className="bg-[var(--color-green-forest)] py-24 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              The Al Baraka Standard
            </h2>
            <p className="text-white/80 font-dm-sans max-w-2xl mx-auto">
              Our commitment to excellence ensures that every product meets the
              highest global standards.
            </p>
          </div>

          <div
            ref={qualityRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
          >
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[var(--color-gold)] transition-all duration-300 group">
              <Leaf className="w-10 h-10 text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Freshness First
              </h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                Harvested at peak ripeness and delivered with speed and care
                using state-of-the-art cold chain logistics.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[var(--color-gold)] transition-all duration-300 group">
              <ShieldCheck className="w-10 h-10 text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Quality Standards
              </h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                Rigorous inspection at every stage before anything leaves our
                facility. Zero compromises on safety.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[var(--color-gold)] transition-all duration-300 group">
              <Globe className="w-10 h-10 text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Trusted Partnerships
              </h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                Working directly with certified farmers in Egypt and Poland who
                share our values and commitment to nature.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[var(--color-gold)] transition-all duration-300 group">
              <HeartHandshake className="w-10 h-10 text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-playfair font-bold mb-3">
                Customer Commitment
              </h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                Your satisfaction and health are our ultimate measure of
                success. We build long-term relationships based on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[var(--color-earth-dark)] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-green-forest)]/20 animate-pulse" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Ready to Elevate Your Supply Chain?
          </h2>
          <p className="text-xl text-white/80 font-dm-sans max-w-2xl mx-auto mb-12">
            Partner with Al Baraka for bulk orders, private labeling, or
            distribution across the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-earth-dark)] px-10 py-4 rounded-full font-bold transition-transform hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-full font-bold transition-colors hover:bg-white/5"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
