import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ravikhokle.dev"),
  title: {
    default: "Ravi Khokle - Full Stack Developer (MERN)",
    template: "%s | Ravi Khokle",
  },
  description:
    "Full Stack Developer (MERN) building scalable, performant web applications with React, Node.js, and MongoDB. Actively seeking full-time and internship opportunities.",
  keywords:
    "Ravi Khokle, Full Stack Developer, MERN, React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, Internship, Entry-level",
  authors: [{ name: "Ravi Khokle", url: "https://ravikhokle.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ravi Khokle - Full Stack Developer",
    description: "Full Stack Developer (MERN) building scalable, performant web applications with React, Node.js, and MongoDB. Actively seeking full-time and internship opportunities.",
    type: "website",
    url: "https://ravikhokle.dev/",
    siteName: "Ravi Khokle",
    images: [
      {
        url: "/Images/me/ravikhokle.png",
        width: 1200,
        height: 630,
        alt: "Ravi Khokle - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Khokle - Full Stack Developer",
    description:
      "Full Stack Developer (MERN) building scalable, performant web applications with React, Node.js, and MongoDB. Actively seeking full-time and internship opportunities.",
    creator: "@ravikhokle",
    images: ["/Images/me/ravikhokle.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${plusJakartaSans.variable} ${plusJakartaSans.className} overflow-x-hidden relative`}>
        <ParticlesBackground />
        {/* Organization & Website JSON-LD */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ravi Khokle",
              url: "https://ravikhokle.dev/",
              sameAs: [
                "https://github.com/ravikhokle",
                "https://www.linkedin.com/in/ravikhokle/",
              ],
            }),
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
