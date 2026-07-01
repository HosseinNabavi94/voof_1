import { requireAdmin } from "@/lib/auth";
import { AdminShell } from "../_components/admin-shell";

/**
 * Protected admin shell.
 * Runs on the server, enforces authentication via requireAdmin() (defense in
 * depth alongside middleware), then renders the responsive admin chrome.
 * The login page is intentionally OUTSIDE this layout, so it renders freely.
 */
export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAdmin();

  return <AdminShell userName={session.user?.name}>{children}</AdminShell>;
}
