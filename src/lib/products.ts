import { ProductsType } from "@/types/ProductsTypes";

export const products: ProductsType[] = [
  { slug: "red-bell", name: "Red Bell Peppers", category: "fresh", type: "vegetable",
    tagline: "Vibrant, sweet, and bursting with Vitamin C",
    description: "Hand-picked organic red bell peppers harvested at optimal ripeness. Crisp texture, vibrant color, and natural sweetness. Chemical-free and pesticide-free.",
    uses: ["Fresh Salads & Crudités", "Soups, Stews & Stir-Fries", "Roasted & Grilled Vegetables", "Stuffed Peppers & Casseroles"],
    storage: "Keep refrigerated at 4–8°C. Use within 7–10 days of delivery.",
    certifications: ["ISO Certified", "HACCP Certified", "100% Natural"],
    color: "#C0392B",
    accentColor: "#E74C3C"
  },
  { slug: "green-bell", name: "Green Bell Peppers", category: "fresh", type: "vegetable",
    tagline: "Crisp, robust, and packed with flavor",
    description: "Farm-fresh organic green bell peppers with thick walls and satisfying crunch. Rich in Vitamin C, antioxidants, and dietary fiber.",
    uses: ["Fresh Salads & Crudités", "Soups, Stews & Stir-Fries", "Stuffed Peppers & Fajitas", "Roasted & Grilled Vegetables"],
    storage: "Keep refrigerated at 4–8°C. Use within 7–10 days of delivery.",
    certifications: ["ISO Certified", "HACCP Certified", "100% Natural"],
    color: "#1E4D2B",
    accentColor: "#2E7D4F"
  },
  { slug: "yellow-bell", name: "Yellow Bell Peppers", category: "fresh", type: "vegetable",
    tagline: "Sun-ripened golden sweetness",
    description: "Exceptionally high in Vitamin C with a vibrant golden color and mild sweet flavor. Perfect for salads, stir-fries, roasting, or raw snacking.",
    uses: ["Fresh Salads & Crudités", "Soups, Stews & Stir-Fries", "Stuffed Peppers & Fajitas", "Roasted & Grilled Vegetables"],
    storage: "Keep refrigerated at 4–8°C. Use within 7–10 days of delivery.",
    certifications: ["ISO Certified", "HACCP Certified", "100% Natural"],
    color: "#F39C12",
    accentColor: "#F1C40F"
  },
  { slug: "carrots", name: "Fresh Carrots", category: "fresh", type: "vegetable",
    tagline: "Farm-fresh sweetness, harvested at peak ripeness",
    description: "Organic, pesticide-free carrots with natural sweetness and vibrant color. Harvested at optimal ripeness for maximum nutrition.",
    uses: ["Fresh Salads & Crudités", "Soups, Stews & Stir-Fries", "Fresh Juices & Smoothies", "Roasted & Grilled Vegetables"],
    storage: "Keep refrigerated at 0–4°C. Use within 2–3 weeks of delivery.",
    certifications: ["ISO Certified", "HACCP Certified", "Organic"],
    color: "#E67E22",
    accentColor: "#D35400"
  },
  { slug: "apples", name: "Polish Apples", category: "fresh", type: "fruit",
    tagline: "Europe's finest orchards, delivered to your door",
    description: "Hand-picked premium apples from Poland's largest apple-growing region. Exceptional flavor, natural juiciness, and perfect crunch. Sourced via our partner Marianna in Warsaw.",
    uses: ["Fresh Snacking & Fruit Bowls", "Baking, Tarts & Pastries", "Homemade Applesauce & Desserts", "Healthy Lunchbox Ideas"],
    storage: "Keep refrigerated at 0–4°C. Best consumed within 4–6 weeks.",
    certifications: ["ISO Certified", "HACCP Certified", "Grade 1"],
    color: "#C0392B",
    accentColor: "#922B21"
  },
  { slug: "strawberries", name: "Frozen Strawberries", category: "frozen", type: "fruit",
    tagline: "Flash-frozen at peak ripeness — nutrients locked in",
    description: "Hand-picked strawberries immediately flash-frozen using IQF technology to lock in vitamins and natural sweetness. No preservatives, no additives.",
    uses: ["Smoothies & Refreshing Bowls", "Baking, Tarts & Pastries", "Homemade Jams & Sauces", "Healthy Fruit Snacks"],
    storage: "Keep frozen at -18°C. Do not refreeze after thawing.",
    certifications: ["ISO Certified", "HACCP Certified", "IQF Technology", "No Preservatives"],
    color: "#C0392B",
    accentColor: "#E91E8C"
  }
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}
