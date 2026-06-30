"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Check, ArrowLeft } from "lucide-react";

const TRACKING_URL = "https://tracking.post.ir/";
const RETURN_WINDOW_DAYS = 14;

const daysAgo = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
};

/**
 * MOCK DATA — temporary.
 * TODO: Replace this with the authenticated user's real order history.
 * Once auth + backend exist, fetch the signed-in user's orders and filter to
 * those whose purchase date falls within the RETURN_WINDOW_DAYS window
 * (ideally on the server). The client-side filter below is only a placeholder
 * so the dropdown demonstrates the 14-day eligibility rule with mock orders.
 */
const mockOrders = [
  { id: "VF-1042", title: "پالتو مجلسی ابریشمی", date: daysAgo(2) },
  { id: "VF-1031", title: "پیراهن رپ کشمیری", date: daysAgo(9) },
  { id: "VF-1018", title: "یقه‌اسکی مرینوس", date: daysAgo(13) },
  { id: "VF-1005", title: "کت تک پشمی دوخت‌خورده", date: daysAgo(22) },
];

const isWithinReturnWindow = (iso: string) => {
  const diffDays = (Date.now() - new Date(iso).getTime()) / 86_400_000;
  return diffDays <= RETURN_WINDOW_DAYS;
};

// Only orders still inside the 14-day return window are selectable.
const eligibleOrders = mockOrders.filter((o) => isWithinReturnWindow(o.date));

const selectClass =
  "mt-1.5 w-full h-9 border border-border/50 bg-transparent px-3 text-sm rounded-md focus:border-foreground focus:outline-none appearance-none cursor-pointer";

export default function ShippingPage() {
  const [returnOpen, setReturnOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");
  const [resolution, setResolution] = useState("exchange");
  const [submitted, setSubmitted] = useState(false);

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
            transition={{ duration: 0.6 }}
            className="text-xs mb-4 block text-[#4e0000]"
          >
            خدمات مشتریان
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.2] text-balance"
          >
            ارسال و مرجوعی
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
          >
            هر سفارش ووف با دقت بسته‌بندی و با احترام به دستان تو می‌رسد. اگر
            قطعه‌ای آن‌طور که انتظار داشتی نبود، تا ۱۴ روز فرصت داری آن را تعویض
            کنی یا وجهت را بازگردانی. آسوده باش؛ ما کنارت هستیم.
          </motion.p>
        </div>
      </section>

      {/* Track shipment */}
      <section className="pb-12 lg:pb-16 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto border border-border p-8 lg:p-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl mb-3">
              پیگیری مرسوله
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
              کد رهگیری سفارش خود را در سامانه‌ی پست دنبال کن و از مسیر مرسوله‌ات
              باخبر شو.
            </p>
            <a
              href={TRACKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#4e0000] text-white px-8 py-4 text-sm hover:bg-[#4e0000]/90 transition-all duration-300"
            >
              پیگیری ارسال سفارش
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Return request */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border"
          >
            <button
              type="button"
              onClick={() => setReturnOpen((v) => !v)}
              className="flex items-center justify-between w-full text-right px-6 py-5 gap-4"
              aria-expanded={returnOpen}
            >
              <span className="text-sm lg:text-base text-[#4e0000]">
                درخواست مرجوعی
              </span>
              {returnOpen ? (
                <Minus className="w-4 h-4 flex-shrink-0" strokeWidth={1} />
              ) : (
                <Plus className="w-4 h-4 flex-shrink-0" strokeWidth={1} />
              )}
            </button>

            <AnimatePresence>
              {returnOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    {submitted ? (
                      <div className="text-center py-8">
                        <div className="w-12 h-12 mx-auto mb-6 border border-[#4e0000] flex items-center justify-center">
                          <Check
                            className="w-5 h-5 text-[#4e0000]"
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="font-serif text-xl lg:text-2xl mb-3">
                          درخواست مرجوعی ثبت شد
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          درخواست تو را دریافت کردیم. تیم پشتیبانی ووف به‌زودی
                          برای هماهنگی با تو در ارتباط خواهد بود.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <Label htmlFor="orderId" className="text-xs">
                            انتخاب سفارش
                          </Label>
                          {eligibleOrders.length > 0 ? (
                            <select
                              id="orderId"
                              required
                              value={orderId}
                              onChange={(e) => setOrderId(e.target.value)}
                              className={selectClass}
                            >
                              <option value="" disabled>
                                یک سفارش را انتخاب کن
                              </option>
                              {eligibleOrders.map((order) => (
                                <option key={order.id} value={order.id}>
                                  {`${order.title} — ${new Date(
                                    order.date,
                                  ).toLocaleDateString("fa-IR")}`}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <p className="mt-1.5 text-sm text-muted-foreground">
                              در حال حاضر سفارشی در بازه‌ی ۱۴ روزه‌ی مرجوعی
                              نداری.
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="reason" className="text-xs">
                            علت مرجوعی
                          </Label>
                          <Textarea
                            id="reason"
                            rows={4}
                            required
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="mt-1.5 border-border/50 focus:border-foreground resize-none"
                            placeholder="لطفاً علت درخواست مرجوعی را برایمان بنویس"
                          />
                        </div>

                        <div>
                          <span className="text-xs text-muted-foreground block mb-3">
                            نوع درخواست
                          </span>
                          <div className="flex flex-wrap gap-6">
                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                              <input
                                type="radio"
                                name="resolution"
                                value="exchange"
                                checked={resolution === "exchange"}
                                onChange={(e) => setResolution(e.target.value)}
                                className="accent-[#4e0000]"
                              />
                              تعویض محصول
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-sm">
                              <input
                                type="radio"
                                name="resolution"
                                value="refund"
                                checked={resolution === "refund"}
                                onChange={(e) => setResolution(e.target.value)}
                                className="accent-[#4e0000]"
                              />
                              بازگشت وجه
                            </label>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={eligibleOrders.length === 0}
                          className="w-full py-6 text-sm bg-[#4e0000] text-white hover:bg-[#4e0000]/90"
                        >
                          ثبت درخواست مرجوعی
                        </Button>
                      </form>
                    )}
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
