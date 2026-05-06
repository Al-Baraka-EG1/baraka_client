"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CldImage } from "next-cloudinary";

import { ProductsType } from "@/types/ProductsTypes";

interface ProductCardProps {
  product: ProductsType;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-[var(--color-earth-dark)] ${
        featured ? "md:col-span-2 md:row-span-2 h-[400px] md:h-full" : "h-[400px]"
      }`}
    >
      {/* Background Image using Cloudinary */}
      <CldImage
        src={product.slug} // Use slug as public ID for now
        alt={product.name}
        fill
        sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        // Fallback or placeholder configuration if not found in Cloudinary
        preserveTransformations
        crop="fill"
        gravity="auto"
      />
      
      {/* Permanent Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="mb-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 text-white"
            style={{ backgroundColor: product.color }}
          >
            {product.category}
          </span>
          <h3 className="font-playfair text-3xl font-bold text-white mb-2 leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Hover Reveal Content */}
        <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
          <p className="text-white/80 font-dm-sans text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex items-center gap-2 text-[var(--color-gold)] font-medium text-sm group/btn">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
