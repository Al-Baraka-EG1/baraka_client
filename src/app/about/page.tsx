import AboutPage from "@/components/pages/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Al Baraka's journey, mission, and our commitment to premium quality produce since 1995.",
};

export default function Page() {
  return <AboutPage />;
}
