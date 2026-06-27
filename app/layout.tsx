import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

// Vazirmatn — self-hosted variable font (Persian + Latin numerals).
// Self-hosting avoids any dependency on Google Fonts, which is important
// for reliable loading inside Iran. Used for both body and display text.
const vazirmatn = localFont({
  src: "./fonts/Vazirmatn[wght].woff2",
  variable: "--font-vazirmatn",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مزون | ضروریات لوکس",
  description:
    "ظرافت بی‌زمان، تجدد امروزی. مجموعه‌ای منتخب از قطعات لوکس و دست‌دوز را کشف کنید.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable}`}>
      <body className={`font-sans antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
