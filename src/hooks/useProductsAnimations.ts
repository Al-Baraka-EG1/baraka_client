"use client";

import { useScrollFadeIn } from "@/lib/animations";
import { ProductsType } from "@/types/ProductsTypes";
import { useMemo, useRef, useState } from "react";

export type ProductFilterId =
  | "all"
  | "fresh-vegetable"
  | "fresh-fruit"
  | "frozen-vegetable"
  | "frozen-fruit";

export type ProductFilter = {
  id: ProductFilterId;
  label: string;
  helper: string;
};

export const productFilters: ProductFilter[] = [
  { id: "all", label: "All Products", helper: "Fresh & frozen" },
  { id: "fresh-vegetable", label: "Fresh Vegetables", helper: "Egyptian farms" },
  { id: "fresh-fruit", label: "Fresh Fruits", helper: "Seasonal supply" },
  { id: "frozen-vegetable", label: "Frozen Vegetables", helper: "IQF & prepared" },
  { id: "frozen-fruit", label: "Frozen Fruits", helper: "Year-round" },
];

export const getProductFilterId = (product: ProductsType): ProductFilterId =>
  `${product.category}-${product.type}` as ProductFilterId;

export const getSegmentLabel = (product: ProductsType) => {
  if (product.category === "fresh" && product.type === "vegetable") return "Fresh Vegetables";
  if (product.category === "fresh" && product.type === "fruit") return "Fresh Fruits";
  if (product.category === "frozen" && product.type === "vegetable") return "Frozen Vegetables";
  return "Frozen Fruits";
};

export const useProductsAnimations = (products: ProductsType[]) => {
  const [activeFilter, setActiveFilter] = useState<ProductFilterId>("all");

  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useScrollFadeIn(heroRef, { y: 20 });
  useScrollFadeIn(gridRef, { stagger: 0.1 });
  useScrollFadeIn(ctaRef, { y: 30 });

  const filterCounts = useMemo(() => {
    return productFilters.reduce<Record<ProductFilterId, number>>(
      (acc, filter) => {
        acc[filter.id] =
          filter.id === "all"
            ? products.length
            : products.filter((product) => getProductFilterId(product) === filter.id).length;
        return acc;
      },
      {
        all: 0,
        "fresh-vegetable": 0,
        "fresh-fruit": 0,
        "frozen-vegetable": 0,
        "frozen-fruit": 0,
      }
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter((product) => getProductFilterId(product) === activeFilter);
  }, [activeFilter, products]);

  return {
    heroRef,
    gridRef,
    ctaRef,
    activeFilter,
    setActiveFilter,
    filters: productFilters,
    filterCounts,
    filteredProducts,
  };
};
