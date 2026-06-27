"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { AccountSidebar } from "@/components/account-sidebar";

export default function SettingsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="font-serif text-3xl lg:text-4xl mb-2">
              حساب کاربری من
            </h1>
            <p className="text-muted-foreground">
              ترجیحات و تنظیمات خود را مدیریت کنید
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <AccountSidebar />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <div className="max-w-2xl">
                {/* ترجیحات ایمیل */}
                <section className="mb-12">
                  <h2 className="font-serif text-2xl mb-6">ترجیحات ایمیل</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">
                          تازه‌رسیده‌ها
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          اولین نفری باشید که از مجموعه‌های جدید باخبر می‌شود
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">
                          پیشنهادهای ویژه
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          دریافت تخفیف‌های ویژه و فروش‌های خصوصی
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">
                          به‌روزرسانی سفارش‌ها
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          تأیید ارسال و اعلان‌های تحویل
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">
                          محتوای تحریریه
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          داستان‌ها، نکات استایل و پشت‌صحنه
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </section>

                {/* Privacy */}
                <section className="mb-12">
                  <h2 className="font-serif text-2xl mb-6">حریم خصوصی</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">
                          پیشنهادهای شخصی‌سازی‌شده
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          به ما اجازه دهید بر اساس ترجیحات شما اقلامی پیشنهاد
                          کنیم
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">
                          کوکی‌های تحلیلی
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          به ما در بهبود تجربه شما کمک می‌کند
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </section>

                {/* Danger Zone */}
                <section className="pt-8 border-t border-border">
                  <h2 className="font-serif text-2xl mb-6">حساب کاربری</h2>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                      <div>
                        <Label className="text-sm font-medium">
                          دانلود اطلاعات شما
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          درخواست نسخه‌ای از تمام اطلاعات شخصی شما
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="text-sm bg-transparent"
                      >
                        درخواست اطلاعات
                      </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                      <div>
                        <Label className="text-sm font-medium text-red-600">
                          حذف حساب کاربری
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          حذف دائمی حساب کاربری و تمام اطلاعات شما
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="text-sm text-red-600 border-red-600/30 hover:bg-red-600/10 hover:text-red-600 bg-transparent"
                      >
                        حذف حساب کاربری
                      </Button>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}
