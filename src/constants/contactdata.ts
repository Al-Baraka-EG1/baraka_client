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
  { icon: Phone, label: "Phone", value: "+20 10 01269029\n+20 2 24142974" },
  {
    icon: Mail,
    label: "Email",
    value: "info@albaraka-eg.org",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "64 Rabaa Investment Buildings\nNasr City, 11765 Cairo, Egypt",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sunday - Thursday\n9:00 AM - 5:00 PM",
  },
  {
    icon: Globe2,
    label: "Buyer Types",
    value: "Importers, distributors, wholesalers, supermarkets\nand food trading companies",
  },
];

const heroBenefits = [
  { title: "Fast Response", detail: "Supply details and quotation support", icon: Leaf },
  {
    title: "Export Partner",
    detail: "Fresh and frozen products from Egypt",
    icon: ShieldCheck,
  },
];

const partnershipBenefits = [
  { label: "Reliable Supply", icon: PackageCheck },
  { label: "Flexible Packaging", icon: Leaf },
  { label: "Shipment Support", icon: Globe2 },
];

const faqs = [
  {
    q: "What types of products does Al Baraka offer?",
    a: "We supply fresh products such as carrots, potatoes, colored peppers, broccoli, citrus fruits, garlic, onions, and green beans, plus frozen products such as strawberries, mango, green peas, green beans, molokhia, okra, mixed vegetables, carrot cuts, spinach, and broccoli.",
  },
  {
    q: "Who does Al Baraka work with?",
    a: "We work with importers, distributors, wholesalers, supermarkets, and food trading companies looking for reliable fresh and frozen product supply from Egypt.",
  },
  {
    q: "Do you support packaging and shipment requirements?",
    a: "Yes. Our team supports flexible packaging discussions, product specifications, documentation, and shipment support according to buyer requirements.",
  },
  {
    q: "Where is Al Baraka located?",
    a: "Our office is located at 64 Rabaa Investment Buildings, Nasr City, 11765 Cairo, Egypt.",
  },
];

export { contactCards, heroBenefits, partnershipBenefits, faqs };
