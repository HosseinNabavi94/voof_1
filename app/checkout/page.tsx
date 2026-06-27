"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const cartItems = [
  {
    id: "1",
    name: "پالتو آتلیه",
    price: 2450,
    quantity: 1,
    size: "M",
    color: "سرمه‌ای",
    image: "/luxury-wool-coat-product-image.jpg",
  },
  {
    id: "2",
    name: "بافت کشمیری",
    price: 890,
    quantity: 1,
    size: "S",
    color: "عاجی",
    image: "/cashmere-sweater-ivory.jpg",
  },
];

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment">("shipping");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 0; // Complimentary
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/shop"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
              ادامه خرید
            </Link>
            <Link href="/" className="font-serif text-xl lg:text-2xl">
              مزون
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">پرداخت امن</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Forms */}
          <div className="order-2 lg:order-1">
            {/* Steps indicator */}
            <div className="flex items-center gap-4 mb-10">
              <button
                onClick={() => setStep("shipping")}
                className={`text-sm transition-colors ${
                  step === "shipping"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                ارسال
              </button>
              <div className="h-px w-8 bg-border" />
              <button
                onClick={() => setStep("payment")}
                className={`text-sm transition-colors ${
                  step === "payment"
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                پرداخت
              </button>
            </div>

            {step === "shipping" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif text-2xl mb-8">اطلاعات ارسال</h2>

                {/* Contact */}
                <div className="mb-8">
                  <h3 className="text-sm text-muted-foreground mb-4">
                    اطلاعات تماس
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-xs">
                        ایمیل
                      </Label>
                      <Input
                        id="email"
                        type="email"
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
                        className="mt-1.5 border-border/50 focus:border-foreground"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-8">
                  <h3 className="text-sm text-muted-foreground mb-4">
                    آدرس ارسال
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-xs">
                          نام
                        </Label>
                        <Input
                          id="firstName"
                          className="mt-1.5 border-border/50 focus:border-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-xs">
                          نام خانوادگی
                        </Label>
                        <Input
                          id="lastName"
                          className="mt-1.5 border-border/50 focus:border-foreground"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address" className="text-xs">
                        نشانی
                      </Label>
                      <Input
                        id="address"
                        className="mt-1.5 border-border/50 focus:border-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="apartment" className="text-xs">
                        واحد، پلاک و غیره (اختیاری)
                      </Label>
                      <Input
                        id="apartment"
                        className="mt-1.5 border-border/50 focus:border-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-xs">
                          شهر
                        </Label>
                        <Input
                          id="city"
                          className="mt-1.5 border-border/50 focus:border-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-xs">
                          استان
                        </Label>
                        <Input
                          id="state"
                          className="mt-1.5 border-border/50 focus:border-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip" className="text-xs">
                          کد پستی
                        </Label>
                        <Input
                          id="zip"
                          className="mt-1.5 border-border/50 focus:border-foreground"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setStep("payment")}
                  className="w-full py-6 text-sm"
                >
                  ادامه به پرداخت
                </Button>
              </motion.div>
            )}

            {step === "payment" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-serif text-2xl mb-8">جزئیات پرداخت</h2>

                <div className="space-y-4 mb-8">
                  <div>
                    <Label htmlFor="cardName" className="text-xs">
                      نام روی کارت
                    </Label>
                    <Input
                      id="cardName"
                      className="mt-1.5 border-border/50 focus:border-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber" className="text-xs">
                      شماره کارت
                    </Label>
                    <Input
                      id="cardNumber"
                      className="mt-1.5 border-border/50 focus:border-foreground"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-xs">
                        تاریخ انقضا
                      </Label>
                      <Input
                        id="expiry"
                        className="mt-1.5 border-border/50 focus:border-foreground"
                        placeholder="MM / YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc" className="text-xs">
                        کد CVC2
                      </Label>
                      <Input
                        id="cvc"
                        className="mt-1.5 border-border/50 focus:border-foreground"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-border p-4 mb-8">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    با ثبت سفارش، شما با{" "}
                    <Link href="#" className="underline underline-offset-2">
                      شرایط استفاده از خدمات
                    </Link>{" "}
                    و{" "}
                    <Link href="#" className="underline underline-offset-2">
                      سیاست حریم خصوصی
                    </Link>{" "}
                    موافقت می‌کنید.
                  </p>
                </div>

                <Button className="w-full py-6 text-sm">
                  ثبت سفارش — {total.toLocaleString("fa-IR")} تومان
                </Button>

                <button
                  onClick={() => setStep("shipping")}
                  className="w-full mt-4 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  بازگشت به ارسال
                </button>
              </motion.div>
            )}
          </div>

          {/* Right - خلاصه سفارش - converted to Next.js Image with lazy loading */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-2xl mb-8">خلاصه سفارش</h2>

              <div className="space-y-6 mb-8">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-muted flex-shrink-0 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="80px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.color} / {item.size}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        تعداد: {item.quantity.toLocaleString("fa-IR")}
                      </p>
                    </div>
                    <div className="text-sm">
                      {item.price.toLocaleString("fa-IR")} تومان
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">جمع جزء</span>
                  <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ارسال</span>
                  <span className="text-green-600">رایگان</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">مالیات تخمینی</span>
                  <span>{tax.toLocaleString("fa-IR")} تومان</span>
                </div>
                <div className="flex justify-between text-base font-medium pt-3 border-t border-border">
                  <span>مجموع</span>
                  <span>{total.toLocaleString("fa-IR")} تومان</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  همه سفارش‌ها شامل ارسال رایگان و بسته‌بندی هدیه اختصاصی هستند.
                  تحویل مورد انتظار طی ۵ تا ۷ روز کاری.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
