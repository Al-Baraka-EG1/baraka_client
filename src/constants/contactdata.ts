import {
  Clock,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
} from "lucide-react";

const contactCards = [
  { icon: Phone, label: "Phone", value: "+20 100 123 4567\n+20 100 987 6543" },
  {
    icon: Mail,
    label: "Email",
    value: "info@albaraka.com.eg\nsales@albaraka.com.eg",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Al Azbakiyah, Cairo, Egypt\n11511",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sunday - Thursday\n9:00 AM - 5:00 PM",
  },
  {
    icon: Globe2,
    label: "Export Markets",
    value: "Middle East, Europe,\nAfrica and Asia",
  },
];

const heroBenefits = [
  { title: "Fast Response", detail: "We reply within 24 hours", icon: Leaf },
  {
    title: "Trusted Partner",
    detail: "Quality you can rely on",
    icon: ShieldCheck,
  },
];

const partnershipBenefits = [
  { label: "Premium Quality", icon: ShieldCheck },
  { label: "Reliable Supply", icon: PackageCheck },
  { label: "Global Standards", icon: Globe2 },
];

const faqs = [
  {
    q: "What types of products does Al Baraka offer?",
    a: "We offer fresh and frozen fruits and vegetables including bell peppers, carrots, apples, and IQF strawberries.",
  },
  {
    q: "Do you offer bulk orders and private labeling?",
    a: "Yes. Our team supports wholesale supply, private label discussions, and distribution partnerships.",
  },
  {
    q: "What certifications do you have?",
    a: "Our products and handling process follow ISO and HACCP quality standards.",
  },
  {
    q: "Which countries do you export to?",
    a: "We serve partners across the Middle East and beyond, with Egyptian supply and Polish apple sourcing through Marianna.",
  },
];

export { contactCards, heroBenefits, partnershipBenefits, faqs };
