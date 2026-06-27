"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, MapPin, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const accountLinks = [
  { href: "/account/profile", label: "پروفایل", icon: User },
  { href: "/account/orders", label: "سفارش‌های من", icon: Package },
  { href: "/account/addresses", label: "آدرس‌ها", icon: MapPin },
  { href: "/account/settings", label: "تنظیمات", icon: Settings },
];

export function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <nav className="space-y-1">
        {accountLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors relative ${
                isActive
                  ? "text-foreground bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="account-sidebar-indicator"
                  className="absolute right-0 top-0 bottom-0 w-0.5 bg-foreground"
                  transition={{ duration: 0.2 }}
                />
              )}
              <link.icon className="h-4 w-4 stroke-[1.5]" />
              {link.label}
            </Link>
          );
        })}
        <button className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors w-full">
          <LogOut className="h-4 w-4 stroke-[1.5]" />
          خروج
        </button>
      </nav>
    </aside>
  );
}
