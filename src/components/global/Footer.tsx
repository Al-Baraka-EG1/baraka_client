import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-earth-dark)] text-white/80 border-t border-[var(--color-gold)]/30">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Leaf className="w-8 h-8 text-[var(--color-gold)]" />
              <span className="font-playfair text-3xl font-bold tracking-wider text-[var(--color-gold)]">
                AL BARAKA
              </span>
            </Link>
            <p className="text-sm font-dm-sans leading-relaxed">
              Leading provider of premium fruits and vegetables. Bringing nature's best to your table since 1995.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-dm-sans text-[var(--color-gold)]">Follow us on social media</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[var(--color-gold)] font-bold text-sm tracking-widest uppercase">Quick Links</h4>
            <div className="flex flex-col gap-3 font-dm-sans text-sm">
              <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">About Us</Link>
              <Link href="/products" className="hover:text-[var(--color-gold)] transition-colors">Our Products</Link>
              <Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Our Products */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[var(--color-gold)] font-bold text-sm tracking-widest uppercase">Our Products</h4>
            <div className="flex flex-col gap-3 font-dm-sans text-sm">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="hover:text-[var(--color-gold)] transition-colors">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[var(--color-gold)] font-bold text-sm tracking-widest uppercase">Get In Touch</h4>
            <div className="flex flex-col gap-4 font-dm-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>Al Azbakiyah, Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>+20 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>info@albarakafruits.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span>Sun–Thu: 9:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-dm-sans text-xs text-white/50">
          <p>© {new Date().getFullYear()} Al Baraka Fruits & Vegetables. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
