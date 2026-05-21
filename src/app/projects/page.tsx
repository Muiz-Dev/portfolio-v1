import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollTopControl } from "@/components/scroll-top-control";
import {
  JsonLd,
  breadcrumbNode,
  graphJsonLd,
  pageMetadata,
  projectsItemListNode,
  webPageNode,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects: Websites, NGO Sites, Real Estate & App Work",
  description:
    "See Muiz Dev Solutions project work across business websites, NGO websites, organization websites, real estate websites, and mobile app projects.",
  path: "/projects",
  image: "/seo/projects-og.png",
  keywords: [
    "Muiz Dev Solutions projects",
    "business website portfolio Nigeria",
    "NGO website project",
    "real estate website project",
    "mobile app project",
  ],
});

export default function Projects() {
  return (
    <>
      <JsonLd
        id="projects-structured-data"
        data={graphJsonLd([
          webPageNode({
            path: "/projects",
            name: "Muiz Dev Solutions Projects",
            description:
              "Project work across business websites, NGO websites, organization websites, real estate websites, and mobile app projects.",
            image: "/seo/projects-og.png",
            type: "CollectionPage",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
          projectsItemListNode(),
        ])}
      />
      <SiteHeader />
      <ProjectsPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
