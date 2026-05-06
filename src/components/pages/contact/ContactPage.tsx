"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { useContactAnimations } from "@/hooks/useContactAnimations";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { heroRef, infoRef, formRef, mapRef, faqRef } = useContactAnimations();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const faqs = [
    {
      q: "Do you offer bulk ordering?",
      a: "Yes, we specialize in wholesale and bulk ordering for businesses. Contact our sales team for custom pricing and terms.",
    },
    {
      q: "Do you ship internationally?",
      a: "Absolutely. We export across the Middle East, Europe, and beyond using state-of-the-art cold chain logistics.",
    },
    {
      q: "Are your products certified?",
      a: "All our products and facilities are ISO and HACCP certified, ensuring the highest standards of safety and quality.",
    },
    {
      q: "Can you do private labeling?",
      a: "Yes, we offer private labeling opportunities for our premium fresh and frozen produce lines. Let's discuss your brand's needs.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-earth-dark)] py-20 text-center">
        <div ref={heroRef} className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[var(--color-gold)] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/80 font-dm-sans max-w-2xl mx-auto">
            We&apos;re here to answer your questions and help you connect with
            Al Baraka. Whether it&apos;s a general inquiry or a bulk order
            request, our team is ready to assist.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div ref={infoRef} className="lg:w-1/3 flex flex-col gap-6">
              <h2 className="text-3xl font-playfair font-bold text-[var(--color-earth-dark)] mb-4">
                Contact Information
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-transparent hover:border-[var(--color-gold)] transition-colors flex items-start gap-4 group">
                <div className="bg-[var(--color-cream)] p-3 rounded-full group-hover:bg-[var(--color-gold)] transition-colors">
                  <MapPin className="w-6 h-6 text-[var(--color-earth-dark)]" />
                </div>
                <div>
                  <h3 className="font-bold font-dm-sans text-[var(--color-earth-dark)] mb-1">
                    Our Headquarters
                  </h3>
                  <p className="text-[var(--color-earth-mid)] text-sm">
                    Al Azbakiyah, Cairo, Egypt
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-transparent hover:border-[var(--color-gold)] transition-colors flex items-start gap-4 group">
                <div className="bg-[var(--color-cream)] p-3 rounded-full group-hover:bg-[var(--color-gold)] transition-colors">
                  <Phone className="w-6 h-6 text-[var(--color-earth-dark)]" />
                </div>
                <div>
                  <h3 className="font-bold font-dm-sans text-[var(--color-earth-dark)] mb-1">
                    Phone Number
                  </h3>
                  <p className="text-[var(--color-earth-mid)] text-sm">
                    +20 123 456 7890
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-transparent hover:border-[var(--color-gold)] transition-colors flex items-start gap-4 group">
                <div className="bg-[var(--color-cream)] p-3 rounded-full group-hover:bg-[var(--color-gold)] transition-colors">
                  <Mail className="w-6 h-6 text-[var(--color-earth-dark)]" />
                </div>
                <div>
                  <h3 className="font-bold font-dm-sans text-[var(--color-earth-dark)] mb-1">
                    Email Address
                  </h3>
                  <p className="text-[var(--color-earth-mid)] text-sm">
                    info@albarakafruits.com
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-transparent hover:border-[var(--color-gold)] transition-colors flex items-start gap-4 group">
                <div className="bg-[var(--color-cream)] p-3 rounded-full group-hover:bg-[var(--color-gold)] transition-colors">
                  <Clock className="w-6 h-6 text-[var(--color-earth-dark)]" />
                </div>
                <div>
                  <h3 className="font-bold font-dm-sans text-[var(--color-earth-dark)] mb-1">
                    Working Hours
                  </h3>
                  <p className="text-[var(--color-earth-mid)] text-sm">
                    Sun–Thu: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className="lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-playfair font-bold text-[var(--color-earth-dark)] mb-8">
                Send Us a Message
              </h2>
              {isSuccess ? (
                <div className="bg-[var(--color-green-fresh)]/10 text-[var(--color-green-forest)] p-8 rounded-2xl flex flex-col items-center justify-center text-center h-64 animate-in fade-in zoom-in">
                  <CheckCircle2 className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold font-playfair mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-dm-sans">
                    Thank you for reaching out. We will get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-earth-dark)]">
                        Full Name
                      </label>
                      <input
                        {...register("fullName")}
                        className="w-full bg-[var(--color-cream)] border border-transparent focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-earth-dark)]">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        className="w-full bg-[var(--color-cream)] border border-transparent focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-earth-dark)]">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        className="w-full bg-[var(--color-cream)] border border-transparent focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder="+20 123 456 7890"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-earth-dark)]">
                        Subject
                      </label>
                      <div className="relative">
                        <select
                          {...register("subject")}
                          className="w-full bg-[var(--color-cream)] border border-transparent focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] rounded-xl px-4 py-3 outline-none transition-all appearance-none"
                        >
                          <option value="">Select a subject...</option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Bulk Order">Bulk Order</option>
                          <option value="Partnership">
                            Partnership / Private Label
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-earth-mid)] pointer-events-none" />
                      </div>
                      {errors.subject && (
                        <p className="text-red-500 text-xs">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-earth-dark)]">
                      Your Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full bg-[var(--color-cream)] border border-transparent focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)] rounded-xl px-4 py-3 outline-none transition-all resize-none"
                      placeholder="How can we help you today?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-earth-dark)] font-bold uppercase tracking-wider py-4 rounded-xl transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section ref={mapRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-[var(--color-earth-dark)]">
              Find Us Here
            </h2>
          </div>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185012588!2d31.258464350000003!3d30.05961135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) contrast(1.2) opacity(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[var(--color-earth-dark)]">
              Frequently Asked Questions
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl shadow-sm border border-transparent open:border-[var(--color-gold)]/30 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold font-dm-sans text-[var(--color-earth-dark)] list-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-[var(--color-gold)]" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-earth-mid)] font-dm-sans leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
