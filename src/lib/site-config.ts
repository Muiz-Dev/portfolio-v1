const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://muizdev.com";

export const siteConfig = {
  name: "Muiz Dev Solutions",
  legalName: "Muiz Dev Solutions",
  url: rawSiteUrl.replace(/\/+$/, ""),
  locale: "en_NG",
  language: "en-NG",
  email: "info@muizdev.xyz",
  location: "Lagos, Nigeria",
  founder: {
    name: "Muiz Adesope",
    url: "https://www.muizdev.xyz",
  },
  description:
    "Muiz Dev Solutions helps businesses, NGOs, schools, startups, and service providers build professional websites, branded emails, domain setups, maintenance, and custom digital systems that improve trust and customer communication.",
  shortDescription:
    "Websites, branded emails, domain setup, maintenance, and custom digital systems for businesses that want to look serious online.",
  keywords: [
    "Muiz Dev Solutions",
    "website development Nigeria",
    "website development Lagos",
    "web design Lagos",
    "web developer Lagos",
    "business email setup Nigeria",
    "domain and hosting setup",
    "website maintenance Nigeria",
    "custom web applications Nigeria",
    "NGO website design",
    "school website development",
    "real estate website development",
    "startup website Nigeria",
    "branded email setup",
    "professional business website",
  ],
  socials: {
    facebook: "https://web.facebook.com/muizdev",
    instagram: "https://www.instagram.com/adesopemuiz",
    x: "https://x.com/muiz_sui",
    linkedin: "https://www.linkedin.com/in/muiz-adesope/",
    github: "https://github.com/Muiz-Dev",
  },
  services: [
    {
      name: "Website Development",
      description:
        "Responsive business websites with clear pages, mobile-friendly layouts, contact forms, WhatsApp links, and search-ready structure.",
    },
    {
      name: "Business Email Setup",
      description:
        "Branded email setup with domain records, MX configuration, webmail access, forwarding, and usage guidance.",
    },
    {
      name: "Domain & Hosting Setup",
      description:
        "Domain connection, hosting configuration, DNS records, SSL, redirects, and launch checks.",
    },
    {
      name: "Website Maintenance",
      description:
        "Website updates, fixes, backups, content changes, security checks, and post-launch support.",
    },
    {
      name: "Custom Web Applications",
      description:
        "Dashboards, portals, booking systems, admin panels, internal tools, and custom workflows.",
    },
    {
      name: "SEO Setup",
      description:
        "Search-friendly page titles, descriptions, heading structure, image alt text, sitemap setup, and Search Console guidance.",
    },
  ],
  projects: [
    {
      name: "GP Smith AccounTax Services",
      type: "Business website",
      industry: "Accounting, tax, and business services",
      url: "https://www.gpsmithaccountax.co.uk/",
      image: "/projects/gp-smith-desktop-crop.webp",
    },
    {
      name: "HBSI Nigeria",
      type: "Organization website",
      industry: "Organization / Business",
      url: "https://www.hbsinigeria.org/",
      image: "/projects/hbsi-card-crop.webp",
    },
    {
      name: "McBen Leo Cares",
      type: "NGO website",
      industry: "NGO / Community support",
      url: "https://mcbenleocares.co.uk/",
      image: "/https-www.mcbenleocares.co.uk-.png",
    },
    {
      name: "LoveView Estates",
      type: "Property website",
      industry: "Real estate",
      url: "https://www.loveviewestates.co.uk/",
      image: "/projects/loveview-card-crop.webp",
    },
    {
      name: "Africonnect Exchange",
      type: "Mobile app",
      industry: "Shopping / diaspora marketplace",
      url: "https://play.google.com/store/apps/details?id=org.africonnect.exchange&hl=en",
      image: "/projects/africonnect-exchange-card.webp",
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, `${siteConfig.url}/`).toString();
}
