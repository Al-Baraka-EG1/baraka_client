import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import ProductDetailPage from "@/components/pages/products/ProductDetailPage";
import { ProductsType } from "@/types/ProductsTypes";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
  };
}

export default function Page({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <ProductDetailPage 
      product={product} 
      relatedProducts={relatedProducts} 
    />
  );
}
