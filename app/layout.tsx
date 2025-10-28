import type { Metadata } from "next";
import { noto_sans } from "@/app/ui/fonts";
import "./globals.css";
import LayoutClient from "./LayoutClient"; // 👈 our client wrapper

export const metadata: Metadata = {
  title: "Oesisu Portfolio",
  description: "Professional Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${noto_sans.className} antialiased`}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
