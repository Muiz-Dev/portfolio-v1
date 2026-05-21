import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type JsonValue = Record<string, unknown>;

const defaultRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

function unique(items: readonly string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/seo/home-og.png",
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: unique([...siteConfig.keywords, ...keywords]),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@muiz_sui",
      creator: "@muiz_sui",
      title,
      description,
      images: [imageUrl],
    },
    robots: defaultRobots,
  };
}

export function JsonLd({ id, data }: { id: string; data: JsonValue }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function graphJsonLd(nodes: JsonValue[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/logo-full-960.png"),
      width: 960,
      height: 348,
    },
    image: absoluteUrl("/seo/home-og.png"),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: ["Nigeria", "United Kingdom", "Remote"],
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      url: siteConfig.founder.url,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "project inquiries",
        areaServed: ["NG", "GB"],
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.x,
      siteConfig.socials.linkedin,
      siteConfig.socials.github,
      siteConfig.founder.url,
    ],
    knowsAbout: siteConfig.keywords,
    makesOffer: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: ["Nigeria", "United Kingdom", "Remote"],
      },
    })),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
  };
}

export function webPageNode({
  path,
  name,
  description,
  image = "/seo/home-og.png",
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  image?: string;
  type?: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image),
      width: 1200,
      height: 630,
    },
    inLanguage: siteConfig.language,
  };
}

export function breadcrumbNode(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function servicesItemListNode() {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/services")}#services`,
    name: "Muiz Dev Solutions services",
    itemListElement: siteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: ["Nigeria", "United Kingdom", "Remote"],
      },
    })),
  };
}

export function projectsItemListNode() {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/projects")}#projects`,
    name: "Muiz Dev Solutions project examples",
    itemListElement: siteConfig.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        url: project.url,
        image: absoluteUrl(project.image),
        genre: project.type,
        about: project.industry,
        creator: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    })),
  };
}
