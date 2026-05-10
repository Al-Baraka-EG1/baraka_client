"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { ProductsType } from "@/types/ProductsTypes";
import { getProductImage } from "@/lib/images";

interface ProductCardProps {
  product: ProductsType;
  featured?: boolean;
}

const MotionLink = motion.create(Link);

export default function ProductCard({
  product,
  featured = false,
}: ProductCardProps) {
  return (
    <MotionLink
      href={`/products/${product.slug}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45 }}
      className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,38,26,0.07)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[22px]"
      >
        <Image
          src={getProductImage(product.slug)}
          alt={product.name}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 55vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 shadow-sm"
          style={{ backgroundColor: product.color, color: "#fff" }}
        >
          <Leaf className="h-5 w-5" />
        </span>
        <span
          className="absolute bottom-0 left-0 h-1 w-full"
          style={{ backgroundColor: product.color }}
        />
      </div>

      <div className="pt-6">
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
          <span className="text-xs text-[var(--color-earth-mid)]">
            {product.origin}
          </span>
        </div>
        <h3 className="font-playfair text-3xl font-semibold leading-tight text-[var(--color-earth-dark)]">
          {product.name}
        </h3>
        <p className="mt-3 min-h-[48px] text-sm leading-6 text-[var(--color-earth-mid)]">
          {product.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green-forest)]">
          Explore product
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </MotionLink>
  );
}
