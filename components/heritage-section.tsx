"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeritageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax background - converted to Next.js Image with lazy loading */}
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="/italian-atelier-workshop-artisan-crafting-luxury-l.jpg"
          alt="Heritage craftsmanship in Italian atelier"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs text-background/70 mb-6 block">
              میراث ما
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl text-background mb-8 leading-[1.15] text-balance">
              با نیت ساخته‌شده،
              <br />
              ساختِ ایتالیا
            </h2>
            <p className="text-background/80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              برای بیش از پنج نسل، استادکاران ما هنر لوکس آرام را به کمال
              رسانده‌اند. هر قطعه با دقت در آتلیه فلورانس ما ساخته می‌شود؛ جایی
              که سنت با نگاه امروزی پیوند می‌خورد.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xs mx-auto"
              >
                <h3 className="font-serif text-xl lg:text-2xl text-background mb-3">
                  صنعتگری اصیل
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">
                  هر قطعه با دستان استادکارانی شکل می‌گیرد که سال‌ها مهارت خود
                  را صیقل داده‌اند. جزئیات، همان جایی است که تفاوت دیده می‌شود.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-xs mx-auto"
              >
                <h3 className="font-serif text-xl lg:text-2xl text-background mb-3">
                  کیفیت بی‌زمان
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">
                  مرغوب‌ترین مواد را برمی‌گزینیم تا قطعه‌ای بسازیم که فراتر از
                  فصل‌ها دوام بیاورد. ماندگاری، نخستین وعده‌ی ماست.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-xs mx-auto"
              >
                <h3 className="font-serif text-xl lg:text-2xl text-background mb-3">
                  پایداری مسئولانه
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">
                  به منابع و دستانی که می‌آفرینند احترام می‌گذاریم. تولیدی
                  سنجیده، با کمترین اثر و بیشترین معنا.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
