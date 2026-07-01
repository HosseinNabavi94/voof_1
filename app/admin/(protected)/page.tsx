import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { requireAdmin } from "@/lib/auth";
import { StatCard } from "../_components/stat-card";

export default async function AdminDashboardPage() {
  const session = await requireAdmin();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl mb-1">
          خوش آمدی، {session.user?.name ?? "مدیر"}
        </h1>
        <p className="text-sm text-muted-foreground">
          نمای کلی فروشگاه ووف. ماژول‌های بیشتر به‌زودی افزوده می‌شوند.
        </p>
      </div>

      {/* Placeholder metrics — wired to real data in later phases. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="محصولات" value="—" hint="به‌زودی" icon={Package} />
        <StatCard label="سفارش‌ها" value="—" hint="به‌زودی" icon={ShoppingBag} />
        <StatCard label="مشتریان" value="—" hint="به‌زودی" icon={Users} />
        <StatCard label="فروش" value="—" hint="به‌زودی" icon={TrendingUp} />
      </div>

      <div className="border border-dashed border-border p-8 text-center bg-background">
        <p className="text-sm text-muted-foreground leading-relaxed">
          این داشبورد، پایه‌ی پنل مدیریت ووف است. در مراحل بعد، مدیریت محصولات،
          سفارش‌ها، مشتریان و تنظیمات به‌تدریج به آن افزوده می‌شود.
        </p>
      </div>
    </div>
  );
}
