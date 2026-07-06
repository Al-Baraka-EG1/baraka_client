import { CheckCircle2, PackageCheck, ShieldCheck, Sprout } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Freshness",
    copy: "We focus on clean, market-ready fresh and frozen products prepared according to buyer needs.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    copy: "We build long-term supply relationships through clear communication, careful handling, and dependable follow-up.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Focus",
    copy: "Every order is treated with attention to selection, packaging requirements, documentation, and shipment support.",
  },
];

const milestones = [
  [
    "01",
    "Understand Requirements",
    "We align on product type, quantity, specifications, packaging, destination, and delivery expectations.",
  ],
  [
    "02",
    "Prepare Supply",
    "Our team coordinates product selection, packing options, and export-ready preparation from Egypt.",
  ],
  [
    "03",
    "Support Documentation",
    "We support the buyer with shipment details, documentation flow, and clear communication.",
  ],
  [
    "04",
    "Build Partnership",
    "We follow up after each shipment to improve future programs and create a reliable long-term supply relationship.",
  ],
];

const partnerTypes = [
  { title: "Importers", icon: PackageCheck },
  { title: "Distributors", icon: CheckCircle2 },
  { title: "Wholesalers", icon: Sprout },
  { title: "Supermarkets", icon: ShieldCheck },
  { title: "Food Trading Companies", icon: PackageCheck },
];

export { milestones, values, partnerTypes };
