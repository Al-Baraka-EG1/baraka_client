"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Leaf,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { images, videos } from "@/lib/images";
import {
  clipRevealVariants,
  scaleRevealVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import { useProductsAnimations } from "@/hooks/useProductsAnimations";
import { ProductsType } from "@/types/ProductsTypes";

interface ProductsPageProps {
  products: ProductsType[];
}

const filterIcons: Record<string, typeof Leaf> = {
  All: Leaf,
  Fresh: PackageCheck,
  Frozen: ShieldCheck,
  Fruit: Search,
  Vegetable: Leaf,
};

const productBenefits = [
  {
    title: "100% Natural",
    detail: "No additives or preservatives",
    icon: Leaf,
  },
  {
    title: "Locally Grown",
    detail: "From trusted Egyptian farms",
    icon: PackageCheck,
  },
  {
    title: "Premium Quality",
    detail: "Handpicked with care",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Delivery",
    detail: "Temperature-aware logistics",
    icon: Truck,
  },
];

export default function ProductsPage({ products }: ProductsPageProps) {
  const { activeFilter, setActiveFilter, filters, filteredProducts } =
    useProductsAnimations(products);

  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24">
      <section className="relative min-h-[620px] bg-white">
        <Image
          src={images.productsHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="container relative z-10 mx-auto grid min-h-[620px] items-center gap-10 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
          >
            <div className="section-label mb-5">Fresh From Egypt</div>
            <h1 className="font-playfair text-7xl font-semibold leading-none text-[var(--color-green-forest)] md:text-8xl lg:text-[116px]">
              Our Products
            </h1>
            <div className="mt-8 h-px w-28 bg-[var(--color-green-forest)]" />
            <p className="mt-8 max-w-xl text-xl leading-9 text-[var(--color-earth-mid)]">
              Handpicked with care. Naturally fresh. Prepared for reliable
              supply across retail, foodservice, and export partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden min-h-[430px] lg:block"
          >
            <Image
              src={images.heroCrate}
              alt="Fresh Al Baraka produce crate"
              width={820}
              height={448}
              priority
              className="absolute bottom-0 right-0 w-full max-w-[760px] drop-shadow-[0_34px_42px_rgba(16,38,26,0.16)]"
            />
          </motion.div>
        </div>
      </section>

      <section className="sticky top-[92px] z-30 border-y border-black/10 bg-white/[0.86] py-4 backdrop-blur-xl">
        <div className="container mx-auto flex gap-3 overflow-x-auto px-4 md:px-8 lg:justify-center">
          {filters.map((filter) => {
            const Icon = filterIcons[filter] || Leaf;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`flex min-w-fit items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? "border-[var(--color-green-forest)] bg-[var(--color-green-forest)] text-white shadow-[0_12px_28px_rgba(15,107,58,0.18)]"
                    : "border-black/10 bg-white text-[var(--color-earth-dark)] hover:border-[var(--color-green-forest)]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {filter === "All" ? "All Products" : filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.slug}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative bg-white pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="botanical-shell relative overflow-hidden rounded-[32px] border border-black/10 p-8 md:p-12"
          >
            <video
              src={videos.productsReveal}
              className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-[0.28] lg:block"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-xl">
              <div className="section-label mb-4">Always Fresh</div>
              <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)]">
                Good for you.
                <br />
                Good for nature.
              </h2>
              <p className="mt-5 text-[var(--color-earth-mid)]">
                We deliver the finest produce, grown with care and delivered
                with pride.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white"
              >
                Request Supply Details <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerVariants}
            className="grid gap-6 border-y border-black/10 py-7 md:grid-cols-4"
          >
            {productBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItemVariants}
                className="flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-[var(--color-green-forest)]">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-[var(--color-earth-dark)]">
                    {benefit.title}
                  </span>
                  <span className="text-sm text-[var(--color-earth-mid)]">
                    {benefit.detail}
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
