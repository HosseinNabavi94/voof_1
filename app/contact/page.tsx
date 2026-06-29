"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Check,
  Instagram,
  Twitter,
  Send,
  MessageCircle,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const channels = [
  {
    icon: Instagram,
    label: "اینستاگرام",
    value: "@voof",
    href: "https://instagram.com",
    external: true,
  },
  {
    icon: Twitter,
    label: "توییتر / ایکس",
    value: "@voof",
    href: "https://twitter.com",
    external: true,
  },
  {
    icon: Send,
    label: "تلگرام",
    value: "@voof",
    href: "https://t.me/voof",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "واتساپ",
    value: "+۹۸ ۹۱۲ ۰۰۰ ۰۰۰۰",
    href: "https://wa.me/0000000000",
    external: true,
  },
  {
    icon: Youtube,
    label: "یوتیوب",
    value: "ووف",
    href: "https://youtube.com",
    external: true,
  },
  {
    icon: Phone,
    label: "تلفن",
    value: "۰۲۱ ۱۲۳۴ ۵۶۷۸",
    href: "tel:+982112345678",
    external: false,
  },
  {
    icon: MapPin,
    label: "نشانی",
    value: "مازندران، ایران",
    href: null,
    external: false,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired yet — surface a graceful success state.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header / Intro */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs mb-4 block text-[#4e0000]"
          >
            با ما در ارتباط باشید
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.2] text-balance"
          >
            تماس با ما
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            هر واژه، هر پیام و هر همراهی برای ما ارزشمند است. اگر سخنی، پرسشی یا
            تنها سلامی داری، خوشحال می‌شویم صدایت را بشنویم. ووف خانه‌ای‌ست که
            درش همیشه به روی تو باز است.
          </motion.p>
        </div>
      </section>

      {/* Form + Channels */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border border-border p-12 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-6 border border-[#4e0000] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#4e0000]" strokeWidth={1.5} />
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl mb-4">
                  پیام شما ارسال شد
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  از اینکه با ووف همراه شدی سپاسگزاریم. پیام تو را دریافت کردیم و
                  به‌زودی پاسخت را خواهیم داد.
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
                <h3 className="text-sm text-muted-foreground mb-6">
                  پیام خود را بنویسید
                </h3>
                <div className="space-y-4">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className="mt-1.5 border-border/50 focus:border-foreground"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-xs">
                      موضوع
                    </Label>
                    <Input
                      id="subject"
                      required
                      value={form.subject}
                      onChange={handleChange("subject")}
                      className="mt-1.5 border-border/50 focus:border-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-xs">
                      پیام
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      className="mt-1.5 border-border/50 focus:border-foreground resize-none"
                      placeholder="هر آنچه دوست داری با ما در میان بگذاری"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-sm mt-8 bg-[#4e0000] text-white hover:bg-[#4e0000]/90"
                >
                  ارسال پیام
                </Button>
              </motion.form>
            )}
          </div>

          {/* Channels */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-sm text-muted-foreground mb-6">
              راه‌های ارتباطی
            </h3>
            <div className="border-t border-border/60">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href ?? undefined}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className={`group flex items-center gap-4 py-4 border-b border-border/60 transition-colors duration-300 ${
                      channel.href ? "hover:text-[#4e0000]" : "cursor-default"
                    }`}
                  >
                    <span className="w-10 h-10 flex items-center justify-center border border-border/60 transition-colors duration-300 group-hover:border-[#4e0000]">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm">{channel.label}</span>
                      <span
                        dir="ltr"
                        className="block text-xs text-muted-foreground text-right"
                      >
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
