import ContactPage from "@/components/pages/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Al Baraka for bulk orders, private labeling, or any inquiries about our premium produce.",
};

export default function Page() {
  return <ContactPage />;
}
