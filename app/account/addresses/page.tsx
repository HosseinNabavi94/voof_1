"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, MapPin, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { PremiumFooter } from "@/components/premium-footer";
import { AccountSidebar } from "@/components/account-sidebar";

const addresses = [
  {
    id: "1",
    label: "خانه",
    default: true,
    name: "الکساندرا سینکلر",
    street: "خیابان ولیعصر، کوچه نیلوفر، پلاک ۲۴، واحد ۵",
    city: "تهران",
    state: "تهران",
    zip: "۱۹۶۸۷",
    country: "ایران",
    phone: "۰۹۱۲ ۱۲۳ ۴۵۶۷",
  },
  {
    id: "2",
    label: "محل کار",
    default: false,
    name: "الکساندرا سینکلر",
    street: "خیابان میرداماد، برج آسمان، طبقه ۱۲",
    city: "تهران",
    state: "تهران",
    zip: "۱۹۱۸۴",
    country: "ایران",
    phone: "۰۹۱۲ ۹۸۷ ۶۵۴۳",
  },
];

export default function AddressesPage() {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

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
              آدرس‌های ارسال خود را مدیریت کنید
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
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl">آدرس‌های ذخیره‌شده</h2>
                <Button
                  variant="outline"
                  className="gap-2 text-sm bg-transparent"
                >
                  <Plus className="h-4 w-4" />
                  افزودن جدید
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {addresses.map((address, index) => (
                  <motion.div
                    key={address.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative border p-6 transition-colors cursor-pointer ${
                      selectedAddress === address.id || address.default
                        ? "border-foreground"
                        : "border-border hover:border-foreground/50"
                    }`}
                    onClick={() => setSelectedAddress(address.id)}
                  >
                    {address.default && (
                      <span className="absolute top-4 left-4 text-[10px] text-muted-foreground">
                        پیش‌فرض
                      </span>
                    )}

                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {address.label}
                      </span>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-1 mr-7">
                      <p>{address.name}</p>
                      <p>{address.street}</p>
                      <p>
                        {address.city}, {address.state} {address.zip}
                      </p>
                      <p>{address.country}</p>
                      <p className="pt-2">{address.phone}</p>
                    </div>

                    <div className="flex gap-4 mt-6 mr-7">
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <Edit2 className="h-3 w-3" />
                        ویرایش
                      </button>
                      {!address.default && (
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-red-600 transition-colors">
                          <Trash2 className="h-3 w-3" />
                          حذف
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}
