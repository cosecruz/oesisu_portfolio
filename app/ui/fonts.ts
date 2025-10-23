import { Noto_Sans, Lusitana, Inter, Geist, Geist_Mono } from "next/font/google";

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

export const lusitana = Lusitana({weight: ["400", "700"],subsets: ["latin"]})
export const inter = Inter({ subsets: ["latin"] })
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
