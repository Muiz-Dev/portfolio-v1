import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { CookieBanner } from "@/components/cookie-banner";
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
  metadataBase: new URL(siteConfig.url),
  applicationName: "Muiz Dev Solutions",
  title: {
    default: "Muiz Dev Solutions | Website Development, Business Email & Digital Systems",
    template: "%s | Muiz Dev Solutions",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Muiz Dev Solutions", url: siteConfig.url }],
  creator: "Muiz Dev Solutions",
  publisher: "Muiz Dev Solutions",
  referrer: "strict-origin-when-cross-origin",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "your_google_site_verification_token",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: "Muiz Dev Solutions",
    title: "Muiz Dev Solutions | Website Development, Business Email & Digital Systems",
    description: siteConfig.shortDescription,
    images: [
      {
        url: absoluteUrl("/seo/home-og.png"),
        width: 1200,
        height: 630,
        alt: "Muiz Dev Solutions brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@muiz_sui",
    creator: "@muiz_sui",
    title: "Muiz Dev Solutions | Website Development, Business Email & Digital Systems",
    description: siteConfig.shortDescription,
    images: [absoluteUrl("/seo/home-og.png")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/icons/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    title: "Muiz Dev Solutions",
    statusBarStyle: "default",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos",
    "business:contact_data:locality": "Lagos",
    "business:contact_data:country_name": "Nigeria",
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
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
