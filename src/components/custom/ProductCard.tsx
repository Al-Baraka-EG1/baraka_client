"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Snowflake, Sprout } from "lucide-react";
import { motion } from "motion/react";
import { ProductsType } from "@/types/ProductsTypes";
import { getProductImage } from "@/lib/images";
import { getSegmentLabel } from "@/hooks/useProductsAnimations";

interface ProductCardProps {
  product: ProductsType;
  featured?: boolean;
}

const MotionLink = motion.create(Link);

export default function ProductCard({
  product,
  featured = false,
}: ProductCardProps) {
  const isFrozen = product.category === "frozen";
  const CategoryIcon = isFrozen ? Snowflake : Sprout;
  const segmentLabel = getSegmentLabel(product);

  return (
    <MotionLink
      href={`/products/${product.slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex min-h-[460px] flex-col overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(16,38,26,0.07)] transition-shadow duration-500 hover:shadow-[0_26px_70px_rgba(15,107,58,0.14)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-1" style={{ backgroundColor: product.color }} />

      <div className="relative m-4 flex min-h-[250px] flex-1 items-center justify-center overflow-hidden rounded-[24px] bg-[var(--color-leaf-mist)]">
        <Image
          src={getProductImage(product.slug)}
          alt={product.name}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 55vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-xs font-bold text-white shadow-sm backdrop-blur-md"
            style={{ backgroundColor: `${product.color}D9` }}
          >
            <CategoryIcon className="h-3.5 w-3.5" />
            {segmentLabel}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[var(--color-green-forest)] shadow-lg transition-transform duration-500 group-hover:scale-110">
          <Leaf className="h-5 w-5" />
        </span>
      </div>

      <div className="px-6 pb-6 pt-1">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className="rounded-full px-4 py-2 text-xs font-semibold capitalize"
            style={{
              backgroundColor: `${product.color}14`,
              color: product.color,
            }}
          >
            {product.category} / {product.type}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-earth-mid)]">
            {product.origin}
          </span>
        </div>
        <h3 className="font-playfair text-3xl font-semibold leading-tight text-[var(--color-earth-dark)]">
          {product.name}
        </h3>
        <p className="mt-3 min-h-[48px] text-sm leading-6 text-[var(--color-earth-mid)]">
          {product.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-green-forest)]">
          View supply details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </MotionLink>
  );
}
