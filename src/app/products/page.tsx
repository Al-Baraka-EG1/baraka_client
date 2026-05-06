import ProductsPage from "@/components/pages/products/ProductsPage";
import { products } from "@/lib/products";
import { ProductsType } from "@/types/ProductsTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our premium selection of fresh and frozen fruits and vegetables sourced from the best farms in Egypt and Poland.",
};

export default function Page() {
  return <ProductsPage products={products} />;
}
