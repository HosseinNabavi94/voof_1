import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "@/auth.config";
import { verifyAdminCredentials } from "@/lib/admin/credentials";

/**
 * Full Auth.js instance (Node runtime).
 * The Credentials provider delegates to `verifyAdminCredentials`, which is the
 * only place that knows *how* users are stored — swap it for a DB lookup later.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "ایمیل", type: "email" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }
        const user = await verifyAdminCredentials(email, password);
        return user ?? null;
      },
    }),
  ],
});
