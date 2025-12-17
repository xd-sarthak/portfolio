import Script from "next/script";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "@/lib/seo";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Sarthak Srivastav — Software Developer (Typescript, Go, Next.js, Node.js, Postgresql)",
  description:
    "Sarthak Srivastav is a Software Developer specializing in Go, Next.js, Prisma and PostgreSQL. Explore practical projects, code samples, and DevOps tips for building scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Go Developer",
    "Next.js Developer",
    "React Developer",
    "Golang",
    "Node.js",
    "DevOps Engineer",
    "PostgreSQL",
    "React Native",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Sarthak Srivastav",
      url: "https://abhoy.xyz",
    },
  ],
  creator: "Sarthak Srivastav",
  publisher: "Sarthak Srivastav",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.abhoy.xyz"),
  alternates: {
    canonical: "https://www.abhoy.xyz",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhoy.xyz",
    siteName: "Sarthak Srivastav Portfolio",
    title:
      "Sarthak Srivastav — Software Developer (Typescript, Go, Next.js, Node.js, Postgresql)",
    description:
      "Explore projects and engineering notes by Sarthak Srivastav — Software Developer focused on Go, Next.js, Prisma and PostgreSQL.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarthak Srivastav Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sarthak Srivastav — Software Developer (Typescript, Go, Next.js, Node.js, Postgresql)",
    description:
      "Software Developer building production-ready web apps with Go, Next.js, Prisma and PostgreSQL. See projects, notes and deployment tips.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generateStructuredData("person", {
    name: "Sarthak Srivastav",
    url: "https://www.abhoy.xyz",
    email: "sarthak.srivastav0203@gmail.com",
    sameAs: [
      "https://github.com/abhoy21",
      "https://in.linkedin.com/in/abhoy-sarkar",
      "https://www.youtube.com/shorts/nNH_S0kq3Sw?si=ezWg0XDpm-THAzJa",
    ],
  });

  const websiteSchema = generateStructuredData("website", {
    name: "Sarthak Srivastav Portfolio",
    url: "https://www.abhoy.xyz",
    description: "Portfolio of Sarthak Srivastav, a Software Developer.",
    authorName: "Sarthak Srivastav",
  });

  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* <AdSense pId={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID!} /> */}
        {/* <AdSense pId={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID!} /> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
