"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";

/**
 * Login server action (used with useActionState on the login page).
 * On success, Auth.js throws a redirect to `/admin` which we re-throw so Next
 * can perform the navigation. On bad credentials we return a message.
 */
export async function authenticate(
  _prevState: string | undefined,
  formData: FormData,
): Promise<string | undefined> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return "ایمیل یا رمز عبور نادرست است.";
    }
    // Re-throw redirects (and anything unexpected) for Next to handle.
    throw error;
  }
  return undefined;
}
