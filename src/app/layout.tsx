import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbod Habibi | Software Developer",
  description: "Software developer portfolio website",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className="scroll-smooth">
    <body className={`${inter.variable} antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
