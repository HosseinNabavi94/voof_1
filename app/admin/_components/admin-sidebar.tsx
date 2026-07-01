"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminNavItems } from "../_lib/nav-items";
import { signOutAction } from "../_lib/actions";

interface AdminSidebarProps {
  onNavigate?: () => void;
}

export function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-foreground text-background">
      {/* Brand */}
      <div className="h-16 flex items-center gap-2 px-6 border-b border-background/10">
        <span className="font-serif text-xl">ووف</span>
        <span className="text-[10px] text-background/50 mt-1">پنل مدیریت</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {adminNavItems.map((item) => {
          const Icon = item.icon;

          if (item.disabled) {
            return (
              <span
                key={item.href}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-background/30 cursor-not-allowed select-none"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {item.label}
                <span className="mr-auto text-[10px] border border-background/20 px-1.5 py-0.5">
                  به‌زودی
                </span>
              </span>
            );
          }

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-background text-foreground"
                  : "text-background/70 hover:text-background hover:bg-background/5",
              )}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div className="p-3 border-t border-background/10">
        <form action={signOutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 px-3 py-2.5 text-sm text-background/70 hover:text-background transition-colors"
          >
            <LogOut className="w-4 h-4" strokeWidth={1.5} />
            خروج
          </button>
        </form>
      </div>
    </div>
  );
}
