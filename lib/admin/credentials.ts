import { timingSafeEqual } from "node:crypto";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin";
}

// Constant-time string comparison to avoid timing attacks.
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/**
 * The single seam between authentication and the user store.
 *
 * PHASE 1: credentials come from environment variables (one bootstrap admin).
 *
 * FUTURE (database phase): replace the body below with a real lookup —
 *   1. find the user by email in Postgres,
 *   2. verify the submitted password against the stored password HASH
 *      (scrypt / argon2 / bcrypt),
 *   3. return the user record (or null).
 * Nothing else in the app needs to change: `auth.ts` calls only this function.
 */
export async function verifyAdminCredentials(
  email: string,
  password: string,
): Promise<AdminUser | null> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  // Fail closed if the environment is not configured.
  if (!adminEmail || !adminPassword) return null;

  const emailMatch = safeEqual(
    email.trim().toLowerCase(),
    adminEmail.trim().toLowerCase(),
  );
  const passwordMatch = safeEqual(password, adminPassword);

  if (emailMatch && passwordMatch) {
    return {
      id: "admin",
      name: "مدیر ووف",
      email: adminEmail,
      role: "admin",
    };
  }

  return null;
}
