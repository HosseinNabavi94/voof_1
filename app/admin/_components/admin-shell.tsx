"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AdminSidebar } from "./admin-sidebar";
import { AdminTopbar } from "./admin-topbar";

interface AdminShellProps {
  userName?: string | null;
  children: React.ReactNode;
}

export function AdminShell({ userName, children }: AdminShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Desktop sidebar — fixed to the right (RTL) */}
      <aside className="hidden lg:block fixed inset-y-0 right-0 w-64 z-30">
        <AdminSidebar />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 w-64 z-50 lg:hidden"
            >
              <AdminSidebar onNavigate={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main column — offset by the sidebar on desktop */}
      <div className="lg:pr-64">
        <AdminTopbar onMenu={() => setMobileOpen(true)} userName={userName} />
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
