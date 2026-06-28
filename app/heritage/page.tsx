"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const aboutSections = [
  {
    eyebrow: "روایت بیداری یک سرزمین",
    heading: "ریشه‌هایی که خاموش نمی‌شوند",
    paragraphs: [
      "ووف فقط یک برند لباس نیست؛ روایتی‌ست از عشق ما به سرزمینی که در رگ‌های ما جریان دارد. روایتی از مردمانی که نمی‌خواهند صدای ریشه‌هایشان در هیاهوی جهان امروز گم شود. ما ووف را خلق کردیم تا یادآوری کنیم فرهنگ، زبان و طبیعت یک سرزمین، تنها بخشی از گذشته نیستند؛ آن‌ها بخشی از زندگی امروز و آینده‌ی ما هستند.",
      "در روزگاری که بسیاری از زبان‌های بومی و محلی آرام‌آرام به حاشیه رانده می‌شوند، ما تصمیم گرفتیم زبان مازندرانی را نه فقط در کتاب‌ها و خاطره‌ها، بلکه در دل زندگی روزمره زنده نگه داریم. هر واژه‌ی مازنی که بر لباس‌های ووف نقش می‌بندد، حامل بخشی از هویت جمعی ماست؛ هویتی که نسل‌ها با آن خندیده‌اند، عاشق شده‌اند، کار کرده‌اند و زندگی ساخته‌اند. برای ما، زبان تنها مجموعه‌ای از کلمات نیست؛ حافظه‌ی یک ملت است. اگر واژه‌ها خاموش شوند، بخشی از روح یک سرزمین نیز خاموش خواهد شد.",
      "به همین دلیل، هر لباس ووف فراتر از یک پوشاک است. هر طرح، هر نوشته و هر جزئیات آن تلاشی برای روایت داستانی‌ست که از دل کوهستان‌ها، شالیزارها، دریا و جنگل‌های مازندران برخاسته است. ما می‌خواهیم نسل امروز و فردا، زبان مادری و فرهنگ خود را نه به‌عنوان یادگاری از گذشته، بلکه به‌عنوان بخشی زنده و پویا از زندگی امروز تجربه کنند.",
    ],
    image: "/root-tree-voof.webp",
    imageAlt: "ریشه درخت هیرکانی ووف",
  },
  {
    eyebrow: "مسئولیت ما",
    heading: "حفاظت از جانِ وطن",
    paragraphs: [
      "اما عشق به وطن تنها در حفظ زبان خلاصه نمی‌شود. وطن ما درختانش را نیز دارد؛ جنگل‌های باشکوه هیرکانی که میلیون‌ها سال است بر این سرزمین سایه افکنده‌اند و بخشی از هویت طبیعی ما را شکل داده‌اند. جنگل‌هایی که هوایشان را نفس می‌کشیم، باران می‌آورند و ریشه‌های ما را در آغوش خود حفظ کرده‌اند.",
      "ما باور داریم که هر کسب‌وکاری مسئولیتی فراتر از فروش محصول دارد. به همین دلیل بخشی از مأموریت ووف به حفاظت از طبیعت گره خورده است. به ازای هر ۱۰ لباس فروخته‌شده، یک نهال در جنگل‌های هیرکانی کاشته می‌شود؛ اقدامی کوچک اما معنادار برای بازگرداندن بخشی از آنچه از این سرزمین دریافت کرده‌ایم. وقتی لباسی از ووف انتخاب می‌کنی، تنها یک محصول نمی‌خری؛ تو در حفظ میراث طبیعی سرزمینی سهیم می‌شوی که ریشه‌های همه‌ی ما در خاک آن تنیده شده است.",
    ],
    image: "/badab-soort-voof.webp",
    imageAlt: "باداب سورت",
  },
  {
    eyebrow: "اصالت و طراحی",
    heading: "پلی میان گذشته و آینده",
    paragraphs: [
      "در کنار زبان و طبیعت، اصالت فرهنگی مازندران نیز قلب تپنده‌ی ووف است. ما به زیبایی فرهنگ بومی خود افتخار می‌کنیم؛ فرهنگی که قرن‌ها در موسیقی، پوشش، معماری، قصه‌ها و سبک زندگی مردم این دیار جریان داشته است. با این حال، باور داریم اصالت زمانی زنده می‌ماند که بتواند با امروز گفت‌وگو کند. به همین دلیل تلاش کرده‌ایم میان گذشته و آینده پلی بسازیم؛ پلی که یک سوی آن ریشه‌های عمیق فرهنگ مازندران و سوی دیگر آن طراحی مدرن و سبک زندگی امروزی قرار دارد.",
      "طراحی‌های ووف از همین نگاه متولد می‌شوند. ما عناصر فرهنگی و هویتی مازندران را با زبانی مینیمال، مدرن و قابل‌پوشیدن بازآفرینی می‌کنیم تا هر لباس بتواند هم نشانی از ریشه‌ها باشد و هم بخشی از زندگی روزمره‌ی انسان امروز. برای ما، لباس تنها پوشش نیست؛ رسانه‌ای‌ست برای روایت داستان‌ها، انتقال احساسات و زنده نگه داشتن آنچه ارزش ماندن دارد.",
    ],
    image: "/veresk-bridge-voof.webp",
    imageAlt: "پل ورسک ووف",
  },
  {
    eyebrow: "دعوت ما",
    heading: "برای بازگشت",
    paragraphs: [
      "ووف حاصل این باور است که فرهنگ باید دیده شود، شنیده شود و زندگی شود. ما می‌خواهیم مردم نه فقط درباره‌ی مازندران بخوانند، بلکه آن را بپوشند، لمس کنند و با خود همراه داشته باشند. می‌خواهیم واژه‌های مازنی دوباره بر زبان‌ها جاری شوند، جنگل‌های هیرکانی دوباره نفسی تازه بکشند و اصالت این سرزمین در قالبی نو، در کنار نسل امروز ادامه پیدا کند.",
      "راهی که پیش رو داریم را تنها نمی‌توان پیمود. ووف از روز نخست با همراهی کسانی شکل گرفت که به ریشه‌های خود افتخار می‌کنند و باور دارند آینده بدون شناخت گذشته ساخته نمی‌شود. هر خرید، هر همراهی و هر حمایت، بخشی از این حرکت جمعی برای حفظ هویت، فرهنگ و طبیعت ماست.",
      "ووف دعوتی‌ست برای بازگشت؛ بازگشت به زبان مادری، به ریشه‌های فراموش‌شده، به جنگل‌هایی که خانه‌ی ما هستند و به فرهنگی که هنوز در قلب این سرزمین می‌تپد. ما آمده‌ایم تا یادآوری کنیم که وطن فقط جایی روی نقشه یا حک شده در شناسنامه‌ی ما نیست؛ وطن در واژه‌ها، در درختان و در داستان‌هایی که نسل به نسل منتقل شده‌اند، زندگی می‌کند.",
    ],
    image: null,
    imageAlt: "",
  },
];

const craftsmen = [
  {
    name: "حسین نبوی",
    role: "بنیانگذار",
    years: "۳۳ سال",
    image: "/Hossein1_lossy.webp",
  },
  {
    name: "فاطمه فهیمی",
    role: "مدیر فروش",
    years: "۲۶ سال",
    image: "/Fatemeh2.webp",
  },
  {
    name: "فاطمه نصری",
    role: "مدیر تولید",
    years: "۳۵ سال",
    image: "/Fatemeh3.webp",
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
            src="/hero-veresk-voof.webp"
            alt="ورسک، مازندران"
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
            از سال ۱۴۰۵
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-background mb-6 leading-[1.2] text-balance"
          >
            داستان ووف
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
         در جست‌وجوی ریشه‌ها
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

گاهی سقوط یک سرزمین، پیش از آن است که خاکش را از دست بدهد. گاهی سقوط وقتی رخ می‌دهد که وطن، واژه‌هایش را از یاد می‌برد؛ قصه‌هایش را فراموش می‌کند و صدای ریشه‌هایش در هیاهوی زمان، آرام‌آرام خاموش می‌شود. ووف از دل این باور متولد شد که هیچ ملتی بدون ریشه‌هایش آینده‌ای ماندگار نخواهد ساخت. تلاش خواهیم کرد تا آنچه در غبار فراموشی پنهان مانده است دوباره جان بگیرد؛ واژه‌هایی که روزی بر زبان پدربزرگ‌ها و مادربزرگ‌ها جاری بود، فرهنگی که در تار و پود زندگی این سرزمین نفس می‌کشید و هویتی که نسل‌ها آن را با عشق حفظ کردند. ووف پلی است میان گذشته و امروز؛ دعوتی برای نسلی که می‌خواهد رو به آینده گام بردارد، اما ریشه‌هایش را از یاد نبرد. و فراموش نکند که درختی که ریشه‌هایش را به خاطر نسپارد، در برابر هیچ طوفانی دوام نخواهد آورد.


          </motion.p>
        </div>
      </section>

      {/* About Us */}
      {aboutSections.map((section, index) => (
        <section
          key={section.heading}
          className={`py-20 lg:py-32 px-6 lg:px-8 ${
            index % 2 === 0 ? "bg-muted" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 lg:mb-16"
            >
              <span className="text-xs text-muted-foreground mb-4 block">
                {section.eyebrow}
              </span>
              <h2 className="font-serif text-3xl lg:text-5xl">
                {section.heading}
              </h2>
            </motion.div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-muted-foreground leading-relaxed text-base lg:text-lg text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Image placeholder — reuse later */}
            {section.image && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl mx-auto mt-16 lg:mt-24"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* Closing statement */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl lg:text-4xl leading-relaxed text-balance"
          >
            ووف؛ تن‌پوشی که قلب وطن را دوباره به تپش می‌اندازد. برای شما، برای
            ریشه‌هایمان و برای بازگشت شادی.
          </motion.p>
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
              تیم ووف
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl"> همه شما هم‌تیمی مایید </h2>
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
              «
 همیشه باور داشته‌ام بزرگ‌ترین شکست، فراموش کردن گذشته و آن چیزی نیست که داشته‌ایم؛ فراموش کردن آینده و آن چیزی است که می‌توانیم دوباره باشیم. ووف برای من یک آغاز است؛ آغاز روزی که فرزندان این سرزمین دوباره با افتخار نام وطنشان را بر زبان بیاورند و لبخندشان و بالیدن به هویتشان را از آن بگیرند.
»
            </p>
            <cite className="not-italic">
              <span className="block text-sm text-muted-foreground">
                — حسین نبوی، بنیانگذار
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
              همراهی
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl mb-6">
              عضو خانواده‌ی ووف شوید
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              همراه ما باشید و وطن را در هر قطعه‌ای که می‌آفرینیم تجربه کنید.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm hover:gap-5 transition-all duration-300"
            >
              مشاهده محصولات
              <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
