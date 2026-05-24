"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Leaf,
  Award,
  FileCheck2,
  ScanLine,
} from "lucide-react";
import { motion } from "motion/react";
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
import { milestones, values } from "@/constants/aboutdata";

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24">
      <section className="relative min-h-[580px] lg:min-h-[660px] bg-[var(--color-cream)] overflow-hidden">
        {/* Background image with elegant overlay */}
        <Image
          src={images.aboutHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/95 via-[var(--color-cream)]/70 to-[var(--color-cream)]" />

        {/* Decorative elements */}
        <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-[var(--color-green-forest)]/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-[580px] lg:min-h-[660px] flex-col items-center justify-center px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-sm text-[var(--color-earth-mid)]"
            >
              <Link href="/" className="hover:text-[var(--color-green-forest)] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[var(--color-green-forest)] font-medium">About Us</span>
            </motion.div>

            <h1 className="font-playfair text-5xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] sm:text-6xl md:text-7xl lg:text-8xl">
              About{" "}
              <span className="text-[var(--color-green-forest)]">Al Baraka</span>
            </h1>
            <div className="mx-auto mt-6 h-[2px] w-24 bg-[var(--color-gold)]" />
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-earth-mid)] md:text-xl">
              Bringing nature&apos;s finest from Egypt to tables around the
              world.
            </p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4"
            >
              {[
                { value: "1995", label: "Established" },
                { value: "EG & PL", label: "Sourced" },
                { value: "Global", label: "Export" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/5 bg-white/60 p-4 backdrop-blur-sm">
                  <div className="font-playfair text-2xl font-semibold text-[var(--color-green-forest)] md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-earth-mid)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto grid items-center gap-14 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={slideInLeftVariants}
          >
            <div className="section-label mb-5">Our Story</div>
            <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)] md:text-6xl">
              Rooted in Egypt,
              <br />
              Growing Together
              <br />
              with Poland
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[var(--color-earth-mid)]">
              <p>
                Al Baraka was founded on the belief that great produce starts
                with great partnerships. From the fertile lands of Egypt to the
                heart of Europe, our journey is built on trust, quality, and a
                shared vision for healthier lives.
              </p>
              <p>
                Through Marianna, our sister company in Warsaw, we source
                premium Polish apples while maintaining the same strict
                standards that guide our Egyptian fresh and frozen product
                lines.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-[10px] border border-[var(--color-green-forest)] px-7 py-4 font-semibold text-[var(--color-green-forest)] hover:bg-[var(--color-leaf-soft)]"
            >
              Our Partnership <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={slideInRightVariants}
            className="relative"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleRevealVariants}
              className="relative h-[540px] overflow-hidden rounded-[28px] bg-[var(--color-leaf-soft)]"
            >
              <video
                src={videos.aboutHeritage}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Al Baraka partnership video"
              />
            </motion.div>
            <div className="soft-card absolute left-6 top-10 rounded-[24px] px-8 py-7 text-center">
              <span className="block text-3xl">EG</span>
              <span className="mt-2 block font-semibold text-[var(--color-earth-dark)]">
                Egypt
              </span>
              <span className="my-5 block h-px bg-black/10" />
              <span className="block text-3xl">PL</span>
              <span className="mt-2 block font-semibold text-[var(--color-earth-dark)]">
                Poland
              </span>
            </div>
          </motion.div>
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
            <div className="section-label mb-3">Our Values</div>
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)] md:text-6xl">
              The Principles That Define Us
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainerVariants}
            className="grid gap-7 md:grid-cols-3"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItemVariants}
                className="soft-card rounded-[24px] p-9"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                  <value.icon className="h-9 w-9" />
                </div>
                <h3 className="font-playfair text-4xl text-[var(--color-earth-dark)]">
                  {value.title}
                </h3>
                <p className="mt-5 text-[var(--color-earth-mid)] leading-7">
                  {value.copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="section-label mb-3">Our Journey</div>
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)]">
              Milestones of Growth
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainerVariants}
            className="relative grid gap-8 md:grid-cols-4"
          >
            {milestones.map(([year, title, copy]) => (
              <motion.div
                key={year}
                variants={staggerItemVariants}
                className="relative text-center"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-green-forest)] bg-white text-[var(--color-green-forest)]">
                  <Globe2 className="h-8 w-8" />
                </div>
                <div className="font-space-mono text-sm font-bold text-[var(--color-green-forest)]">
                  {year}
                </div>
                <h3 className="mt-3 font-playfair text-2xl text-[var(--color-earth-dark)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-earth-mid)]">
                  {copy}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="quality" className="relative bg-white pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="botanical-shell grid items-center gap-10 rounded-[32px] border border-black/10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <div className="section-label mb-4">Our Commitment</div>
              <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)]">
                Certified Quality,
                <br />
                You Can Trust
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-earth-mid)]">
                We adhere to international standards and continuously invest in
                quality, food safety, traceability, and sustainable handling.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white"
              >
                Our Quality Standards <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "GLOBALG.A.P", icon: Leaf },
                { name: "GRASP", icon: ScanLine },
                { name: "ISO 22000", icon: FileCheck2 },
                { name: "HACCP", icon: Award },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-full bg-white p-6 text-center shadow-sm"
                >
                  <cert.icon className="mx-auto mb-4 h-9 w-9 text-[var(--color-green-forest)]" />
                  <span className="font-semibold text-[var(--color-earth-dark)]">
                    {cert.name}
                  </span>
                  <span className="mt-2 block text-xs text-[var(--color-earth-mid)]">
                    Certified
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
