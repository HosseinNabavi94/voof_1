"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, X, TreePine, ArrowLeft } from "lucide-react";

const ACCENT = "#4e0000";

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
  const [form, setForm] = useState({ fullName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: "fullName" | "email" | "phone") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend here — persist the request, plant a tree in the
    // user's name, add it to the interactive map, and issue a unique discount
    // code. For now we only surface a client-side success state.
    setSubmitted(true);
  };

  const closePlant = () => {
    setPlantOpen(false);
  };

  const selectedPin = treePins.find((p) => p.id === activePin) || null;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 1 — Hero */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs mb-4 block"
            style={{ color: ACCENT }}
          >
            مراقبت، فراتر از یک لباس
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.2] text-balance"
          >
            دستورالعمل‌های نگهداری
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            لوکس راستین تنها داشتنِ زیبایی نیست؛ مراقبت از آن است. ما باور داریم
            هر قطعه‌ی ووف، هم حاصل دستان صنعتگران است و هم بخشی از طبیعتی که به ما
            بخشیده شده. نگه‌داشتن این هر دو — هنر و زمین — مسئولیت مشترک ماست.
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
                src="/italian-atelier-workshop-artisan-crafting-luxury-l.jpg"
                alt="جنگل‌های هیرکانی"
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
                src="/premium-leather-material-sustainable-luxury.jpg"
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

      {/* 6 — Plant My Tree */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border p-10 lg:p-14 text-center"
            style={{ borderColor: ACCENT }}
          >
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
              به نام تو نهالی در جنگل‌های هیرکانی کاشته می‌شود و جای آن روی
              نقشه‌ی مشارکت می‌نشیند. بیا بخشی از این جنگل زنده باشی.
            </p>

            {!plantOpen && !submitted && (
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

            <AnimatePresence initial={false}>
              {plantOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  {submitted ? (
                    <div className="pt-2 text-center">
                      <div
                        className="w-12 h-12 mx-auto mb-6 border flex items-center justify-center"
                        style={{ borderColor: ACCENT }}
                      >
                        <Check
                          className="w-5 h-5"
                          strokeWidth={1.5}
                          style={{ color: ACCENT }}
                        />
                      </div>
                      <h3 className="font-serif text-xl lg:text-2xl mb-3">
                        نهال تو ثبت شد
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        به‌زودی نهالی به نام تو کاشته می‌شود و روی نقشه‌ی مشارکت
                        نمایان خواهد شد. کد تخفیف اختصاصی به‌عنوان سپاس، پس از
                        ثبت نهایی برایت ارسال می‌شود.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="text-right space-y-4 pt-2"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm text-muted-foreground">
                          اطلاعات تو
                        </h3>
                        <button
                          type="button"
                          onClick={closePlant}
                          aria-label="بستن"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div>
                        <Label htmlFor="fullName" className="text-xs">
                          نام و نام خانوادگی
                        </Label>
                        <Input
                          id="fullName"
                          required
                          value={form.fullName}
                          onChange={handleChange("fullName")}
                          className="mt-1.5 border-border/50 focus:border-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs">
                          ایمیل
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange("email")}
                          className="mt-1.5 border-border/50 focus:border-foreground"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-xs">
                          شماره تماس
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange("phone")}
                          className="mt-1.5 border-border/50 focus:border-foreground"
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        />
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                        با ثبت این فرم، نهالی به نام تو در جنگل‌های هیرکانی کاشته
                        می‌شود، جای آن روی نقشه‌ی مشارکت نمایان خواهد شد و یک کد
                        تخفیف اختصاصی به‌عنوان سپاس برایت ارسال می‌گردد.
                      </p>

                      <Button
                        type="submit"
                        className="w-full py-6 text-sm text-white hover:opacity-90"
                        style={{ backgroundColor: ACCENT }}
                      >
                        ثبت درخواست کاشت نهال
                      </Button>
                    </form>
                  )}
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
