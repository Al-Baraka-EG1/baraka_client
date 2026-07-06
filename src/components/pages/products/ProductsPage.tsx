"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Leaf, PackageCheck, Search, ShieldCheck, Snowflake, Sprout, Truck } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { images, videos } from "@/lib/images";
import { clipRevealVariants, scaleRevealVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { ProductFilterId, useProductsAnimations } from "@/hooks/useProductsAnimations";
import { ProductsType } from "@/types/ProductsTypes";

interface ProductsPageProps {
  products: ProductsType[];
}

const filterIcons: Record<ProductFilterId, typeof Leaf> = {
  all: Search,
  "fresh-vegetable": Sprout,
  "fresh-fruit": Leaf,
  "frozen-vegetable": Snowflake,
  "frozen-fruit": Snowflake,
};

const categoryCards = [
  { id: "fresh-vegetable" as ProductFilterId, title: "Fresh Vegetables", copy: "Carrots, potatoes, colored peppers, broccoli, garlic, onions, and green beans.", icon: Sprout },
  { id: "fresh-fruit" as ProductFilterId, title: "Fresh Fruits", copy: "Seasonal Egyptian citrus and fruit supply.", icon: Leaf },
  { id: "frozen-vegetable" as ProductFilterId, title: "Frozen Vegetables", copy: "Peas, beans, molokhia, okra, spinach, broccoli, and prepared mixes.", icon: Snowflake },
  { id: "frozen-fruit" as ProductFilterId, title: "Frozen Fruits", copy: "Frozen strawberries and mango for year-round programs.", icon: Snowflake },
];

const productBenefits = [
  { title: "Fresh & Frozen Range", detail: "A focused Egyptian catalog", icon: Leaf },
  { title: "Export Handling", detail: "Packaging and shipment support", icon: PackageCheck },
  { title: "Quality Selection", detail: "Consistent market-ready products", icon: ShieldCheck },
  { title: "Reliable Supply", detail: "Professional wholesale planning", icon: Truck },
];

export default function ProductsPage({ products }: ProductsPageProps) {
  const { activeFilter, setActiveFilter, filters, filterCounts, filteredProducts } = useProductsAnimations(products);
  const activeLabel = filters.find((filter) => filter.id === activeFilter)?.label || "All Products";

  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24">
      <section className="relative min-h-[620px] overflow-hidden bg-[var(--color-cream)]">
        <Image src={images.productsHeroBg} alt="" fill priority sizes="100vw" className="object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-cream)]/86 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-transparent" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--color-green-forest)]/8 blur-3xl" />
        <div className="absolute -left-20 top-40 h-60 w-60 rounded-full bg-[var(--color-gold)]/8 blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-[620px] flex-col items-center justify-center px-4 text-center md:px-8">
          <motion.div initial="hidden" animate="visible" variants={clipRevealVariants} className="max-w-4xl">
            <div className="section-label mb-5 tracking-[0.2em]">Egyptian Export Catalog</div>
            <h1 className="font-playfair text-5xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] sm:text-6xl md:text-7xl lg:text-8xl">
              Fresh & Frozen
              <br />
              <span className="text-[var(--color-green-forest)]">Products</span>
            </h1>
            <div className="mx-auto mt-6 h-[2px] w-24 bg-[var(--color-green-forest)]" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-earth-mid)] md:text-xl">
              Browse Al Baraka export products by simple fresh and frozen categories.
            </p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categoryCards.map((category) => (
                <button key={category.id} type="button" onClick={() => setActiveFilter(category.id)} className="rounded-2xl border border-black/10 bg-white/70 p-4 text-left backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[var(--color-green-forest)]/35 hover:bg-white">
                  <category.icon className="mb-3 h-6 w-6 text-[var(--color-green-forest)]" />
                  <span className="block font-bold text-[var(--color-earth-dark)]">{category.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-[var(--color-earth-mid)]">{category.copy}</span>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-[92px] z-30 border-y border-black/10 bg-white/[0.88] py-4 backdrop-blur-xl">
        <div className="container mx-auto flex gap-3 overflow-x-auto px-4 md:px-8 lg:justify-center">
          {filters.map((filter) => {
            const Icon = filterIcons[filter.id] || Leaf;
            const isActive = activeFilter === filter.id;
            return (
              <button key={filter.id} type="button" onClick={() => setActiveFilter(filter.id)} className={`flex min-w-fit items-center gap-3 rounded-full border px-5 py-3 text-left text-sm font-semibold transition-all ${isActive ? "border-[var(--color-green-forest)] bg-[var(--color-green-forest)] text-white shadow-[0_12px_28px_rgba(15,107,58,0.18)]" : "border-black/10 bg-white text-[var(--color-earth-dark)] hover:border-[var(--color-green-forest)] hover:bg-[var(--color-leaf-mist)]"}`}>
                <Icon className="h-4 w-4" />
                <span>
                  <span className="block leading-none">{filter.label}</span>
                  <span className={`mt-1 block text-[10px] leading-none ${isActive ? "text-white/75" : "text-[var(--color-earth-mid)]"}`}>{filterCounts[filter.id]} items · {filter.helper}</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <FloatingLeaves />
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-label mb-3">Product Range</div>
              <h2 className="font-playfair text-4xl font-semibold text-[var(--color-earth-dark)] md:text-5xl">{activeLabel}</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[var(--color-earth-mid)]">Use the filters to browse fresh vegetables, fresh fruits, frozen vegetables, and frozen fruits.</p>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <motion.div key={product.slug} layout initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 18 }} transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.18) }}>
                  <ProductCard product={product} featured={activeFilter === "all" && index === 0} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleRevealVariants} className="botanical-shell relative overflow-hidden rounded-[32px] border border-black/10 p-8 md:p-12">
            <video src={videos.productsReveal} className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-[0.24] lg:block" autoPlay muted loop playsInline aria-hidden="true" />
            <div className="relative z-10 max-w-xl">
              <div className="section-label mb-4">Ready for Importers</div>
              <h2 className="font-playfair text-5xl font-semibold leading-tight text-[var(--color-earth-dark)]">Simple catalog.<br />Professional supply.</h2>
              <p className="mt-5 text-[var(--color-earth-mid)]">Tell us your required product, specifications, packaging, quantity, and destination. Our team will prepare supply details according to your needs.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white">Request Supply Details <ArrowRight className="h-5 w-5" /></Link>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainerVariants} className="mt-10 grid gap-6 py-7 md:grid-cols-4">
            {productBenefits.map((benefit) => (
              <motion.div key={benefit.title} variants={staggerItemVariants} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-[var(--color-green-forest)]"><benefit.icon className="h-5 w-5" /></span>
                <span><span className="block font-semibold text-[var(--color-earth-dark)]">{benefit.title}</span><span className="text-sm text-[var(--color-earth-mid)]">{benefit.detail}</span></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
