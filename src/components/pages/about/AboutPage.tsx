"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Leaf, PackageCheck, ShieldCheck, Snowflake, Sprout, Truck } from "lucide-react";
import { motion } from "motion/react";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { clipRevealVariants, scaleRevealVariants, slideInLeftVariants, slideInRightVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { images, videos } from "@/lib/images";
import { milestones, partnerTypes, values } from "@/constants/aboutdata";

const partnerPromise = [
  { title: "Fresh Products", copy: "Carrots, potatoes, colored peppers, broccoli, citrus, garlic, onions, green beans, and seasonal supply.", icon: Sprout },
  { title: "Frozen Products", copy: "Strawberries, mango, peas, beans, molokhia, okra, mixed vegetables, spinach, broccoli, and more.", icon: Snowflake },
  { title: "Export Support", copy: "Flexible packaging discussions, documentation flow, shipment details, and professional follow-up.", icon: ClipboardCheck },
];

const supportCards = [
  { name: "Reliable Supply", icon: PackageCheck },
  { name: "Flexible Packaging", icon: Leaf },
  { name: "Quality Selection", icon: ShieldCheck },
  { name: "Shipment Support", icon: Truck },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24">
      <section className="relative min-h-[600px] overflow-hidden bg-[var(--color-cream)] lg:min-h-[680px]">
        <Image src={images.aboutHeroBg} alt="" fill priority sizes="100vw" className="object-cover object-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/95 via-[var(--color-cream)]/72 to-[var(--color-cream)]" />
        <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-[var(--color-green-forest)]/6 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[var(--color-gold)]/6 blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 text-center md:px-8 lg:min-h-[680px]">
          <motion.div initial="hidden" animate="visible" variants={clipRevealVariants} className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-sm text-[var(--color-earth-mid)]">
              <Link href="/" className="transition-colors hover:text-[var(--color-green-forest)]">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-[var(--color-green-forest)]">About Us</span>
            </motion.div>

            <div className="section-label mb-5 tracking-[0.2em]">Al Baraka for Import & Export</div>
            <h1 className="font-playfair text-5xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] sm:text-6xl md:text-7xl lg:text-8xl">
              Your Egyptian
              <br />
              <span className="text-[var(--color-green-forest)]">Supply Partner</span>
            </h1>
            <div className="mx-auto mt-6 h-[2px] w-24 bg-[var(--color-gold)]" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-earth-mid)] md:text-xl">
              We support importers, distributors, wholesalers, supermarkets, and food trading companies with fresh and frozen products from Egypt.
            </p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                { value: "Fresh", label: "Products" },
                { value: "Frozen", label: "Programs" },
                { value: "Export", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/5 bg-white/65 p-4 backdrop-blur-sm">
                  <div className="font-playfair text-2xl font-semibold text-[var(--color-green-forest)] md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-earth-mid)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <FloatingLeaves />
        <div className="container mx-auto grid items-center gap-14 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={slideInLeftVariants}>
            <div className="section-label mb-5">Built for Partners</div>
            <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)] md:text-6xl">
              Reliable supply,
              <br />
              clear communication,
              <br />
              and practical export support.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[var(--color-earth-mid)]">
              <p>
                Al Baraka works with buyers who need a dependable Egyptian partner for fresh and frozen fruits and vegetables. We focus on understanding each buyer&apos;s product list, packaging needs, quantities, and destination.
              </p>
              <p>
                Our role is to make the supply process clearer: product selection, flexible packaging options, documentation support, shipment coordination, and professional follow-up after every order.
              </p>
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-[10px] border border-[var(--color-green-forest)] px-7 py-4 font-semibold text-[var(--color-green-forest)] hover:bg-[var(--color-leaf-soft)]">
              Start a Partnership <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={slideInRightVariants} className="relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleRevealVariants} className="relative h-[560px] overflow-hidden rounded-[32px] bg-[var(--color-leaf-soft)] shadow-[0_24px_70px_rgba(16,38,26,0.08)]">
              <video src={videos.aboutHeritage} className="h-full w-full object-cover" autoPlay muted loop playsInline aria-label="Al Baraka partnership video" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-earth-dark)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/14 bg-white/[0.12] p-5 text-white backdrop-blur-xl">
                <span className="font-space-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-gold-light)]">Partner Network</span>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {partnerTypes.map((partner) => (
                    <div key={partner.title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.10] p-3">
                      <partner.icon className="h-5 w-5 text-[var(--color-green-bright)]" />
                      <span className="text-sm font-bold">{partner.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={clipRevealVariants} className="mx-auto mb-14 max-w-3xl text-center">
            <div className="section-label mb-3">How We Support Partners</div>
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)] md:text-6xl">A Clear Supply Process</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainerVariants} className="relative grid gap-8 md:grid-cols-4">
            {milestones.map(([step, title, copy]) => (
              <motion.div key={step} variants={staggerItemVariants} className="relative rounded-[26px] border border-black/10 bg-[var(--color-cream)] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-leaf-mist)]">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-green-forest)] bg-white font-playfair text-2xl font-bold text-[var(--color-green-forest)]">{step}</div>
                <h3 className="mt-3 font-playfair text-2xl text-[var(--color-earth-dark)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-earth-mid)]">{copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={clipRevealVariants} className="mx-auto mb-14 max-w-3xl text-center">
            <div className="section-label mb-3">Our Product & Service Promise</div>
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)] md:text-6xl">Fresh, Frozen, and Export Ready</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainerVariants} className="grid gap-7 md:grid-cols-3">
            {partnerPromise.map((item) => (
              <motion.div key={item.title} variants={staggerItemVariants} className="soft-card rounded-[24px] p-9">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                  <item.icon className="h-9 w-9" />
                </div>
                <h3 className="font-playfair text-4xl text-[var(--color-earth-dark)]">{item.title}</h3>
                <p className="mt-5 leading-7 text-[var(--color-earth-mid)]">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="quality" className="relative overflow-hidden bg-white pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleRevealVariants} className="botanical-shell grid items-center gap-10 rounded-[32px] border border-black/10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="section-label mb-4">Our Commitment</div>
              <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)]">
                Quality-Focused,
                <br />
                Partner-Ready
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-earth-mid)]">
                We help buyers build practical supply programs based on consistent product selection, clear specifications, flexible packaging, and documentation support.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white">
                Discuss Supply Needs <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {supportCards.map((card) => (
                <div key={card.name} className="rounded-[22px] bg-white p-6 text-center shadow-sm">
                  <card.icon className="mx-auto mb-4 h-9 w-9 text-[var(--color-green-forest)]" />
                  <span className="font-semibold text-[var(--color-earth-dark)]">{card.name}</span>
                  <span className="mt-2 block text-xs text-[var(--color-earth-mid)]">Partner Support</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
