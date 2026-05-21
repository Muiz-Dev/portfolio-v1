import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollTopControl } from "@/components/scroll-top-control";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A focused look at Muiz Dev Solutions projects for businesses, NGOs, organizations, and real estate brands.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return (
    <>
      <SiteHeader />
      <ProjectsPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
