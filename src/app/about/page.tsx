import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
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
  title: "About Muiz Dev Solutions",
  description:
    "About Muiz Dev Solutions, a practical digital studio led by Muiz Adesope for websites, branded emails, domain setup, and custom digital systems.",
  path: "/about",
  image: "/seo/about-og.png",
  keywords: [
    "Muiz Adesope",
    "Muiz Dev Solutions about",
    "full stack developer Lagos",
    "digital studio Nigeria",
  ],
});

export default function About() {
  return (
    <>
      <JsonLd
        id="about-structured-data"
        data={graphJsonLd([
          webPageNode({
            path: "/about",
            name: "About Muiz Dev Solutions",
            description:
              "About Muiz Dev Solutions, a practical digital studio led by Muiz Adesope for websites, branded emails, domain setup, and custom digital systems.",
            image: "/seo/about-og.png",
            type: "AboutPage",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          {
            "@type": "Person",
            "@id": `${siteConfig.founder.url}#person`,
            name: siteConfig.founder.name,
            url: siteConfig.founder.url,
            worksFor: {
              "@id": `${siteConfig.url}/#organization`,
            },
            sameAs: [siteConfig.founder.url, siteConfig.socials.linkedin, siteConfig.socials.github],
          },
        ])}
      />
      <SiteHeader />
      <AboutPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
