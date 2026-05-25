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
      <section className="relative min-h-[580px] lg:min-h-[640px] bg-[var(--color-cream)] overflow-hidden">
        {/* Background image with elegant overlay */}
        <Image
          src={images.productsHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-cream)]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-transparent" />

        {/* Decorative top-right accent */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--color-green-forest)]/5 blur-3xl" />
        <div className="absolute -left-20 top-40 h-60 w-60 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-[580px] lg:min-h-[640px] flex-col items-center justify-center px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
            className="max-w-3xl"
          >
            <div className="section-label mb-5 tracking-[0.2em]">Fresh From Egypt</div>
            <h1 className="font-playfair text-5xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] sm:text-6xl md:text-7xl lg:text-8xl">
              Our <span className="text-[var(--color-green-forest)]">Products</span>
            </h1>
            <div className="mx-auto mt-6 h-[2px] w-20 bg-[var(--color-green-forest)]" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-earth-mid)] md:text-xl">
              Handpicked with care. Naturally fresh. Prepared for reliable
              supply across retail, foodservice, and export partners.
            </p>

            {/* Quick category pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mt-8 flex flex-wrap justify-center gap-2"
            >
              {["Fresh", "Frozen", "Fruits", "Vegetables"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[var(--color-green-forest)]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[var(--color-green-forest)] backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom product dots for visual interest */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3"
          >
            {products.slice(0, 5).map((product) => (
              <span
                key={product.slug}
                className="h-3 w-3 rounded-full ring-2 ring-white/50"
                style={{ backgroundColor: product.color }}
              />
            ))}
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
                className={`flex min-w-fit items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all ${activeFilter === filter
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
            className="grid gap-6 py-7 md:grid-cols-4 mt-10"
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
