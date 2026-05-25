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
import BackToTop from "@/components/global/BackToTop";
import { LenisScrollProvider } from "@/providers/LenisProvider";
import { MotionProvider } from "@/providers/MotionProvider";
 
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
    default: "Al BARAKA FOR IMPORT & EXPORT | Premium Produce",
    template: "%s | Al BARAKA FOR IMPORT & EXPORT",
  },
  description:
    "Al BARAKA FOR IMPORT & EXPORT is Egypt's leading provider of premium fresh and frozen fruits and vegetables. ISO & HACCP certified. Serving global markets.",
  keywords: [
    "Al BARAKA FOR IMPORT & EXPORT",
    "Al Baraka",
    "Al Baraka Import & Export",
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
    siteName: "Al BARAKA FOR IMPORT & EXPORT",
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
          <MotionProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <BackToTop />
          </MotionProvider>
        </LenisScrollProvider>
      </body>
    </html>
  );
}
