import { redirect } from "next/navigation";
import { auth } from "@/auth";

export { auth, signIn, signOut } from "@/auth";

/**
 * Server-side guard for admin pages and layouts.
 *
 * The admin application calls THIS — never Auth.js directly — so the underlying
 * authentication mechanism can evolve (add a database, roles, etc.) without
 * touching any admin page.
 */
export async function requireAdmin() {
  const session = await auth();
  if (!session?.user) {
    redirect("/admin/login");
  }
  return session;
}
