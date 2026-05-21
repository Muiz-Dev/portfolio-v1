import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { BeforeStartSection } from "@/components/before-start-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HomeHero } from "@/components/home-hero";
import { ProjectClaritySection } from "@/components/project-clarity-section";
import { ProjectProcessSection } from "@/components/project-process-section";
import { ProjectsProofSection } from "@/components/projects-proof-section";
import { ScrollTopControl } from "@/components/scroll-top-control";
import { ServicesSnapshotSection } from "@/components/services-snapshot-section";
import { SiteFooter } from "@/components/site-footer";
import { TrustGapSection } from "@/components/trust-gap-section";
import {
  JsonLd,
  graphJsonLd,
  organizationNode,
  pageMetadata,
  servicesItemListNode,
  webPageNode,
  websiteNode,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Website Development, Business Email & Digital Systems in Nigeria",
  description:
    "Muiz Dev Solutions builds professional websites, branded emails, domain setups, maintenance, and custom digital systems for businesses, NGOs, schools, startups, and service providers.",
  path: "/",
  image: "/seo/home-og.png",
  keywords: [
    "website developer in Lagos",
    "business website development Nigeria",
    "branded business email setup",
    "domain hosting SSL setup",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        id="home-structured-data"
        data={graphJsonLd([
          organizationNode(),
          websiteNode(),
          webPageNode({
            path: "/",
            name: "Muiz Dev Solutions",
            description: siteConfig.shortDescription,
            image: "/seo/home-og.png",
          }),
          servicesItemListNode(),
        ])}
      />
      <SiteHeader />
      <main>
        <HomeHero />
        <TrustGapSection />
        <ServicesSnapshotSection />
        <ProjectsProofSection />
        <ProjectClaritySection />
        <ProjectProcessSection />
        <BeforeStartSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
