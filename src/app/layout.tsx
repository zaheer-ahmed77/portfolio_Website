import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import User from "@/data/user.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${User.name} | ${User.title}`,
  description: "Passionate full-stack developer skilled in JavaScript, Node.js, React, and MongoDB.",
  openGraph: {
    type: "website",
    url: "https://zaheer.tech",
    title: "Zaheer Ahmed - Portfolio",
    images: ["https://zaheer.tech/img/me.webp"],
  },
  icons: {
    shortcut: "/svg/code.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="bg-white text-slate-900 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
