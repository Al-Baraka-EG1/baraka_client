"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { ProductsType } from "@/types/ProductsTypes";
import { useRef, useState } from "react";

export const useProductsAnimations = (products: ProductsType[]) => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useScrollFadeIn(heroRef, { y: 20 });
  useScrollFadeIn(gridRef, { stagger: 0.1 });
  useScrollFadeIn(ctaRef, { y: 30 });

  const filters = ["All", "Fresh", "Frozen", "Fruit", "Vegetable"];

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Fresh") return product.category === "fresh";
    if (activeFilter === "Frozen") return product.category === "frozen";
    if (activeFilter === "Fruit") return product.type === "fruit";
    if (activeFilter === "Vegetable") return product.type === "vegetable";
    return true;
  });

  return {
    heroRef,
    gridRef,
    ctaRef,
    activeFilter,
    setActiveFilter,
    filters,
    filteredProducts,
  };
};
