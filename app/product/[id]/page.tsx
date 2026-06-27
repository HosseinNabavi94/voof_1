"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { ProductGallery } from "@/components/product-gallery";
import { SizeSelector } from "@/components/size-selector";
import { ColorSelector } from "@/components/color-selector";
import { ProductDetailsAccordion } from "@/components/product-details-accordion";
import { RelatedProducts } from "@/components/related-products";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { ChevronLeft } from "lucide-react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id, 4);

  const accordionItems = [
    {
      title: "جزئیات",
      content: product.details,
    },
    {
      title: "مواد",
      content: product.materials,
    },
    {
      title: "نگهداری",
      content: product.care,
    },
    {
      title: "ارسال و مرجوعی",
      content: [
        "ارسال رایگان برای همه سفارش‌ها",
        "امکان ارسال سریع",
        "مرجوعی رایگان تا ۳۰ روز",
        "کالا باید استفاده‌نشده و همراه با برچسب باشد",
      ],
    },
  ];

  const galleryImages = [
    product.image,
    product.hoverImage,
    product.image.replace("query=", "query=detail "),
    product.hoverImage.replace("query=", "query=closeup "),
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            خانه
          </Link>
          <ChevronLeft className="w-3 h-3" />
          <Link
            href="/shop"
            className="hover:text-foreground transition-colors"
          >
            فروشگاه
          </Link>
          <ChevronLeft className="w-3 h-3" />
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <ChevronLeft className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductGallery images={galleryImages} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:sticky lg:top-32 lg:self-start space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl">
                {product.name}
              </h1>
              <p className="text-xl">
                {product.price.toLocaleString("fa-IR")} تومان
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <ColorSelector colors={product.colors} />
            )}

            {/* Size Selector */}
            <SizeSelector sizes={product.sizes} />

            {/* Add to Bag */}
            <motion.button
              className="w-full py-4 bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              افزودن به سبد
            </motion.button>

            {/* Made In */}
            <p className="text-xs text-muted-foreground text-center">
              ساخت {product.madeIn}
            </p>

            {/* Accordion */}
            <ProductDetailsAccordion items={accordionItems} />
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <PremiumFooter />
    </main>
  );
}
