import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe base configuration.
 *
 * This file must NOT import Node-only APIs or the Credentials provider, because
 * it is consumed by `middleware.ts` which runs on the Edge runtime. The actual
 * provider (which uses Node's crypto) lives in `auth.ts`.
 */
export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Runs in middleware. Controls access to routes matched by the matcher.
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      const isOnLogin = pathname === "/admin/login";

      if (isOnLogin) {
        // Already signed in? Skip the login page.
        if (isLoggedIn) {
          return Response.redirect(new URL("/admin", nextUrl));
        }
        return true;
      }

      // Everything else under the matcher (the admin area) requires a session.
      // Returning false redirects to `pages.signIn`.
      return isLoggedIn;
    },
    // Persist id/role onto the token (JWT strategy).
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "admin";
      }
      return token;
    },
    // Expose id/role on the session object used by the app.
    session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? session.user.id;
        session.user.role = (token.role as string) ?? "admin";
      }
      return session;
    },
  },
  // Providers are added in auth.ts so this file stays edge-safe.
  providers: [],
} satisfies NextAuthConfig;
