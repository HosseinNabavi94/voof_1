"use client";

import { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authenticate } from "./actions";

const ACCENT = "#4e0000";

export default function AdminLoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="text-xs mb-3 block" style={{ color: ACCENT }}>
            پنل مدیریت
          </span>
          <h1 className="font-serif text-3xl">ووف</h1>
        </div>

        <form
          action={formAction}
          className="bg-background border border-border p-8 space-y-5"
        >
          <div>
            <Label htmlFor="email" className="text-xs">
              ایمیل
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 border-border/50 focus:border-foreground"
              placeholder="admin@voof.ir"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-xs">
              رمز عبور
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1.5 border-border/50 focus:border-foreground"
            />
          </div>

          {errorMessage && (
            <p className="text-sm" style={{ color: ACCENT }}>
              {errorMessage}
            </p>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full py-6 text-sm text-white hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            {isPending ? "در حال ورود..." : "ورود به پنل"}
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          دسترسی محدود به مدیران ووف
        </p>
      </div>
    </main>
  );
}
