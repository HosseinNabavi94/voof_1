"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ApplicationForm {
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  email: string;
  address: string;
  education: string;
  experience: string;
  skills: string;
  portfolio: string;
  message: string;
}

const initialForm: ApplicationForm = {
  firstName: "",
  lastName: "",
  birthDate: "",
  phone: "",
  email: "",
  address: "",
  education: "",
  experience: "",
  skills: "",
  portfolio: "",
  message: "",
};

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

// Year range suitable for birth dates (Jalali).
const jalaliYears = Array.from({ length: 105 }, (_, i) => 1404 - i);
const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

const toFa = (n: number) =>
  n.toLocaleString("fa-IR", { useGrouping: false });

// --- Jalali → Gregorian conversion (jalaali-js algorithm, dependency-free) ---
const div = (a: number, b: number) => ~~(a / b);
const mod = (a: number, b: number) => a - ~~(a / b) * b;

function jalCal(jy: number) {
  const breaks = [
    -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097,
    2192, 2262, 2324, 2394, 2456, 3178,
  ];
  const gy = jy + 621;
  let leapJ = -14;
  let jp = breaks[0];
  let jm = 0;
  let jump = 0;
  for (let i = 1; i < breaks.length; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  const n = jy - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  return { gy, march };
}

function g2d(gy: number, gm: number, gd: number) {
  let d =
    div((gy + div(gm - 8, 6) + 100100) * 1461, 4) +
    div(153 * mod(gm + 9, 12) + 2, 5) +
    gd -
    34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}

function d2g(jdn: number) {
  let j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gd = div(mod(i, 153), 5) + 1;
  const gm = mod(div(i, 153), 12) + 1;
  const gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return { gy, gm, gd };
}

function jalaliToISO(jy: number, jm: number, jd: number) {
  const r = jalCal(jy);
  const jdn =
    g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
  const g = d2g(jdn);
  return `${g.gy}-${String(g.gm).padStart(2, "0")}-${String(g.gd).padStart(
    2,
    "0",
  )}`;
}

const selectClass =
  "mt-1.5 w-full h-9 border border-border/50 bg-transparent px-3 text-sm rounded-md focus:border-foreground focus:outline-none appearance-none cursor-pointer";

export default function CareersPage() {
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [birth, setBirth] = useState({ year: "", month: "", day: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof ApplicationForm) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleBirthChange =
    (part: "year" | "month" | "day") =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const next = { ...birth, [part]: e.target.value };
      setBirth(next);
      setForm((prev) => ({
        ...prev,
        birthDate:
          next.year && next.month && next.day
            ? jalaliToISO(
                Number(next.year),
                Number(next.month),
                Number(next.day),
              )
            : "",
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired yet — surface a graceful success state.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs text-muted-foreground mb-4 block"
          >
            به خانواده‌ی ووف بپیوندید
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.2] text-balance"
          >
            فرصت‌های شغلی
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              ما در ووف باور داریم که هر اثر ماندگار، حاصل دستان و دل‌هایی‌ست که
              با عشق کنار هم می‌آفرینند. خانواده‌ی ما در حال رشد است و به دنبال
              هم‌سفرانی‌ست که اصالت، خلاقیت و عشق به ریشه‌ها را باور دارند.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              اگر دوست داری بخشی از روایتی باشی که فرهنگ، هنر و آینده را به هم
              می‌بافد، جای تو همین‌جاست. فرم زیر را پر کن تا داستان‌مان را با هم
              ادامه دهیم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-border p-12 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-6 border border-foreground flex items-center justify-center">
                <Check className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl mb-4">
                درخواست شما ثبت شد
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                از اینکه می‌خواهی بخشی از خانواده‌ی ووف باشی سپاسگزاریم. تیم ما
                درخواست تو را بررسی می‌کند و به‌زودی با تو در ارتباط خواهد بود.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
            >
              {/* Personal information */}
              <div className="mb-12">
                <h3 className="text-sm text-muted-foreground mb-6">
                  اطلاعات فردی
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-xs">
                        نام
                      </Label>
                      <Input
                        id="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange("firstName")}
                        className="mt-1.5 border-border/50 focus:border-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-xs">
                        نام خانوادگی
                      </Label>
                      <Input
                        id="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange("lastName")}
                        className="mt-1.5 border-border/50 focus:border-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs">تاریخ تولد</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                        aria-label="روز تولد"
                        value={birth.day}
                        onChange={handleBirthChange("day")}
                        className={selectClass}
                      >
                        <option value="" disabled>
                          روز
                        </option>
                        {monthDays.map((d) => (
                          <option key={d} value={d}>
                            {toFa(d)}
                          </option>
                        ))}
                      </select>
                      <select
                        aria-label="ماه تولد"
                        value={birth.month}
                        onChange={handleBirthChange("month")}
                        className={selectClass}
                      >
                        <option value="" disabled>
                          ماه
                        </option>
                        {persianMonths.map((name, i) => (
                          <option key={name} value={i + 1}>
                            {name}
                          </option>
                        ))}
                      </select>
                      <select
                        aria-label="سال تولد"
                        value={birth.year}
                        onChange={handleBirthChange("year")}
                        className={selectClass}
                      >
                        <option value="" disabled>
                          سال
                        </option>
                        {jalaliYears.map((y) => (
                          <option key={y} value={y}>
                            {toFa(y)}
                          </option>
                        ))}
                      </select>
                    </div>
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
                    <Label htmlFor="address" className="text-xs">
                      نشانی (اختیاری)
                    </Label>
                    <Input
                      id="address"
                      value={form.address}
                      onChange={handleChange("address")}
                      className="mt-1.5 border-border/50 focus:border-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Background & skills */}
              <div className="mb-12">
                <h3 className="text-sm text-muted-foreground mb-6">
                  سوابق و مهارت‌ها
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="education" className="text-xs">
                      تحصیلات و سوابق علمی
                    </Label>
                    <Input
                      id="education"
                      value={form.education}
                      onChange={handleChange("education")}
                      className="mt-1.5 border-border/50 focus:border-foreground"
                      placeholder="مقطع، رشته و دانشگاه"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-xs">
                      سوابق شغلی
                    </Label>
                    <Textarea
                      id="experience"
                      rows={4}
                      value={form.experience}
                      onChange={handleChange("experience")}
                      className="mt-1.5 border-border/50 focus:border-foreground resize-none"
                      placeholder="عنوان شغلی، نام مجموعه و مدت همکاری"
                    />
                  </div>
                  <div>
                    <Label htmlFor="skills" className="text-xs">
                      مهارت‌ها
                    </Label>
                    <Textarea
                      id="skills"
                      rows={3}
                      value={form.skills}
                      onChange={handleChange("skills")}
                      className="mt-1.5 border-border/50 focus:border-foreground resize-none"
                      placeholder="مهارت‌های کلیدی خود را بنویس"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio" className="text-xs">
                      نمونه‌کار / لینک‌ها (اختیاری)
                    </Label>
                    <Input
                      id="portfolio"
                      value={form.portfolio}
                      onChange={handleChange("portfolio")}
                      className="mt-1.5 border-border/50 focus:border-foreground"
                      placeholder="لینک نمونه‌کار، رزومه یا شبکه‌های حرفه‌ای"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-xs">
                      توضیحات تکمیلی
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange("message")}
                      className="mt-1.5 border-border/50 focus:border-foreground resize-none"
                      placeholder="هر آنچه دوست داری درباره‌ی خودت با ما در میان بگذاری"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-sm">
                ارسال درخواست
              </Button>
            </motion.form>
          )}
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
