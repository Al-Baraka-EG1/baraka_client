"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { CheckCircle2, ThermometerSnowflake, ShieldCheck, Check } from "lucide-react";
import ProductCard from "@/components/custom/ProductCard";
import { useProductDetailAnimations } from "@/hooks/useProductDetailAnimations";
import { ProductsType } from "@/types/ProductsTypes";

interface ProductDetailPageProps {
  product: ProductsType;
  relatedProducts: ProductsType[];
}

export default function ProductDetailPage({ product, relatedProducts }: ProductDetailPageProps) {
  useProductDetailAnimations();

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      {/* 1. PRODUCT HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <CldImage
          src={product.slug}
          alt={product.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-earth-dark)] via-[var(--color-earth-dark)]/70 to-transparent" />
        
        <div 
          className="absolute top-0 left-0 w-2 h-full z-20"
          style={{ backgroundColor: product.color }}
        />

        <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 flex flex-col justify-end h-full pb-16">
          <div className="max-w-3xl product-hero-content opacity-0 translate-y-8">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-white"
              style={{ backgroundColor: product.color }}
            >
              Premium {product.category} {product.type}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl text-[var(--color-gold)] font-cormorant italic mb-10">
              {product.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[var(--color-green-fresh)] hover:bg-[var(--color-green-bright)] text-white px-8 py-3.5 rounded-full font-bold transition-transform hover:scale-105 text-sm uppercase tracking-wider">
                Contact Us
              </Link>
              <Link href="/products" className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full font-bold transition-colors hover:bg-white/5 text-sm uppercase tracking-wider">
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2 w-full space-y-6 product-gallery opacity-0 translate-y-8">
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                <CldImage
                  src={product.slug}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2 product-info opacity-0 translate-y-8">
              <h2 className="text-3xl font-playfair font-bold text-[var(--color-earth-dark)] mb-6">Product Overview</h2>
              <p className="text-[var(--color-earth-mid)] font-dm-sans text-lg leading-relaxed mb-10">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-green-fresh)] shrink-0" />
                  <span className="text-[var(--color-earth-dark)] font-medium">{product.category === 'frozen' ? 'Flash-Frozen Tech' : 'Farm Fresh'}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-green-fresh)] shrink-0" />
                  <span className="text-[var(--color-earth-dark)] font-medium">Rich Flavor Profile</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-green-fresh)] shrink-0" />
                  <span className="text-[var(--color-earth-dark)] font-medium">100% Natural</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-green-fresh)] shrink-0" />
                  <span className="text-[var(--color-earth-dark)] font-medium">Versatile Usage</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--color-earth-dark)] mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map(cert => (
                    <span key={cert} className="inline-flex items-center gap-2 bg-[var(--color-cream)] px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-earth-mid)]">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USES & 4. STORAGE */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 product-uses opacity-0 translate-y-8">
              <h2 className="text-3xl font-playfair font-bold text-[var(--color-earth-dark)] mb-8">Perfect For Your Daily Creations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.uses.map(use => (
                  <div key={use} className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-cream)] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <span className="font-dm-sans font-medium text-[var(--color-earth-dark)]">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 product-storage opacity-0 translate-y-8">
              <div className={`p-8 rounded-3xl h-full shadow-lg ${product.category === 'frozen' ? 'bg-blue-900 text-white' : 'bg-[var(--color-green-forest)] text-white'}`}>
                <ThermometerSnowflake className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="text-2xl font-playfair font-bold mb-4">Storage Instructions</h3>
                <p className="text-white/90 font-dm-sans leading-relaxed text-lg">
                  {product.storage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE AL BARAKA STANDARD */}
      <section className="py-24 bg-[var(--color-earth-dark)] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 product-standard opacity-0 translate-y-8">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4 text-[var(--color-gold)]">The Al Baraka Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto product-standard opacity-0 translate-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Quality Sourcing</h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                We work directly with certified farmers who adhere to strict agricultural practices. Every batch is inspected for size, color, and ripeness before it is approved for distribution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Global Certification</h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                Our packing and freezing facilities are fully ISO and HACCP compliant, ensuring that the produce reaching your table is as safe as it is delicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 bg-white text-center px-6 product-cta opacity-0 translate-y-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[var(--color-earth-dark)] mb-6">
            Looking for Premium {product.name}?
          </h2>
          <p className="text-lg text-[var(--color-earth-mid)] font-dm-sans mb-10">
            Partner with us for bulk orders, private labeling, or distribution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-earth-dark)] px-10 py-4 rounded-full font-bold transition-transform hover:scale-105 uppercase tracking-wider text-sm"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </section>

      {/* 7. RELATED PRODUCTS */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-playfair font-bold text-[var(--color-earth-dark)] mb-12 text-center product-related opacity-0 translate-y-8">
            Discover More Premium Produce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 product-related opacity-0 translate-y-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
