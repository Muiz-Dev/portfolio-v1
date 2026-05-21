import type { Metadata } from "next";
import { ScrollTopControl } from "@/components/scroll-top-control";
import { ServicesPage } from "@/components/services-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  JsonLd,
  breadcrumbNode,
  graphJsonLd,
  pageMetadata,
  servicesItemListNode,
  webPageNode,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Development, Business Email & Hosting Services",
  description:
    "Website development, business email setup, domain and hosting setup, SEO setup, website maintenance, and custom web applications from Muiz Dev Solutions.",
  path: "/services",
  image: "/seo/services-og.png",
  keywords: [
    "website development services Nigeria",
    "business email setup services",
    "domain hosting setup Nigeria",
    "website maintenance service",
    "custom web application development",
  ],
});

export default function Services() {
  return (
    <>
      <JsonLd
        id="services-structured-data"
        data={graphJsonLd([
          webPageNode({
            path: "/services",
            name: "Website Development, Business Email & Hosting Services",
            description:
              "Website development, business email setup, domain and hosting setup, SEO setup, website maintenance, and custom web applications from Muiz Dev Solutions.",
            image: "/seo/services-og.png",
            type: "CollectionPage",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          servicesItemListNode(),
        ])}
      />
      <SiteHeader />
      <ServicesPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
