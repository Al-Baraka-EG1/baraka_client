"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import ProductCard from "@/components/custom/ProductCard";
import { useProductsAnimations } from "@/hooks/useProductsAnimations";
import { ProductsType } from "@/types/ProductsTypes";

interface ProductsPageProps {
  products: ProductsType[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  const {
    heroRef,
    gridRef,
    ctaRef,
    activeFilter,
    setActiveFilter,
    filters,
    filteredProducts,
  } = useProductsAnimations(products);

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* 1. HERO */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <CldImage
          src="products-hero-bg"
          alt="Fresh organic produce"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-earth-dark)]/70" />
        
        <div ref={heroRef} className="relative z-10 text-center px-6">
          <div className="text-[var(--color-gold)] font-bold uppercase tracking-widest text-sm mb-4">
            Our Products
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            Premium Selection
          </h1>
          <p className="text-xl text-white/90 font-dm-sans max-w-2xl mx-auto">
            Carefully selected fruits & vegetables with premium quality standards
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="container mx-auto px-6 lg:px-12 flex flex-wrap justify-center gap-2 md:gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--color-gold)] text-[var(--color-earth-dark)] shadow-md scale-105"
                  : "bg-transparent text-[var(--color-earth-mid)] hover:bg-[var(--color-cream)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-2xl font-playfair text-[var(--color-earth-mid)]">
                No products found for this category.
              </h3>
            </div>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.slug} className="opacity-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section ref={ctaRef} className="py-24 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[var(--color-earth-dark)] mb-6">
            Looking for bulk orders or private labeling?
          </h2>
          <p className="text-lg text-[var(--color-earth-mid)] font-dm-sans mb-10">
            Contact our sales team to discuss your custom requirements, pricing, and distribution opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-green-forest)] hover:bg-[var(--color-green-fresh)] text-white px-10 py-4 rounded-full font-bold transition-transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
