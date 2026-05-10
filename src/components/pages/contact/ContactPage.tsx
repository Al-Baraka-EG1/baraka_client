"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Leaf,
  PackageCheck,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import FloatingLeaves from "@/components/custom/FloatingLeaves";
import {
  clipRevealVariants,
  scaleRevealVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/lib/animations";
import { images, videos } from "@/lib/images";
import { FormData, formSchema } from "@/lib/validations/contactSchema";
import {
  contactCards,
  faqs,
  heroBenefits,
  partnershipBenefits,
} from "@/constants/contactdata";
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
      <section className="relative min-h-[690px] bg-white">
        <Image
          src={images.contactHeroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="container relative z-10 mx-auto grid min-h-[690px] items-center gap-10 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={clipRevealVariants}
          >
            <h1 className="font-playfair text-6xl font-semibold leading-none text-[var(--color-earth-dark)] md:text-8xl lg:text-[98px]">
              Let&apos;s Grow
              <br />
              Something Great
              <br />
              <span className="text-[var(--color-green-forest)]">Together</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-earth-mid)]">
              We are here to answer your questions, listen to your needs, and
              provide the best solutions for your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              {heroBenefits.map((benefit) => (
                <span key={benefit.title} className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[var(--color-earth-dark)]">
                      {benefit.title}
                    </span>
                    <span className="text-xs text-[var(--color-earth-mid)]">
                      {benefit.detail}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          </motion.div>

          <div className="relative hidden min-h-[450px] lg:flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full min-h-[400px]"
            >
              <Image
                src={images.pepperPng2}
                alt="Contact Al Baraka"
                fill
                priority
                className="object-contain drop-shadow-[0_32px_40px_rgba(16,38,26,0.18)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-white pb-20 overflow-hidden">
        <FloatingLeaves />
        <div className="container mx-auto grid gap-10 px-4 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeftVariants}
            className="soft-card rounded-[28px] p-8 md:p-10"
          >
            <h2 className="font-playfair text-3xl text-[var(--color-earth-dark)]">
              Contact Information
            </h2>
            <div className="mt-7 grid gap-5">
              {contactCards.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[var(--color-leaf-soft)] text-[var(--color-green-forest)]">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-semibold text-[var(--color-earth-dark)]">
                      {item.label}
                    </span>
                    <span className="whitespace-pre-line text-sm leading-6 text-[var(--color-earth-mid)]">
                      {item.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[18px] bg-[var(--color-leaf-soft)] p-5 text-sm text-[var(--color-earth-mid)]">
              <PackageCheck className="mb-3 h-5 w-5 text-[var(--color-green-forest)]" />
              We export premium fruits and vegetables to partners across
              multiple markets.
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRightVariants}
            className="soft-card rounded-[28px] p-8 md:p-10"
          >
            <h2 className="font-playfair text-3xl text-[var(--color-earth-dark)]">
              Send Us a Message
            </h2>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="mt-8 flex min-h-[360px] flex-col items-center justify-center rounded-[22px] bg-[var(--color-leaf-soft)] text-center"
                >
                  <CheckCircle2 className="mb-5 h-16 w-16 text-[var(--color-green-forest)]" />
                  <h3 className="font-playfair text-4xl text-[var(--color-earth-dark)]">
                    Message Sent
                  </h3>
                  <p className="mt-3 text-[var(--color-earth-mid)]">
                    Thank you. We will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 grid gap-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Your Name" error={errors.fullName?.message}>
                      <input
                        {...register("fullName")}
                        placeholder="Your Name *"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Company Name">
                      <input
                        {...register("company")}
                        placeholder="Company Name"
                        className="form-input"
                      />
                    </Field>
                  </div>
                  <Field label="Email Address" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      placeholder="Email Address *"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Phone Number" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      placeholder="Phone Number"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Subject" error={errors.subject?.message}>
                    <div className="relative">
                      <select
                        {...register("subject")}
                        className="form-input appearance-none"
                      >
                        <option value="">Subject *</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Private Label">Private Label</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-earth-mid)]" />
                    </div>
                  </Field>
                  <Field label="Your Message" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      placeholder="Your Message *"
                      rows={6}
                      className="form-input resize-none"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-7 py-4 font-semibold text-white shadow-[0_18px_34px_rgba(15,107,58,0.22)] disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-5 w-5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="soft-card overflow-hidden rounded-[28px]"
          >
            <div className="p-8 text-center">
              <h2 className="font-playfair text-4xl text-[var(--color-earth-dark)]">
                Find Us
              </h2>
              <p className="mt-2 text-sm text-[var(--color-earth-mid)]">
                Visit our office or reach out anytime.
              </p>
            </div>
            <div className="relative h-[430px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185012588!2d31.258464350000003!3d30.05961135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.8) contrast(1.04)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="soft-card absolute left-8 top-8 rounded-[18px] p-5">
                <h3 className="font-semibold text-[var(--color-earth-dark)]">
                  Al Baraka Head Office
                </h3>
                <p className="mt-2 text-sm text-[var(--color-earth-mid)]">
                  Al Azbakiyah, Cairo, Egypt 11511
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-4xl text-[var(--color-earth-dark)]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-[var(--color-earth-mid)]">
              Quick answers to common questions.
            </p>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-[18px] border border-black/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-[var(--color-earth-dark)]"
                >
                  <span className="flex items-center gap-3">
                    <Leaf className="h-4 w-4 text-[var(--color-green-forest)]" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-12 pb-5 text-sm leading-7 text-[var(--color-earth-mid)]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white pb-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scaleRevealVariants}
            className="botanical-shell relative overflow-hidden rounded-[28px] border border-black/10 p-8 md:p-10"
          >
            <video
              src={videos.contactClosing}
              className="absolute inset-y-0 left-0 hidden h-full w-1/3 object-cover opacity-[0.45] md:block"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
            <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_auto_auto_auto] md:pl-[32%]">
              <div>
                <h2 className="font-playfair text-4xl text-[var(--color-green-forest)]">
                  Ready to Start a Partnership?
                </h2>
                <p className="mt-2 text-sm text-[var(--color-earth-mid)]">
                  We are ready to supply the best quality products for your
                  business.
                </p>
              </div>
              {partnershipBenefits.map((benefit) => (
                <span
                  key={benefit.label}
                  className="text-center text-xs font-semibold text-[var(--color-earth-dark)]"
                >
                  <span className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-green-forest)]">
                    <benefit.icon className="h-5 w-5" />
                  </span>
                  {benefit.label}
                </span>
              ))}
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-[var(--color-green-forest)] px-6 py-3 font-semibold text-white"
              >
                View Products <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
