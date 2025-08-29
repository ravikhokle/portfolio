import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ravikhokle.site"),
  title: {
    default: "Ravi Khokle - Full Stack Developer & MERN Stack Developer",
    template: "%s | Ravi Khokle",
  },
  description:
    "Professional portfolio of Ravi Khokle - Full Stack Developer, MERN Stack Developer",
  keywords:
    "Ravi Khokle, Full Stack Developer, React Developer, Next.js Developer, MERN Stack Developer",
  authors: [{ name: "Ravi Khokle", url: "https://ravikhokle.site" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ravi Khokle - Full Stack Developer",
    description: "Professional portfolio showcasing modern web development projects",
    type: "website",
    url: "https://ravikhokle.site/",
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
      "Professional portfolio showcasing modern web development projects",
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
      <body className={`${inter.className} overflow-x-hidden`}>
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
              url: "https://ravikhokle.site/",
              sameAs: [
                "https://github.com/ravikhokle",
                "https://www.linkedin.com/in/ravikhokle/",
                "https://www.instagram.com/ravi__khokle/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
