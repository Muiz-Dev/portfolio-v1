import { SiteHeader } from "@/components/site-header";
import { BeforeStartSection } from "@/components/before-start-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HomeHero } from "@/components/home-hero";
import { ProjectClaritySection } from "@/components/project-clarity-section";
import { ProjectProcessSection } from "@/components/project-process-section";
import { ProjectsProofSection } from "@/components/projects-proof-section";
import { ServicesSnapshotSection } from "@/components/services-snapshot-section";
import { SiteFooter } from "@/components/site-footer";
import { TrustGapSection } from "@/components/trust-gap-section";

export default function Home() {
  return (
    <>
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
    </>
  );
}
