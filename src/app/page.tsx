import { SiteHeader } from "@/components/site-header";
import { HomeHero } from "@/components/home-hero";
import { ServicesSnapshotSection } from "@/components/services-snapshot-section";
import { TrustGapSection } from "@/components/trust-gap-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <TrustGapSection />
        <ServicesSnapshotSection />
      </main>
    </>
  );
}
