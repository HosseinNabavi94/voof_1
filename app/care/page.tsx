"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, TreePine, ArrowLeft, Plus } from "lucide-react";

const ACCENT = "#4e0000";

// Fixed contribution per planted tree (تومان). Single source of truth.
const CONTRIBUTION_PER_TREE = 850000;

// Placeholder payment destination. See handleCheckout() for the integration note.
const PAYMENT_PLACEHOLDER_URL = "/payment-placeholder";

const toFa = (n: number) => n.toLocaleString("fa-IR");

interface Recipient {
  firstName: string;
  lastName: string;
  phone: string;
  treeName: string;
}

const emptyRecipient = (): Recipient => ({
  firstName: "",
  lastName: "",
  phone: "",
  treeName: "",
});

/**
 * MOCK DATA — temporary.
 * TODO: Replace with real planted-tree records from the database.
 * Each pin should later come from a `trees` table (person name, tree number,
 * planting date, lat/lng). The x/y values below are schematic percentages on
 * the illustrative map, NOT real GIS coordinates.
 */
const treePins = [
  { id: 1, name: "آرمان رضایی", tree: "ووف-۰۲۴", date: "۱۴۰۳/۰۲/۱۵", x: 28, y: 38 },
  { id: 2, name: "نگار موسوی", tree: "ووف-۰۵۱", date: "۱۴۰۳/۰۴/۰۲", x: 52, y: 26 },
  { id: 3, name: "سهیل کریمی", tree: "ووف-۰۸۹", date: "۱۴۰۳/۰۵/۲۰", x: 66, y: 54 },
  { id: 4, name: "مریم احمدی", tree: "ووف-۱۱۲", date: "۱۴۰۳/۰۷/۰۸", x: 40, y: 62 },
  { id: 5, name: "پارسا نادری", tree: "ووف-۱۴۷", date: "۱۴۰۳/۰۸/۱۹", x: 78, y: 36 },
];

export default function CarePage() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const [plantOpen, setPlantOpen] = useState(false);
  const [recipients, setRecipients] = useState<Recipient[]>([emptyRecipient()]);

  const updateRecipient =
    (index: number, field: keyof Recipient) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRecipients((prev) =>
        prev.map((r, i) =>
          i === index ? { ...r, [field]: e.target.value } : r,
        ),
      );
    };

  const addRecipient = () =>
    setRecipients((prev) => [...prev, emptyRecipient()]);

  const removeRecipient = (index: number) =>
    setRecipients((prev) => prev.filter((_, i) => i !== index));

  const total = recipients.length * CONTRIBUTION_PER_TREE;

  const isValid = recipients.every(
    (r) => r.firstName && r.lastName && r.phone && r.treeName,
  );

  const handleCheckout = () => {
    // TODO: Integrate the real payment gateway here (e.g. Zarinpal).
    // Build the order from `recipients` and `total`, create a payment session
    // on the server, then redirect the user to the gateway. For now we simply
    // navigate to a clearly-marked placeholder URL.
    window.location.href = PAYMENT_PLACEHOLDER_URL;
  };

  const selectedPin = treePins.find((p) => p.id === activePin) || null;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 1 — Hero (matches Heritage page) */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Placeholder image — replace later with a Hyrcanian forest shot. */}
          <Image
            src="/caspianـhyrcanianـforest.webp"
            alt="جنگل‌های هیرکانی"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs text-background/70 mb-6 block"
          >
            مراقبت از وطن، فراتر از یک خرید
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-background mb-6 leading-[1.2] text-balance"
          >
            برای بازگشت نفس‌های هیرکان
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >### وقتی جنگل دوباره نفس می‌کشد

جنگل‌های هیرکانی فقط درختان کهنسال نیستند؛ خاطره‌ی زنده‌ی این سرزمین‌اند. هر شاخه، روایت هزاران سال ایستادگی است و هر برگ، نفسی که هنوز زندگی را در رگ‌های وطن جاری نگه داشته است. ما باور داریم اگر بتوانیم حتی یک نهال به این میراث کهن بازگردانیم، امیدی را به خاک سپرده‌ایم که روزی سایه‌اش بر شانه‌های فرزندان این سرزمین خواهد افتاد. ووف برای همین کنار طبیعت ایستاده است؛ تا هیرکان دوباره نفس بکشد
.
          </motion.p>
        </div>
      </section>

      {/* 2 — Hyrcanian Forests Story */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-xs text-muted-foreground mb-4 block">
              میراث زنده‌ی زمین
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl">
              جنگل‌های هیرکانی مازندران
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              در شمال ایران، جایی که دریا به کوه می‌رسد، نواری سبز و باستانی
              کشیده شده است؛ جنگل‌های هیرکانی. این جنگل‌ها بازمانده‌ی روزگارانی
              هستند که میلیون‌ها سال پیش، پیش از یخبندان‌های بزرگ، بخش وسیعی از
              زمین را پوشانده بودند. آن‌ها از معدود جنگل‌هایی‌اند که از آن دوران
              تا امروز زنده مانده‌اند و حافظه‌ی زنده‌ی سیاره‌ی ما به شمار می‌روند.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              این میراث کهن چنان ارزشمند است که یونسکو آن را در فهرست میراث جهانی
              ثبت کرده است. هیرکانی خانه‌ی هزاران گونه‌ی گیاهی و جانوری‌ست؛ زیستگاهی
              که هوا را پاک می‌کند، باران می‌آورد و تعادل زندگی را در این سرزمین
              نگه می‌دارد. هر درخت آن، فصلی از تاریخ طبیعت است.
            </p>
          </motion.div>

          {/* Image — replace later */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mt-16 lg:mt-20"
          >
            <div className="relative aspect-[16/10] overflow-hidden group">
              <Image
                src="/koodir_mazandaran_iran.webp"
                alt="ووف جنگل‌های هیرکانی"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6 mt-16 lg:mt-20"
          >
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              اما این گنجینه شکننده است. توسعه‌ی بی‌رویه، قطع درختان و تغییر اقلیم،
              آرام‌آرام مرزهای این جنگل‌ها را عقب می‌رانند. آنچه میلیون‌ها سال
              دوام آورده، می‌تواند در یک نسل آسیب ببیند. حفاظت از هیرکانی تنها
              دفاع از درختان نیست؛ پاسداری از آینده‌ای‌ست که فرزندان ما در آن نفس
              خواهند کشید.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              ما در ووف باور داریم که زیبایی و مسئولیت از هم جدا نیستند. به همین
              دلیل بخشی از مسیر ما به این جنگل‌ها گره خورده است؛ تا هر قطعه‌ای که
              می‌سازیم، یادآور تعهدمان به سرزمینی باشد که ریشه‌های همه‌ی ما در آن
              تنیده شده است.
            </p>
          </motion.div>

          {/* Image — replace later */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mt-16 lg:mt-20"
          >
            <div className="relative aspect-[16/10] overflow-hidden group">
              <Image
                src="/BuxusـhyrcanaـPojark.webp"
                alt="طبیعت هیرکانی"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 — Caspian Boxwood Restoration */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-xs text-muted-foreground mb-4 block">
              بازآفرینی زندگی
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl">
              احیای شمشاد خزری
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              شمشاد خزری یکی از کهن‌ترین و زیباترین درختان جنگل‌های هیرکانی است؛
              درختی همیشه‌سبز که قرن‌ها سایه‌سار این سرزمین بوده. اما در سال‌های
              اخیر، آفت‌ها و بیماری‌ها بخش بزرگی از این گونه‌ی ارزشمند را از بین
              برده‌اند و امروز شمشاد خزری در خطر انقراض قرار دارد.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              پروژه‌های احیای شمشاد می‌کوشند تا با کاشت نهال‌های مقاوم، حفاظت از
              رویشگاه‌ها و مراقبت مستمر، این درخت را به جنگل بازگردانند. احیای
              تنوع زیستی تنها نجات یک گونه نیست؛ بازگرداندن تعادلی‌ست که سلامت کل
              جنگل به آن وابسته است.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify">
              این مسیر را نمی‌توان تنها پیمود. وقتی برندها و جامعه‌ها دست به دست
              هم می‌دهند — با حمایت از کاشت، آگاهی‌بخشی و مشارکت داوطلبانه — هر
              نهال کوچک به امیدی بزرگ بدل می‌شود. ووف باور دارد که هر قدم، هرچند
              کوچک، می‌تواند بخشی از این بازآفرینی باشد.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 — Environmental Mission */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs text-background/60 mb-4 block">
              مأموریت ما
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mb-8 leading-[1.2] text-balance">
              بیا با هم جنگل را زنده نگه داریم
            </h2>
            <p className="text-background/80 text-lg leading-relaxed">
              هر همراهی، هر نهال و هر دست کوچک، بخشی از داستانی بزرگ‌تر است؛
              داستان سرزمینی که می‌خواهیم سبزتر از امروز به فردا بسپاریم. این
              راه با باور به آینده آغاز می‌شود و با همراهی تو ادامه پیدا می‌کند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5 — Interactive Forest Map (UI only) */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-xs text-muted-foreground mb-4 block">
              نقشه‌ی مشارکت
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl">
              جنگلی که با هم می‌سازیم
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-xl mx-auto">
              هر نشان روی این نقشه، نهالی‌ست که به نام یکی از همراهان ووف کاشته
              شده است. روی هر نشان بزن تا داستانش را ببینی.
            </p>
          </motion.div>

          {/*
            UI-ONLY schematic map. This is an illustrative placeholder, NOT a
            real GIS map. Pins are positioned by percentage (x/y) from mock data.
            TODO: Replace with real coordinates and records from the database,
            and optionally swap the schematic background for a stylized map of
            the Hyrcanian region.
          */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full aspect-[16/9] border border-border overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          >
            {/* schematic forest silhouette */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <TreePine
                className="w-40 h-40 lg:w-56 lg:h-56 text-muted-foreground/10"
                strokeWidth={0.75}
              />
            </div>

            {treePins.map((pin) => (
              <button
                key={pin.id}
                type="button"
                onClick={() =>
                  setActivePin((cur) => (cur === pin.id ? null : pin.id))
                }
                aria-label={`نهال ${pin.tree}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                    activePin === pin.id
                      ? "scale-110"
                      : "group-hover:scale-110"
                  }`}
                  style={{
                    borderColor: ACCENT,
                    backgroundColor:
                      activePin === pin.id ? ACCENT : "transparent",
                  }}
                >
                  <TreePine
                    className="w-3.5 h-3.5"
                    strokeWidth={1.5}
                    style={{
                      color: activePin === pin.id ? "#ffffff" : ACCENT,
                    }}
                  />
                </span>
              </button>
            ))}

            {/* Pin detail card */}
            <AnimatePresence>
              {selectedPin && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-64 bg-background border border-border p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-lg">{selectedPin.name}</h3>
                    <button
                      type="button"
                      onClick={() => setActivePin(null)}
                      aria-label="بستن"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>
                  <dl className="space-y-1.5 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">شماره نهال</dt>
                      <dd dir="ltr">{selectedPin.tree}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">تاریخ کاشت</dt>
                      <dd>{selectedPin.date}</dd>
                    </div>
                  </dl>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 6 — Plant My Tree (premium donation experience) */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border p-10 lg:p-14"
            style={{ borderColor: ACCENT }}
          >
            <div className="text-center">
              <span
                className="mx-auto mb-6 flex w-12 h-12 items-center justify-center border"
                style={{ borderColor: ACCENT }}
              >
                <TreePine
                  className="w-5 h-5"
                  strokeWidth={1.5}
                  style={{ color: ACCENT }}
                />
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl mb-4">
                نهال خودت را بکار
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                به نام تو — یا هر کسی که دوستش داری — نهالی در جنگل‌های هیرکانی
                کاشته می‌شود و جای آن روی نقشه‌ی مشارکت می‌نشیند.
              </p>

              {!plantOpen && (
                <button
                  type="button"
                  onClick={() => setPlantOpen(true)}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm text-white transition-all duration-300"
                  style={{ backgroundColor: ACCENT }}
                >
                  کاشت نهال من
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </button>
              )}
            </div>

            <AnimatePresence initial={false}>
              {plantOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 text-right space-y-6">
                    {/* One block per recipient — add or remove freely. */}
                    {recipients.map((recipient, index) => (
                      <div key={index} className="border border-border p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm text-muted-foreground">
                            نهال {toFa(index + 1)}
                          </h3>
                          {recipients.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeRecipient(index)}
                              aria-label="حذف"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <X className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                          )}
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <Label
                                htmlFor={`firstName-${index}`}
                                className="text-xs"
                              >
                                نام
                              </Label>
                              <Input
                                id={`firstName-${index}`}
                                value={recipient.firstName}
                                onChange={updateRecipient(index, "firstName")}
                                className="mt-1.5 border-border/50 focus:border-foreground"
                              />
                            </div>
                            <div>
                              <Label
                                htmlFor={`lastName-${index}`}
                                className="text-xs"
                              >
                                نام خانوادگی
                              </Label>
                              <Input
                                id={`lastName-${index}`}
                                value={recipient.lastName}
                                onChange={updateRecipient(index, "lastName")}
                                className="mt-1.5 border-border/50 focus:border-foreground"
                              />
                            </div>
                          </div>
                          <div>
                            <Label
                              htmlFor={`phone-${index}`}
                              className="text-xs"
                            >
                              شماره تماس
                            </Label>
                            <Input
                              id={`phone-${index}`}
                              type="tel"
                              value={recipient.phone}
                              onChange={updateRecipient(index, "phone")}
                              className="mt-1.5 border-border/50 focus:border-foreground"
                              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor={`treeName-${index}`}
                              className="text-xs"
                            >
                              نامی که روی نهال ثبت شود
                            </Label>
                            <Input
                              id={`treeName-${index}`}
                              value={recipient.treeName}
                              onChange={updateRecipient(index, "treeName")}
                              className="mt-1.5 border-border/50 focus:border-foreground"
                              placeholder="نامی که می‌خواهی روی نهال بماند"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addRecipient}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.5} />
                      افزودن شخص دیگر
                    </button>

                    {/* Contribution info card */}
                    <div className="bg-muted p-6 leading-relaxed">
                      <p className="text-sm text-muted-foreground text-justify">
                        مبلغ مشارکت برای هر نهال، هزینه‌ی تهیه‌ی نهال، کاشت،
                        نگهداری و مراقبت از رشد نخستین شمشاد خزری — درختی در خطر
                        انقراض — را پوشش می‌دهد. هر نهالی که می‌کاری، گامی‌ست برای
                        زنده نگه‌داشتن جنگل‌های هیرکانی؛ میراثی که می‌خواهیم
                        سبزتر از امروز به نسل‌های آینده بسپاریم.
                      </p>
                    </div>

                    {/* Auto-updating total */}
                    <div className="flex items-center justify-between border-t border-border pt-5">
                      <span className="text-sm text-muted-foreground">
                        مبلغ مشارکت ({toFa(recipients.length)} نهال)
                      </span>
                      <span className="font-serif text-xl">
                        {toFa(total)} تومان
                      </span>
                    </div>

                    <Button
                      type="button"
                      onClick={handleCheckout}
                      disabled={!isValid}
                      className="w-full py-6 text-sm text-white hover:opacity-90"
                      style={{ backgroundColor: ACCENT }}
                    >
                      ادامه و پرداخت
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
