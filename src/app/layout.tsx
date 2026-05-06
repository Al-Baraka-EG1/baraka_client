import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Sans,
  Cormorant_Garamond,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { LenisScrollProvider } from "@/components/providers/LenisProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Al Baraka | Premium Fruits & Vegetables",
    template: "%s | Al Baraka",
  },
  description:
    "Al Baraka is Egypt's leading provider of premium fresh and frozen fruits and vegetables. ISO & HACCP certified. Serving the Middle East since 1995.",
  keywords: [
    "Al Baraka",
    "Egyptian produce",
    "fresh vegetables",
    "frozen fruits",
    "Cairo",
    "premium produce",
    "bell peppers",
    "carrots",
    "Polish apples",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://albarakafruits.com",
    siteName: "Al Baraka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} ${spaceMono.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
