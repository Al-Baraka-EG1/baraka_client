import {
  CalendarDays,
  Handshake,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Sprout,
  Truck,
} from "lucide-react";

const trustItems = [
  { icon: Leaf, value: "100% Natural", detail: "Pure and carefully selected" },
  {
    icon: ShieldCheck,
    value: "ISO Certified",
    detail: "Quality you can trust",
  },
  {
    icon: CalendarDays,
    value: "Since 1995",
    detail: "30+ years of excellence",
  },
  { icon: Truck, value: "Cold Chain", detail: "Delivered fresh always" },
];

const qualityItems = [
  {
    icon: Sprout,
    title: "Freshness",
    copy: "Picked at the peak of freshness and moved with careful handling.",
  },
  {
    icon: PackageCheck,
    title: "Quality",
    copy: "Every batch is checked before it leaves our distribution process.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    copy: "Strong relationships with trusted growers in Egypt and Poland.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain",
    copy: "Temperature-aware logistics protect texture, color, and taste.",
  },
];

export { trustItems, qualityItems };
