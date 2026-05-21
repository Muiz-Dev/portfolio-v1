import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const lastModified = new Date("2026-05-21T00:00:00+01:00");

const routes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
    images: ["/seo/home-og.png", "/brand/logo-full-960.png"],
  },
  {
    path: "/services",
    changeFrequency: "monthly" as const,
    priority: 0.9,
    images: ["/seo/services-og.png"],
  },
  {
    path: "/projects",
    changeFrequency: "monthly" as const,
    priority: 0.88,
    images: ["/seo/projects-og.png", ...siteConfig.projects.map((project) => project.image)],
  },
  {
    path: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.75,
    images: ["/seo/about-og.png"],
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.82,
    images: ["/seo/contact-og.png"],
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images.map((image) => absoluteUrl(image)),
  }));
}
