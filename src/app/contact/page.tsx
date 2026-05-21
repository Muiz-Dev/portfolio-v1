import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { ScrollTopControl } from "@/components/scroll-top-control";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  JsonLd,
  breadcrumbNode,
  graphJsonLd,
  pageMetadata,
  webPageNode,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact Muiz Dev Solutions",
  description:
    "Send Muiz Dev Solutions a project request for a website, business email, domain setup, maintenance, or custom web application.",
  path: "/contact",
  image: "/seo/contact-og.png",
  keywords: [
    "contact Muiz Dev Solutions",
    "request website quote Nigeria",
    "website project request",
    "business email setup quote",
  ],
});

export default function Contact() {
  return (
    <>
      <JsonLd
        id="contact-structured-data"
        data={graphJsonLd([
          webPageNode({
            path: "/contact",
            name: "Contact Muiz Dev Solutions",
            description:
              "Send Muiz Dev Solutions a project request for a website, business email, domain setup, maintenance, or custom web application.",
            image: "/seo/contact-og.png",
            type: "ContactPage",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "project inquiries",
            areaServed: ["NG", "GB"],
            availableLanguage: ["English"],
          },
        ])}
      />
      <SiteHeader />
      <ContactPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
