"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import ProductCard from "@/components/custom/ProductCard";
import AnimatedCounter from "@/components/custom/AnimatedCounter";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
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
import { ArrowRight, CheckCircle2, Globe2, Leaf } from "lucide-react";
import { qualityItems, trustItems } from "@/constants/homedata";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[var(--color-cream)]">
      <section className="relative min-h-[860px] bg-white pt-28 md:pt-32">
        <picture className="absolute inset-y-0 right-0 hidden w-3/5 opacity-90 md:block">
          <source media="(min-width: 768px)" srcSet={images.heroBgAlt} />
          <Image
            src={images.heroBgAlt}
            alt=""
            fill
            priority
            sizes="60vw"
            className="object-cover object-right"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:bg-gradient-to-r" />

        {/* Floating Pepper Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[5%] top-24 w-32 h-32 md:w-48 md:h-48 z-20"
        >
          <Image
            src={images.pepperPng1}
            alt=""
            fill
            className="object-contain opacity-90 drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="pointer-events-none absolute left-[8%] bottom-40 w-24 h-24 md:w-36 md:h-36 z-20"
        >
          <Image
            src={images.pepperPng2}
            alt=""
            fill
            className="object-contain opacity-85 drop-shadow-xl"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto grid min-h-[720px] items-center gap-10 px-4 md:px-8 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
            className="max-w-3xl"
          >
            <div className="section-label mb-5">Premium Egyptian Produce</div>
            <h1 className="font-playfair text-6xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] md:text-8xl lg:text-[112px]">
              Fresh From{" "}
              <span className="text-[var(--color-green-forest)]">Nature,</span>
              <br />
              Delivered With Care
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-earth-mid)]">
              Premium fruits and vegetables sourced from trusted farms in Egypt
              and Poland, delivered with cold-chain precision and unmatched
              quality.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white shadow-[0_18px_34px_rgba(15,107,58,0.22)] transition-transform hover:-translate-y-0.5"
              >
                Explore Products <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] border border-[var(--color-green-forest)] px-7 py-4 font-semibold text-[var(--color-green-forest)] transition-colors hover:bg-[var(--color-leaf-soft)]"
              >
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative min-h-[420px] md:min-h-[590px] overflow-hidden rounded-[32px] shadow-[0_30px_60px_rgba(16,38,26,0.15)]"
          >
            <video
              src={videos.hero}
              className="absolute inset-0 h-full w-full object-cover opacity-[0.85]"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="relative z-10 border-y border-black/10 bg-white/90">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="container mx-auto grid gap-0 px-4 py-7 md:grid-cols-4 md:px-8"
          >
            {trustItems.map((item) => (
              <motion.div
                key={item.value}
                variants={staggerItemVariants}
                className="flex items-center gap-4 border-black/10 py-4 md:border-r md:px-8 md:last:border-r-0"
              >
                <item.icon className="h-10 w-10 shrink-0 text-[var(--color-green-forest)]" />
                <span>
                  <span className="block font-semibold text-[var(--color-earth-dark)]">
                    {item.value}
                  </span>
                  <span className="text-sm text-[var(--color-earth-mid)]">
                    {item.detail}
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-24 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={clipRevealVariants}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="section-label mb-3">Our Products</div>
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)] md:text-6xl">
              Our Fresh Selection
            </h2>
            <p className="mt-4 text-[var(--color-earth-mid)]">
              Handpicked freshness, naturally delivered to you.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainerVariants}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {products.slice(0, 5).map((product, index) => (
              <motion.div key={product.slug} variants={staggerItemVariants}>
                <ProductCard product={product} featured={index === 0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto grid items-center gap-14 px-4 md:px-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={slideInLeftVariants}
            className="relative"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleRevealVariants}
              className="relative h-[460px] overflow-hidden rounded-[42%_58%_40%_60%/45%_42%_58%_55%]"
            >
              <Image
                src={images.aboutPreview}
                alt="Fresh produce heritage at Al Baraka"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="soft-card absolute -bottom-8 left-4 rounded-[22px] px-7 py-5">
              <span className="text-sm text-[var(--color-green-forest)]">
                Since
              </span>
              <span className="block font-playfair text-5xl text-[var(--color-earth-dark)]">
                1995
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={slideInRightVariants}
          >
            <div className="section-label mb-4">About Al Baraka</div>
            <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)] md:text-6xl">
              Built on Trust,
              <br />
              <span className="text-[var(--color-green-forest)]">
                Grown
              </span>{" "}
              with Integrity
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-earth-mid)]">
              For over 30 years, Al Baraka has been a symbol of quality,
              reliability, and excellence in fruits and vegetables. From our
              farms to your table, we ensure freshness, safety, and satisfaction
              in every delivery.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Direct farmer partnerships",
                "ISO and HACCP certified",
                "Egypt and Poland supply network",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 text-[var(--color-earth-dark)]"
                >
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-green-forest)]" />
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-[10px] border border-[var(--color-green-forest)] px-7 py-4 font-semibold text-[var(--color-green-forest)] hover:bg-[var(--color-leaf-soft)]"
            >
              Learn More About Us <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        <div className="container mx-auto mt-20 px-4 md:px-8">
          <div className="botanical-shell grid overflow-hidden rounded-[32px] border border-black/10 md:grid-cols-4">
            <AnimatedCounter
              value={30}
              suffix="+"
              label="Years of Experience"
            />
            <AnimatedCounter value={6} label="Product Lines" />
            <AnimatedCounter value={100} suffix="%" label="Natural and Safe" />
            <AnimatedCounter value={2} label="Countries Served" />
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={clipRevealVariants}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="section-label mb-3">Our Promise</div>
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)] md:text-6xl">
              Quality in Every Step
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {qualityItems.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItemVariants}
                className="soft-card rounded-[24px] p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                  <item.icon className="h-9 w-9" />
                </div>
                <h3 className="font-playfair text-3xl text-[var(--color-earth-dark)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-earth-mid)]">
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="relative overflow-hidden rounded-[28px] bg-[var(--color-green-forest)] p-8 text-white md:p-12"
          >
            <video
              src={videos.qualityProcess}
              className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto_auto]">
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl">
                  Ready to Work With Us?
                </h2>
                <p className="mt-3 text-white/80">
                  Let us build a fresh and fruitful partnership.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-white px-7 py-4 font-semibold text-[var(--color-green-forest)]"
              >
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] border border-white/50 px-7 py-4 font-semibold text-white"
              >
                View Products <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <Globe2 className="absolute right-10 top-8 h-20 w-20 text-white/10" />
            <Leaf className="absolute -left-4 -bottom-4 h-32 w-32 text-white/[0.06] rotate-45" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
