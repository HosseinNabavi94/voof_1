"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function PremiumFooter() {
  const articles = [
    { label: "داستان ووف", href: "/heritage" },
    { label: "فرصت‌های شغلی", href: "/careers" },
    { label: "تماس با ما", href: "/contact" },
    { label: "ارسال و مرجوعی", href: "/shipping" },
    { label: "دستورالعمل‌های نگهداری", href: "/care" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Newsletter — leads the row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="font-serif text-xl mb-4">در ارتباط بمانید</h3>
            <p className="text-background/60 text-sm mb-6 leading-relaxed max-w-md">
              برای دسترسی اختصاصی به مجموعه‌های جدید و رویدادهای خصوصی عضو شوید.
            </p>
            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full bg-transparent border-0 border-b border-background/30 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-background transition-colors"
              />
              <button className="absolute left-0 top-1/2 -translate-y-1/2 text-xs hover:opacity-60 transition-opacity">
                عضویت
              </button>
            </div>
          </motion.div>

          {/* مقالات links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 className="text-xs mb-6 text-background/60">مقالات</h4>
            <ul className="space-y-3">
              {articles.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-serif text-lg">
              ووف
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                className="hover:opacity-60 transition-opacity"
                aria-label="اینستاگرام"
              >
                <Instagram className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href="https://facebook.com"
                className="hover:opacity-60 transition-opacity"
                aria-label="فیسبوک"
              >
                <Facebook className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href="https://twitter.com"
                className="hover:opacity-60 transition-opacity"
                aria-label="توییتر"
              >
                <Twitter className="h-4 w-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div className="text-xs text-background/50">
            <span>© ۱۴۰۴ . تمامی حقوق برای تیم ووف محفوظ است</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
