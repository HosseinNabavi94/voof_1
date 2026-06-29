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
          src="/voof_heritage.webp"
          alt="Heritage Voof"
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
              چرا ووف؟
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl text-background mb-8 leading-[1.15] text-balance">
              روایتی از گذشته،
              <br />
              در قامت امروز
            </h2>
            <p className="text-background/80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              ووف، صدای ریشه‌هایی‌ست که خاموش نمی‌شوند؛ جایی که زبان مادریمان در تار و پود هر لباس زنده می‌ماند و هویت دیروز ما، در زندگی امروزمان نفس می‌کشد.
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
                  اصالت در دل طراحی مدرن
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">
                  طرح‌های ووف، پیوند زیبایی مدرن با عمق و اصالت فرهنگ مازندران‌ند. 
هر لباس یک داستان است؛ داستانی که از دریا تا جنگل همراهت می‌آید و در زندگی امروزی تو ادامه پیدا می‌کند.
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
                  زبان مادری، میراث ما
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">
هر لباس، حامل یک واژه، یک حس و یک روایت از دل فرهنگ اصیلمان است.
ما برای زنده‌ماندنِ زبان مادری  ایستاده‌ایم؛ تا نسل‌های بعدی، هویت‌شان را نه از گذشته، که از دل زندگی امروز دوباره بشنوند.

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
                  نفسی تازه برای جنگل‌های هیرکانی
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">
                  به ازای هر ۱۰ لباسی که به فروش می‌رسد، یک نهال در دل هیرکانی می‌نشانیم
تو فقط خریدار نیستی؛ تو شریک ما در حفظ خانه‌ی سبزمانی، جایی که ریشه‌هایمان در خاکش تنیده و برگ‌هایمان در آن تنفس می‌کنند.

                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
