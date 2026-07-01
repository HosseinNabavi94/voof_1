import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
}

// Shared admin building block. Server-safe (no client hooks).
export function StatCard({ label, value, hint, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-background border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground">{label}</span>
        <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <p className="font-serif text-3xl">{value}</p>
      {hint && (
        <p className="text-[11px] text-muted-foreground mt-1">{hint}</p>
      )}
    </div>
  );
}
