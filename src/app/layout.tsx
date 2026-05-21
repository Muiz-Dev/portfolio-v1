import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://muizdev.com"),
  applicationName: "Muiz Dev Solutions",
  title: {
    default: "Muiz Dev Solutions | Websites, Business Emails & Digital Systems",
    template: "%s | Muiz Dev Solutions",
  },
  description:
    "Muiz Dev Solutions helps businesses, NGOs, schools, startups, and service providers build professional websites, branded emails, domain setups, and digital systems that improve trust and customer communication.",
  keywords: [
    "Muiz Dev Solutions",
    "website development Nigeria",
    "business email setup",
    "domain hosting setup",
    "website maintenance",
    "custom web applications",
    "Lagos web developer",
  ],
  authors: [{ name: "Muiz Dev Solutions" }],
  creator: "Muiz Dev Solutions",
  publisher: "Muiz Dev Solutions",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Muiz Dev Solutions",
    title: "Muiz Dev Solutions | Websites, Business Emails & Digital Systems",
    description:
      "Professional websites, branded emails, domain setup, maintenance, and custom digital tools for businesses that want to look serious online.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Muiz Dev Solutions brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muiz Dev Solutions | Websites, Business Emails & Digital Systems",
    description:
      "Websites, branded emails, and digital systems for businesses that want to look serious online.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/icons/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
