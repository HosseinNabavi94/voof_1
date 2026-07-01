import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Edge-safe: uses only the base config (no providers, no Node APIs).
export default NextAuth(authConfig).auth;

export const config = {
  // Guard the admin area only. Auth endpoints and static assets are untouched.
  matcher: ["/admin/:path*"],
};
