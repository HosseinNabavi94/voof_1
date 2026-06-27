"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "./product-card";
import { products } from "@/lib/products";

// The four most recently added products (latest entries first).
const featuredProducts = products.slice(-4).reverse();

export function CollectionGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">انتخاب محصول</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            هر قطعه روایتگر داستانیست از ریشه‌هایمان
          </p>
        </motion.div>

        {/* Asymmetrical grid — tuned for four pieces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:pt-12">
            <ProductCard
              {...featuredProducts[0]}
              index={0}
            />
          </div>
          <div>
            <ProductCard
              {...featuredProducts[1]}
              index={1}
            />
          </div>
          <div className="lg:pt-24">
            <ProductCard
              {...featuredProducts[2]}
              index={2}
            />
          </div>
          <div className="lg:pt-8">
            <ProductCard
              {...featuredProducts[3]}
              index={3}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link
            href="/shop"
            className="inline-flex items-center text-sm border-b border-foreground pb-1 hover:border-transparent transition-colors duration-300"
          >
            مشاهده همه محصولات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
