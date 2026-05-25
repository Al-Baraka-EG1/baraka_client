import PrivacyPage from "@/components/pages/privacy/PrivacyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Al BARAKA FOR IMPORT & EXPORT's privacy policy. Learn how we safeguard B2B wholesale client data and quote requests.",
};

export default function Page() {
  return <PrivacyPage />;
}
