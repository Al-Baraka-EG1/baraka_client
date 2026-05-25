"use client";

import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { scaleRevealVariants, clipRevealVariants } from "@/lib/animations";

export default function PrivacyPage() {
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
          <div className="section-label mb-3">Legal & Compliance</div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--color-earth-dark)] leading-tight">
            Privacy <span className="text-[var(--color-green-forest)]">Policy</span>
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
            
            {/* Introductory statement */}
            <p className="lead text-base md:text-lg text-[var(--color-earth-dark)] font-medium italic">
              At Al BARAKA FOR IMPORT & EXPORT, we are committed to safeguarding the privacy and security of our global business partners, wholesale clients, and visitors. This Privacy Policy details how we collect, process, and protect your information when you request quotation sheets, place fresh and frozen produce orders, or interact with our digital channels.
            </p>

            <hr className="border-black/10 my-8" />

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <Eye className="h-4 w-4" />
                </span>
                1. Information We Collect
              </h2>
              <p>
                As a global import and export enterprise, the information we collect is strictly optimized for business-to-business (B2B) operations. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Wholesale Quotation Requests:</strong> Company name, registration/VAT number, contact person name, business email address, phone number, export destination port, and product requirements (variety, type, packaging details, and volume).
                </li>
                <li>
                  <strong>Communication Logs:</strong> Transcripts of inquiry forms, feedback on produce shipments, and regulatory documentation exchange.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP addresses, browser specifications, and usage cookies collected for analytics to enhance loading performance.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                2. How We Use Your Data
              </h2>
              <p>
                We use the information collected from our wholesale partners strictly to execute trade activities, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Formulating comprehensive price quotations for premium fruits and vegetables.</li>
                <li>Fulfilling global freight logistics, customs clearance documentation, and phytosanitary declarations.</li>
                <li>Adhering to cold-chain safety records and tracking global food safety logs (ISO 22000 and HACCP compliance).</li>
                <li>Verifying compliance with agricultural trade laws and export/import tariffs.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <Shield className="h-4 w-4" />
                </span>
                3. Global Data Protection & Security
              </h2>
              <p>
                Al BARAKA FOR IMPORT & EXPORT serves agricultural supply chains across Egypt, the Middle East, Europe, Africa, and Asia. Your data is stored on highly secure servers using standard AES encryption algorithms to prevent unauthorized access.
              </p>
              <p>
                We process your business data in strict accordance with the **Egyptian Data Protection Law No. 151 of 2020** and the **General Data Protection Regulation (GDPR)** for European partners. We do not sell, rent, or lease your corporate databases to marketing networks.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <Lock className="h-4 w-4" />
                </span>
                4. Third-Party Disclosures
              </h2>
              <p>
                We only share logistics or business intelligence data with certified, audited entities critical to executing global produce operations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>International freight forwarders, shipping carriers, and logistics operators.</li>
                <li>Customs agencies and agricultural quality control bodies for phytosanitary testing.</li>
                <li>Secure financial institutions executing commercial Letters of Credit (L/C).</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-3 font-playfair text-xl md:text-2xl text-[var(--color-earth-dark)] font-semibold mt-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)] shrink-0">
                  <FileText className="h-4 w-4" />
                </span>
                5. Your Legal Rights
              </h2>
              <p>
                Under modern data protection frameworks, B2B contact persons maintain full rights to query their archived files. You have the right to request a digital export of your stored personal details, demand amendments, or ask for total removal from our records.
              </p>
              <p>
                For any data compliance requests or queries regarding our fresh produce trace systems, please contact our Legal Officer at:
              </p>
              <div className="mt-4 rounded-2xl bg-[var(--color-leaf-soft)] p-6 border border-black/[0.03]">
                <p className="font-semibold text-[var(--color-earth-dark)]">Al BARAKA FOR IMPORT & EXPORT</p>
                <p className="text-sm">Legal & Compliance Department</p>
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
