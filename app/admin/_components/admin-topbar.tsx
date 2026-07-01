"use client";

import { Menu } from "lucide-react";

interface AdminTopbarProps {
  onMenu: () => void;
  userName?: string | null;
}

export function AdminTopbar({ onMenu, userName }: AdminTopbarProps) {
  const initial = (userName ?? "و").charAt(0);

  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          aria-label="باز کردن منو"
          className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <h2 className="text-sm text-muted-foreground">پنل مدیریت ووف</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-left">
          <p className="text-sm leading-tight">{userName ?? "مدیر"}</p>
          <p className="text-[11px] text-muted-foreground leading-tight">
            مدیر سیستم
          </p>
        </div>
        <div className="w-9 h-9 flex items-center justify-center border border-border font-serif text-sm">
          {initial}
        </div>
      </div>
    </header>
  );
}
