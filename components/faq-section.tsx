"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Edit or replace these texts freely — the component maps over this array,
// so changing the strings here is all that's needed.
const faqs = [
  {
    question: "ارسال سفارش چقدر زمان می‌برد؟",
    answer:
      "سفارش‌ها معمولاً ظرف ۲ تا ۵ روز کاری آماده و ارسال می‌شوند. پس از ارسال، کد رهگیری برای پیگیری مرسوله برایتان فرستاده می‌شود.",
  },
  {
    question: "چطور سایز مناسب خود را انتخاب کنم؟",
    answer:
      "در صفحه‌ی هر محصول جدول راهنمای سایز قرار دارد. اگر میان دو سایز مردد بودید، با پشتیبانی ما تماس بگیرید تا شما را راهنمایی کنیم.",
  },
  {
    question: "امکان تعویض یا مرجوع‌کردن کالا وجود دارد؟",
    answer:
      "تا ۷ روز پس از دریافت سفارش می‌توانید کالای استفاده‌نشده را تعویض یا مرجوع کنید. کافی است درخواست خود را از طریق حساب کاربری ثبت کنید.",
  },
  {
    question: "نگهداری و شست‌وشوی محصولات چگونه است؟",
    answer:
      "راهنمای نگهداری هر قطعه روی برچسب داخلی و در صفحه‌ی محصول آمده است. رعایت این نکات عمر و کیفیت لباس را به‌طور چشمگیری افزایش می‌دهد.",
  },
  {
    question: "چه روش‌های پرداختی پشتیبانی می‌شود؟",
    answer:
      "پرداخت آنلاین از طریق درگاه‌های بانکی معتبر انجام می‌شود. تمام تراکنش‌ها رمزنگاری‌شده و کاملاً امن هستند.",
  },
  {
    question: "چطور می‌توانم وضعیت سفارشم را پیگیری کنم؟",
    answer:
      "پس از ورود به حساب کاربری، در بخش سفارش‌ها وضعیت لحظه‌ای هر سفارش نمایش داده می‌شود. کد رهگیری نیز از طریق پیامک برایتان ارسال می‌شود.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">پرسش‌های پرتکرار</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            پاسخ پرسش‌های رایج شما درباره خرید، ارسال و نگهداری
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-border"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full text-right px-6 py-5 gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm lg:text-base text-[#4e0000]">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 flex-shrink-0" strokeWidth={1} />
                ) : (
                  <Plus className="w-4 h-4 flex-shrink-0" strokeWidth={1} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
