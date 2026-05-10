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
      <section className="relative min-h-[680px] bg-white">
        <Image
          src={images.aboutHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="container relative z-10 mx-auto grid min-h-[680px] items-center gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
          >
            <div className="mb-5 text-[var(--color-earth-mid)]">
              <Link href="/" className="hover:text-[var(--color-green-forest)]">
                Home
              </Link>
              <span className="mx-3">/</span>
              <span className="text-[var(--color-green-forest)]">About Us</span>
            </div>
            <h1 className="font-playfair text-7xl font-semibold leading-none text-[var(--color-earth-dark)] md:text-8xl lg:text-[108px]">
              About
              <br />
              <span className="text-[var(--color-green-forest)]">
                Al Baraka
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-xl leading-9 text-[var(--color-earth-mid)]">
              Bringing nature&apos;s finest from Egypt to tables around the
              world.
            </p>
          </motion.div>

          <div className="relative hidden min-h-[460px] lg:block">
            <div className="absolute right-0 top-8 h-[430px] w-[78%] overflow-hidden rounded-[44%_56%_43%_57%/45%_42%_58%_55%]">
              <Image
                src={images.aboutHeroBg}
                alt="Al Baraka farm fields"
                fill
                className="object-cover"
              />
            </div>
          </div>
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
