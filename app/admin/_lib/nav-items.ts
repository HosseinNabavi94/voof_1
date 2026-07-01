import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface AdminNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  // Future modules are shown but disabled until their route folder is built.
  disabled?: boolean;
}

/**
 * Single source of truth for admin navigation.
 * As each module ships, flip `disabled` off and add its folder under
 * app/admin/(protected)/. No layout or sidebar code changes are required.
 */
export const adminNavItems: AdminNavItem[] = [
  { label: "داشبورد", href: "/admin", icon: LayoutDashboard },
  { label: "محصولات", href: "/admin/products", icon: Package, disabled: true },
  { label: "سفارش‌ها", href: "/admin/orders", icon: ShoppingBag, disabled: true },
  { label: "مشتریان", href: "/admin/customers", icon: Users, disabled: true },
  { label: "تنظیمات", href: "/admin/settings", icon: Settings, disabled: true },
];
