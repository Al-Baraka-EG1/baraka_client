"use client";

import { CldImage } from "next-cloudinary";
import { Leaf, Target, Eye, Handshake, ShieldCheck } from "lucide-react";
import { useAboutAnimations } from "@/hooks/useAboutAnimations";

export default function AboutPage() {
  const { heroRef, storyRef, missionRef, qualityRef, timelineRef } =
    useAboutAnimations();

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* 1. HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <CldImage
          src="about-hero-bg"
          alt="Al Baraka Farm"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-earth-dark)]/70" />

        <div ref={heroRef} className="relative z-10 text-center px-6">
          <div className="text-[var(--color-gold)] font-bold uppercase tracking-widest text-sm mb-4">
            Home <span className="mx-2 opacity-50">&gt;</span> About
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            About Al Baraka
          </h1>
          <p className="text-xl text-white/90 font-dm-sans max-w-2xl mx-auto">
            Bringing Freshness, Quality, and Trust to Every Table
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={storyRef}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="lg:w-1/2 w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
              <CldImage
                src="our-story"
                alt="Our agricultural story"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-earth-dark)]">
                  Our Story
                </h2>
                <Leaf className="w-8 h-8 text-[var(--color-green-fresh)]" />
              </div>

              <div className="space-y-6 text-[var(--color-earth-mid)] font-dm-sans text-lg leading-relaxed">
                <p>
                  Founded on the principles of integrity and excellence, Al
                  Baraka started as a small vision to connect local farmers with
                  families who value premium produce. From vibrant bell peppers
                  and crisp carrots to sweet apples and juicy strawberries, we
                  bring the farm&apos;s best to your table. We believe every
                  meal starts with the quality of its ingredients — and
                  we&apos;re dedicated to ensuring those ingredients are the
                  finest available.
                </p>
                <p>
                  Through our strategic partnership with Marianna, our sister
                  company based in Warsaw, Poland, we&apos;re able to source
                  premium Polish apples directly from Europe&apos;s largest
                  apple-growing region, offering you unmatched quality and
                  traceability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VALUES */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3 block">
              Guiding Principles
            </span>
            <h2 className="text-4xl font-playfair font-bold text-[var(--color-earth-dark)]">
              Our Mission & Values
            </h2>
          </div>

          <div
            ref={missionRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Target className="w-12 h-12 text-[var(--color-gold)] mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-[var(--color-earth-dark)] mb-4">
                Our Mission
              </h3>
              <p className="text-[var(--color-earth-mid)] leading-relaxed">
                Lead the way in premium food distribution through sustainable
                practices and respect for nature&apos;s bounty.
              </p>
            </div>

            <div className="bg-[var(--color-earth-dark)] p-10 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 text-white">
              <Handshake className="w-12 h-12 text-[var(--color-gold)] mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Our Values
              </h3>
              <p className="text-white/80 leading-relaxed">
                Honesty and integrity are the pillars we build upon. Every
                relationship is built on trust and transparency.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Eye className="w-12 h-12 text-[var(--color-gold)] mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-[var(--color-earth-dark)] mb-4">
                Our Vision
              </h3>
              <p className="text-[var(--color-earth-mid)] leading-relaxed">
                To be the trusted bridge between the world&apos;s finest farms
                and tables across the Middle East and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALITY PROMISE */}
      <section className="py-24 bg-[var(--color-green-forest)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div ref={qualityRef} className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-16 h-16 text-[var(--color-gold)] mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Our Quality Promise
            </h2>
            <p className="text-xl text-white/90 leading-relaxed font-dm-sans mb-12">
              We stand behind every piece of fruit and every vegetable we sell.
              If it&apos;s not at its absolute peak of freshness and flavor, it
              doesn&apos;t leave our distribution center. We utilize
              state-of-the-art cold chain technology to preserve nutrients and
              taste from farm to fork.
            </p>

            <div className="flex justify-center gap-6">
              <div className="px-6 py-3 border-2 border-[var(--color-gold)] rounded-full text-[var(--color-gold)] font-bold tracking-widest uppercase">
                ISO Certified
              </div>
              <div className="px-6 py-3 border-2 border-[var(--color-gold)] rounded-full text-[var(--color-gold)] font-bold tracking-widest uppercase">
                HACCP Certified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-[var(--color-earth-dark)]">
              Our Journey
            </h2>
          </div>

          <div
            ref={timelineRef}
            className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent"
          >
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-gold)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[var(--color-cream)] rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-playfair font-bold text-2xl text-[var(--color-earth-dark)]">
                    Founded
                  </h3>
                  <span className="font-space-mono text-[var(--color-gold)] font-bold">
                    1995
                  </span>
                </div>
                <p className="text-[var(--color-earth-mid)]">
                  Established in Cairo, Egypt with a vision for premium quality.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-gold)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[var(--color-cream)] rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-playfair font-bold text-2xl text-[var(--color-earth-dark)]">
                    Regional Expansion
                  </h3>
                  <span className="font-space-mono text-[var(--color-gold)] font-bold">
                    2000s
                  </span>
                </div>
                <p className="text-[var(--color-earth-mid)]">
                  Expanded distribution networks across the Middle East.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-gold)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[var(--color-cream)] rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-playfair font-bold text-2xl text-[var(--color-earth-dark)]">
                    Global Partnership
                  </h3>
                  <span className="font-space-mono text-[var(--color-gold)] font-bold">
                    2019
                  </span>
                </div>
                <p className="text-[var(--color-earth-mid)]">
                  Strategic partnership with Marianna (Warsaw, Poland)
                  established.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--color-green-fresh)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[var(--color-earth-dark)] text-white rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-playfair font-bold text-2xl">
                    Modern Excellence
                  </h3>
                  <span className="font-space-mono text-[var(--color-gold)] font-bold">
                    Today
                  </span>
                </div>
                <p className="text-white/80">
                  Serving clients globally with 6+ premium fresh and frozen
                  product lines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
