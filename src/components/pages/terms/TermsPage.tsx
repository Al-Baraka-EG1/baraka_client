"use client";

import { motion } from "motion/react";
import { Scale, Globe, ShoppingBag, CreditCard, AlertTriangle } from "lucide-react";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { scaleRevealVariants, clipRevealVariants } from "@/lib/animations";

export default function TermsPage() {
  const lastUpdated = "May 25, 2026";

  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative min-h-[300px] flex flex-col justify-center items-center text-center px-4 md:px-8">
        <FloatingLeaves />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={clipRevealVariants}
          className="max-w-3xl"
        >
          <div className="section-label mb-3">Commercial Guidelines</div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--color-earth-dark)] leading-tight">
            Terms & <span className="text-[var(--color-green-forest)]">Conditions</span>
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-[var(--color-green-forest)]" />
          <p className="mt-4 text-xs font-space-mono text-[var(--color-earth-mid)] uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-8 max-w-4xl mt-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleRevealVariants}
          className="soft-card rounded-[28px] p-8 md:p-12 lg:p-14 bg-white/70 backdrop-blur-md"
        >
          <div className="prose prose-slate max-w-none text-sm md:text-base leading-relaxed text-[var(--color-earth-mid)] space-y-8">
            
            <p className="lead text-base md:text-lg text-[var(--color-earth-dark)] font-medium italic">
              Welcome to the commercial platform of Al BARAKA FOR IMPORT & EXPORT. These Terms & Conditions outline the rules, specifications, and regulations governing all wholesale product quotes, phytosanitary agreements, bulk orders, and shipment terms executed between our export offices and global importers.
            </p>

            <hr className="border-black/10 my-8" />

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <Scale className="h-4 w-4" />
                </span>
                1. General Scope & B2B Capacity
              </h2>
              <p>
                Al BARAKA FOR IMPORT & EXPORT operates strictly as a wholesale B2B producer, packer, and exporter of fresh and frozen agricultural goods. By requesting a quote or issuing a Purchase Order (P.O.), you warrant that you are purchasing as a legally registered commercial entity, wholesale distributor, or industrial processor.
              </p>
              <p>
                All agricultural agreements, certifications, and product delivery schedules are subject to the specific specifications defined in the final signed commercial contract between both entities.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <ShoppingBag className="h-4 w-4" />
                </span>
                2. Wholesale Quotes, Seasonal Pricing & Harvesting
              </h2>
              <p>
                Due to the natural dynamics of agricultural harvesting, climate variation, and packaging logistics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Quote Validity:</strong> Standard B2B quotes issued via our contact form are valid for <strong>7 business days</strong> from the date of issue unless specified otherwise, due to raw produce index volatility.
                </li>
                <li>
                  <strong>Seasonal Scheduling:</strong> Shipment dates are arranged in alignment with seasonal crops (e.g. Egyptian bell peppers, carrots, apples). We reserve the right to modify packaging dates based on optimal crop harvesting times to guarantee fresh quality.
                </li>
                <li>
                  <strong>Specification Tolerances:</strong> Quality tolerances, sizing parameters, caliber specifications, and cold-chain compliance are determined by international ISO standards and our strict inner HACCP procedures.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <Globe className="h-4 w-4" />
                </span>
                3. Global Shipments, Incoterms & Phytosanitary Checks
              </h2>
              <p>
                All international shipments are executed in compliance with standard **ICC Incoterms (2020)**. We typically operate under:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>FOB (Free on Board):</strong> Port of Alexandria or Port Said, Egypt.</li>
                <li><strong>CFR / CIF (Cost & Freight / Cost, Insurance & Freight):</strong> Delivered to destination ports designated by the buyer.</li>
              </ul>
              <p>
                <strong>Phytosanitary Certificates:</strong> We provide full official phytosanitary testing certificates issued by the Egyptian Ministry of Agriculture, verifying that crops are compliant with maximum residue limits (MRLs) and quarantine standards of the destination country.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <CreditCard className="h-4 w-4" />
                </span>
                4. Payment Methods & Letters of Credit
              </h2>
              <p>
                To ensure transactional safety in international fresh food logistics, commercial payments are executed through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Irrevocable Documented Letter of Credit (L/C):</strong> Confirmed and payable at sight, issued by an internationally audited bank.</li>
                <li><strong>Telegraphic Transfer (T/T):</strong> Subject to advance payment percentages and balance paid upon presentation of scanned shipping documents (B/L, Invoice, Phytosanitary, Packing List).</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                5. Force Majeure & Agricultural Liability
              </h2>
              <p>
                As a fresh produce exporter, Al BARAKA FOR IMPORT & EXPORT shall not be held liable for delayed deliveries or cargo failures arising from factors beyond our immediate control (Force Majeure).
              </p>
              <p>
                This includes: extreme weather anomalies causing total crop devastation, sudden localized agricultural disease quarantine mandates, global maritime transport delays, customs clearance border lockouts, or port worker strikes.
              </p>
              <p>
                For further clarification of our shipping protocols, trade terms, or corporate compliance, please reach out to our trade desk:
              </p>
              <div className="mt-4 rounded-2xl bg-[var(--color-leaf-soft)] p-6 border border-black/[0.03]">
                <p className="font-semibold text-[var(--color-earth-dark)]">Al BARAKA FOR IMPORT & EXPORT</p>
                <p className="text-sm">International Trade & Export Division</p>
                <p className="text-sm mt-1">64 Rabaa Investment Buildings, Nasr City, Cairo, Egypt</p>
                <p className="text-sm mt-1 font-space-mono text-[var(--color-green-forest)]">info@albaraka-eg.org</p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}
