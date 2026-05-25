import TermsPage from "@/components/pages/terms/TermsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the commercial terms and conditions of Al BARAKA FOR IMPORT & EXPORT regarding wholesale pricing, Incoterms, and food safety certifications.",
};

export default function Page() {
  return <TermsPage />;
}
