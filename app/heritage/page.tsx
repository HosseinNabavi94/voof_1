"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const timeline = [
  {
    year: "۱۸۴۷",
    title: "آغاز",
    description:
      "جوزپه مزون نخستین آتلیه ما را در فلورانس بنا نهاد و برای اشراف ایتالیا کالاهای چرمی سفارشی می‌ساخت. نگاه او ساده بود: آفریدن قطعاتی که از زمان فراتر روند.",
  },
  {
    year: "۱۸۹۲",
    title: "انتصاب سلطنتی",
    description:
      "مزون به‌پاس صنعتگری استثنایی، نخستین نشان سلطنتی خود را دریافت کرد و سنتی از خدمت به مشتریان نکته‌سنج در سراسر اروپا را بنا گذاشت.",
  },
  {
    year: "۱۹۳۵",
    title: "کوک نشانه",
    description:
      "مارکو مزون، استادکار نسل سوم، تکنیک دست‌دوزی متمایز ما را به کمال رساند که امروز در سراسر جهان به‌عنوان نشانه اصالت قطعات مزون شناخته می‌شود.",
  },
  {
    year: "۱۹۷۸",
    title: "گسترش جهانی",
    description:
      "مزون در حالی که آتلیه فلورانس را به‌عنوان قلب تولید حفظ کرد، بوتیک‌هایی در پاریس، میلان و نیویورک گشود و برتری ایتالیایی را با جهان به اشتراک گذاشت.",
  },
  {
    year: "۱۴۰۳",
    title: "نگاه امروزی",
    description:
      "امروز نسل پنجم میراث ما را ادامه می‌دهد و قرن‌ها سنت را با طراحی امروزی درمی‌آمیزد تا قطعاتی برای دوست‌داران آگاه امروز بیافریند.",
  },
];

const values = [
  {
    title: "برتری هنرِ دست",
    description:
      "هر قطعه توسط استادکارانی با دهه‌ها تجربه ساخته می‌شود تا کیفیتی بی‌نظیر و توجه به جزئیات تضمین شود.",
    image: "/artisan-hands-crafting-leather-luxury-goods.jpg",
  },
  {
    title: "لوکسِ پایدار",
    description:
      "ما تنها از مرغوب‌ترین مواد از تأمین‌کنندگان اخلاق‌مدار بهره می‌گیریم، با این باور که لوکس راستین باید نسبت به مردم و سیاره مسئول باشد.",
    image: "/premium-leather-material-sustainable-luxury.jpg",
  },
  {
    title: "طراحی بی‌زمان",
    description:
      "طراحی‌های ما به‌جای مدهای زودگذر، ظرافت ماندگار را برمی‌گزینند و قطعاتی می‌آفرینند که برای نسل‌ها گرامی داشته شوند.",
    image: "/minimalist-luxury-handbag-timeless-design.jpg",
  },
];

const craftsmen = [
  {
    name: "لورنتسو بندتی",
    role: "استاد چرم‌کار",
    years: "۴۲ سال",
    image: "/elderly-italian-craftsman-portrait-luxury.jpg",
  },
  {
    name: "سوفیا مارکتی",
    role: "طراح ارشد",
    years: "۱۸ سال",
    image: "/elegant-italian-woman-designer-portrait.jpg",
  },
  {
    name: "آلساندرو روسی",
    role: "مدیر کیفیت",
    years: "۲۸ سال",
    image: "/distinguished-italian-man-portrait-luxury.jpg",
  },
];

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/florence-italy-aerial-view-luxury-historic.jpg"
            alt="فلورانس، ایتالیا"
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
            از سال ۱۸۴۷
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-background mb-6 leading-[1.2] text-balance"
          >
            میراث ما
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            پنج نسل صنعتگری ایتالیایی، وقف‌شده به جست‌وجوی ظرافت بی‌زمان.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            در قلب فلورانس، جایی که رنسانس زیبایی و صنعتگری را بازتعریف کرد،
            داستان ما آغاز شد. آنچه به‌عنوان کارگاهی کوچک شروع شد، به نمادی از
            برتری ایتالیایی بدل شده است، اما اصول بنیادین ما بی‌تغییر مانده‌اند:
            مواد استثنایی، تکنیک استادانه و تعهدی تزلزل‌ناپذیر به کمال.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-xs text-muted-foreground mb-4 block">
              سفر ما
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl">میراثی از برتری</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mb-12 lg:mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}
                >
                  <span className="font-serif text-3xl lg:text-4xl text-muted-foreground/50 block mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Dot - hidden on mobile */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-4 h-4 bg-foreground" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-xs text-muted-foreground mb-4 block">
              فلسفه ما
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl">اصول راهنما</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[5/6] overflow-hidden mb-6 relative">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmen Section */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-xs text-background/60 mb-4 block">
              استادکاران
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl">استادانِ هنر</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {craftsmen.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-700 relative">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl mb-1">
                  {person.name}
                </h3>
                <p className="text-background/60 text-sm mb-1">{person.role}</p>
                <p className="text-xs text-background/40">{person.years}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl lg:text-4xl leading-relaxed mb-8 text-balance">
              «لوکس راستین درباره خودنمایی نیست. درباره اطمینان آرامی است که از
              دانستن این برمی‌خیزد که هر جزئیات سنجیده شده و هر کوک با نیت دوخته
              شده است.»
            </p>
            <cite className="not-italic">
              <span className="block text-sm text-muted-foreground">
                — ایزابلا مزون، مدیر خلاقیت
              </span>
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-muted-foreground mb-4 block">
              کاوش
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mb-6">
              مجموعه را کشف کنید
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              اوج میراث ما را در هر قطعه‌ای که می‌آفرینیم تجربه کنید.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm hover:gap-5 transition-all duration-300"
            >
              مشاهده مجموعه
              <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
