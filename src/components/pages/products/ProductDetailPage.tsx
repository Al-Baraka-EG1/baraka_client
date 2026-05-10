"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  PackageCheck,
  Salad,
  Soup,
  FlameKindling,
  Snowflake,
  Thermometer,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ProductCard from "@/components/custom/ProductCard";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import {
  getProductGallery,
  getProductHeroImage,
  getProductImage,
  getProductVideo,
} from "@/lib/images";
import {
  clipRevealVariants,
  scaleRevealVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import { ProductsType } from "@/types/ProductsTypes";
import { standardSteps } from "@/constants/productDetailData";

interface ProductDetailPageProps {
  product: ProductsType;
  relatedProducts: ProductsType[];
}

export default function ProductDetailPage({
  product,
  relatedProducts,
}: ProductDetailPageProps) {
  const gallery = getProductGallery(product.slug);
  const heroVideo = getProductVideo(product.slug);
  const mediaItems = [
    ...(heroVideo ? [{ type: "video", src: heroVideo }] : []),
    ...gallery.map((src) => ({ type: "image", src })),
  ];
  if (mediaItems.length === 0) {
    mediaItems.push({ type: "image", src: getProductImage(product.slug) });
  }
  const [activeMedia, setActiveMedia] = useState(mediaItems[0]);

  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24">
      <section className="relative min-h-[760px] bg-white">
        <Image
          src={getProductHeroImage(product.slug)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div
          className="absolute left-0 top-0 h-full w-2 z-20"
          style={{ backgroundColor: product.color }}
        />
        <div className="container relative z-10 mx-auto grid min-h-[760px] items-center gap-10 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
          >
            <div className="mb-5 flex items-center gap-3 font-cormorant text-3xl italic text-[var(--color-gold)]">
              Premium{" "}
              <Leaf className="h-7 w-7 text-[var(--color-green-forest)]" />
            </div>
            <h1 className="font-playfair text-7xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] md:text-8xl lg:text-[108px]">
              {product.name}
            </h1>
            <div
              className="mt-8 h-px w-24"
              style={{ backgroundColor: product.color }}
            />
            <p className="mt-6 max-w-xl text-2xl leading-9 text-[var(--color-earth-mid)]">
              {product.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              {[
                "100% Natural",
                product.category === "frozen" ? "IQF Frozen" : "Farm Fresh",
                `Grown in ${product.origin}`,
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 rounded-[14px] bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: product.color }}
                  />
                  <span className="text-sm font-medium text-[var(--color-earth-dark)]">
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[430px] lg:min-h-[560px] overflow-hidden rounded-[32px] shadow-[0_30px_60px_rgba(16,38,26,0.15)]"
          >
            {heroVideo ? (
              <video
                src={heroVideo}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label={`${product.name} video`}
              />
            ) : (
              <Image
                src={getProductHeroImage(product.slug)}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover absolute inset-0"
              />
            )}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="soft-card grid gap-10 rounded-[32px] p-4 md:p-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="grid gap-5 md:grid-cols-[96px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
                {mediaItems.map((media) => (
                  <button
                    key={media.src}
                    type="button"
                    onClick={() => setActiveMedia(media)}
                    className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-[18px] border ${
                      activeMedia.src === media.src
                        ? "border-[var(--color-green-forest)] ring-2 ring-[var(--color-green-forest)]/20"
                        : "border-black/10"
                    }`}
                    style={{ backgroundColor: `${product.accentColor}10` }}
                    aria-label={`View ${product.name} gallery item`}
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.src}
                        className="h-full w-full object-cover p-1"
                        muted
                        playsInline
                      />
                    ) : (
                      <Image
                        src={media.src}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-contain p-1"
                      />
                    )}
                  </button>
                ))}
              </div>
              <div
                className="relative order-1 min-h-[420px] overflow-hidden rounded-[24px] md:order-2"
                style={{ backgroundColor: `${product.accentColor}10` }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMedia.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {activeMedia.type === "video" ? (
                      <video
                        src={activeMedia.src}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <Image
                        src={activeMedia.src}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="p-2 md:p-6">
              <div className="section-label mb-4">Product Overview</div>
              <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)]">
                Naturally premium, carefully handled.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-earth-mid)]">
                {product.description}
              </p>
              <div className="mt-8 grid gap-5">
                {product.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[var(--color-green-forest)]">
                      <Leaf className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-playfair text-2xl text-[var(--color-earth-dark)]">
                        {highlight}
                      </span>
                      <span className="text-sm text-[var(--color-earth-mid)]">
                        Prepared to Al Baraka quality standards.
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-9 border-t border-black/10 pt-7">
                <h3 className="mb-4 font-playfair text-2xl text-[var(--color-earth-dark)]">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="rounded-full bg-[var(--color-leaf-soft)] px-4 py-2 text-sm font-medium text-[var(--color-green-forest)]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-16 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={clipRevealVariants}
            className="mx-auto mb-10 max-w-3xl text-center"
          >
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-green-forest)]">
              Perfect For Every Moment
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainerVariants}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {product.uses.map((use, i) => {
              const useIcons = [Salad, Soup, FlameKindling, PackageCheck];
              const UseIcon = useIcons[i % useIcons.length];
              return (
                <motion.div
                  key={use}
                  variants={staggerItemVariants}
                  className="soft-card rounded-[22px] p-7 text-center"
                >
                  <UseIcon className="mx-auto mb-5 h-9 w-9 text-[var(--color-green-forest)]" />
                  <h3 className="text-lg font-semibold text-[var(--color-earth-dark)]">
                    {use}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="botanical-shell grid items-center gap-8 rounded-[32px] border border-black/10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <h2 className="font-playfair text-4xl font-semibold text-[var(--color-earth-dark)]">
                Storage Instructions
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-earth-mid)]">
                {product.storage}
              </p>
              <div className="mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white text-[var(--color-green-forest)]">
                {product.category === "frozen" ? (
                  <Snowflake className="h-11 w-11" />
                ) : (
                  <Thermometer className="h-11 w-11" />
                )}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {standardSteps.map((step) => (
                <div key={step.title} className="border-l border-black/10 pl-6">
                  <step.icon className="mb-4 h-8 w-8 text-[var(--color-green-forest)]" />
                  <h3 className="font-playfair text-2xl text-[var(--color-earth-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-earth-mid)]">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-16 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={clipRevealVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-playfair text-5xl font-semibold text-[var(--color-earth-dark)]">
              Looking for Premium {product.name}?
            </h2>
            <p className="mt-5 text-lg text-[var(--color-earth-mid)]">
              Partner with us for bulk orders, private labeling, or regional
              distribution.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white"
            >
              Contact Our Team <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={clipRevealVariants}
            className="mb-10 text-center font-playfair text-5xl font-semibold text-[var(--color-green-forest)]"
          >
            You May Also Like
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainerVariants}
            className="grid gap-7 md:grid-cols-3"
          >
            {relatedProducts.map((related) => (
              <motion.div key={related.slug} variants={staggerItemVariants}>
                <ProductCard product={related} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
