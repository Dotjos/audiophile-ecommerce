import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import ScrollLockProvider from "./ScrollLockProvider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Audiophile e-commerce website",
  description: "An ecommerce website for audiophiles",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <ScrollLockProvider>{children}</ScrollLockProvider>
      </body>
    </html>
  );
}
