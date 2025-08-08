import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravi Khokle - Full Stack Developer & UI/UX Designer",
  description: "Professional portfolio of Ravi Khokle - Full Stack Developer specializing in modern web applications, mobile-first design, and user experience.",
  keywords: "Ravi Khokle, Full Stack Developer, UI/UX Designer, React, Next.js, Portfolio",
  authors: [{ name: "Ravi Khokle" }],
  openGraph: {
    title: "Ravi Khokle - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
