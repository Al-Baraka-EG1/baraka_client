"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Leaf, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import { clipRevealVariants, scaleRevealVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";
import { images, videos } from "@/lib/images";
import { contactCards, faqs, heroBenefits, partnershipBenefits } from "@/constants/contactdata";
import Field from "@/components/custom/FieldForm";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useContactForm();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="overflow-hidden bg-[var(--color-cream)] pt-24">
      <section className="relative min-h-[600px] overflow-hidden bg-[var(--color-cream)] lg:min-h-[680px]">
        <Image src={images.contactHeroBg} alt="" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-cream)]/88 to-white/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-transparent" />
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[var(--color-green-forest)]/6 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-60 w-60 rounded-full bg-[var(--color-gold)]/6 blur-3xl" />

        <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 text-center md:px-8 lg:min-h-[680px]">
          <motion.div initial="hidden" animate="visible" variants={clipRevealVariants} className="max-w-4xl">
            <div className="section-label mb-5 tracking-[0.2em]">Contact Al Baraka</div>
            <h1 className="font-playfair text-5xl font-semibold leading-[0.95] text-[var(--color-earth-dark)] sm:text-6xl md:text-7xl lg:text-8xl">
              Let&apos;s Build a
              <br />
              <span className="text-[var(--color-green-forest)]">Supply Partnership</span>
            </h1>
            <div className="mx-auto mt-6 h-[2px] w-24 bg-[var(--color-green-forest)]" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-earth-mid)] md:text-xl">
              Send your product requirements, packaging needs, quantity, and destination. Our team will prepare supply details for your business.
            </p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
              {heroBenefits.map((benefit) => (
                <span key={benefit.title} className="flex items-center gap-3 rounded-full border border-black/5 bg-white/75 px-5 py-2.5 backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                    <benefit.icon className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-[var(--color-earth-dark)]">{benefit.title}</span>
                    <span className="text-xs text-[var(--color-earth-mid)]">{benefit.detail}</span>
                  </span>
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pb-20">
        <FloatingLeaves />
        <div className="container mx-auto mt-12 grid gap-10 px-4 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeftVariants} className="soft-card rounded-[28px] p-8 md:p-10">
            <h2 className="font-playfair text-3xl text-[var(--color-earth-dark)]">Contact Information</h2>
            <div className="mt-7 grid gap-5">
              {contactCards.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-semibold text-[var(--color-earth-dark)]">{item.label}</span>
                    <span className="whitespace-pre-line text-sm leading-6 text-[var(--color-earth-mid)]">{item.value}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-3 rounded-[18px] bg-[var(--color-leaf-soft)] p-5 text-sm text-[var(--color-earth-mid)]">
              <span className="flex items-center gap-3"><Phone className="h-5 w-5 text-[var(--color-green-forest)]" /> +20 10 01269029 | +20 2 24142974</span>
              <span className="flex items-center gap-3"><Mail className="h-5 w-5 text-[var(--color-green-forest)]" /> info@albaraka-eg.org</span>
              <span className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[var(--color-green-forest)]" /> 64 Rabaa Investment Buildings, Nasr City, 11765 Cairo, Egypt</span>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInRightVariants} className="soft-card rounded-[28px] p-8 md:p-10">
            <h2 className="font-playfair text-3xl text-[var(--color-earth-dark)]">Send Us a Message</h2>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="mt-8 flex min-h-[360px] flex-col items-center justify-center rounded-[22px] bg-[var(--color-leaf-soft)] text-center">
                  <CheckCircle2 className="mb-5 h-16 w-16 text-[var(--color-green-forest)]" />
                  <h3 className="font-playfair text-4xl text-[var(--color-earth-dark)]">Message Sent</h3>
                  <p className="mt-3 text-[var(--color-earth-mid)]">Thank you. We will get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Your Name" error={errors.fullName?.message}>
                      <input {...register("fullName")} placeholder="Your Name *" className="form-input" />
                    </Field>
                    <Field label="Company Name">
                      <input {...register("company")} placeholder="Company Name" className="form-input" />
                    </Field>
                  </div>
                  <Field label="Email Address" error={errors.email?.message}>
                    <input {...register("email")} placeholder="Email Address *" className="form-input" />
                  </Field>
                  <Field label="Phone Number" error={errors.phone?.message}>
                    <input {...register("phone")} placeholder="Phone Number" className="form-input" />
                  </Field>
                  <Field label="Subject" error={errors.subject?.message}>
                    <div className="relative">
                      <select {...register("subject")} className="form-input appearance-none">
                        <option value="">Subject *</option>
                        <option value="Fresh Products Inquiry">Fresh Products Inquiry</option>
                        <option value="Frozen Products Inquiry">Frozen Products Inquiry</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Packaging Requirements">Packaging Requirements</option>
                        <option value="Export Partnership">Export Partnership</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-earth-mid)]" />
                    </div>
                  </Field>
                  <Field label="Your Message" error={errors.message?.message}>
                    <textarea {...register("message")} placeholder="Tell us the product, quantity, packaging, destination, and shipment requirements *" rows={6} className="form-input resize-none" />
                  </Field>
                  <button type="submit" disabled={isSubmitting} className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white shadow-[0_18px_34px_rgba(15,107,58,0.22)] transition-all duration-200 hover:bg-green-700 disabled:opacity-60">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-5 w-5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleRevealVariants} className="soft-card overflow-hidden rounded-[28px]">
            <div className="p-8 text-center">
              <h2 className="font-playfair text-4xl text-[var(--color-earth-dark)]">Find Us</h2>
              <p className="mt-2 text-sm text-[var(--color-earth-mid)]">64 Rabaa Investment Buildings, Nasr City, 11765 Cairo, Egypt.</p>
            </div>
            <div className="relative h-[430px]">
              <iframe
                src="https://maps.google.com/maps?q=64%20Rabaa%20Investment%20Buildings%2C%20Nasr%20City%2C%20Cairo%2011765%2C%20Egypt&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.8) contrast(1.04)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="soft-card absolute left-6 right-6 top-6 rounded-[18px] p-5 md:left-8 md:right-auto md:max-w-sm">
                <h3 className="font-semibold text-[var(--color-earth-dark)]">Al Baraka for Import & Export</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-earth-mid)]">64 Rabaa Investment Buildings, Nasr City, 11765 Cairo, Egypt</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-4xl text-[var(--color-earth-dark)]">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-[var(--color-earth-mid)]">Quick answers for buyers and partners.</p>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="rounded-[18px] border border-black/10 bg-white">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-[var(--color-earth-dark)]">
                  <span className="flex items-center gap-3"><Leaf className="h-4 w-4 text-[var(--color-green-forest)]" />{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-12 pb-5 text-sm leading-7 text-[var(--color-earth-mid)]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleRevealVariants} className="botanical-shell relative overflow-hidden rounded-[28px] border border-black/10 shadow-[0_24px_70px_rgba(16,38,26,0.06)]">
            <div className="grid min-h-[320px] items-stretch md:grid-cols-12">
              <div className="relative col-span-12 min-h-[220px] overflow-hidden bg-[var(--color-earth-dark)] md:col-span-5 md:min-h-full">
                <video src={videos.contactClosing} className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity" autoPlay muted loop playsInline aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-earth-dark)]/40 md:to-transparent" />
              </div>
              <div className="col-span-12 flex flex-col justify-center bg-white/40 p-8 backdrop-blur-md md:col-span-7 md:p-12 lg:p-14">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-md">
                    <span className="mb-2 block font-space-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-gold)]">Ready to Start a Partnership?</span>
                    <h2 className="font-playfair text-3xl font-semibold leading-tight text-[var(--color-earth-dark)] md:text-4xl">Let&apos;s Build a <span className="text-[var(--color-green-forest)]">Reliable Supply</span></h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-earth-mid)]">Share your product list and destination. We will help you prepare the right fresh or frozen supply program from Egypt.</p>
                  </div>
                  <div className="flex flex-wrap gap-4 lg:flex-col lg:gap-3">
                    {partnershipBenefits.map((benefit) => (
                      <div key={benefit.label} className="flex items-center gap-3 rounded-xl border border-black/[0.05] bg-white/80 px-4 py-2.5 shadow-sm transition-all duration-300 hover:border-[var(--color-green-forest)]/30 hover:shadow-md">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]"><benefit.icon className="h-4 w-4" /></span>
                        <span className="text-xs font-bold text-[var(--color-earth-dark)]">{benefit.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[var(--color-earth-mid)]">Fresh and frozen products, flexible packaging, and professional shipment support.</p>
                  <Link href="/products" className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-[var(--color-green-forest)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(15,107,58,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-green-fresh)] hover:shadow-[0_8px_20px_rgba(15,107,58,0.25)]">
                    View Our Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
