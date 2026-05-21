const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solutions.muizdev.xyz";

export const siteConfig = {
  name: "Muiz Dev Solutions",
  legalName: "Muiz Dev Solutions",
  url: rawSiteUrl.replace(/\/+$/, ""),
  locale: "en_NG",
  language: "en-NG",
  email: "info@muizdev.xyz",
  whatsapp: "+2348124604571",
  whatsappUrl: "https://wa.me/2348124604571",
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
  feedback: [
    {
      type: "quote",
      id: "quote-1",
      client: "Sarah Jenkins",
      role: "Operations Director",
      business: "Pinnacle Logistics",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      quote: "Muiz completely transformed how our business looks online. The website is incredibly fast, and setting up our professional emails was seamless. We've already seen an increase in inbound inquiries.",
      service: "Website Development",
      featured: true,
    },
    {
      type: "quote",
      id: "quote-2",
      client: "David O.",
      role: "Founder",
      business: "AfriConnect",
      image: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      quote: "Working with Muiz was the best technical decision we made this year. He didn't just write code; he understood the business problem we were trying to solve. Highly recommended.",
      service: "Custom Web Applications",
    },
    {
      type: "quote",
      id: "quote-3",
      client: "Elena Rostova",
      role: "Marketing Head",
      business: "Lumina Real Estate",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      quote: "Before, our property listings were messy and hard to navigate. The new system is clean, professional, and buyers can reach out directly on WhatsApp with one tap. Brilliant execution.",
      service: "Website Development",
    },
    {
      type: "quote",
      id: "quote-4",
      client: "Michael T.",
      role: "CEO",
      business: "TechFlow Solutions",
      image: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      quote: "A true professional. Delivered exactly on time, the design is pixel-perfect, and the backend is solid. We'll definitely be working together again on future projects.",
      service: "Website Development",
    },
  ] as const,
};

export type ClientQuote = {
  type: "quote";
  id: string;
  client: string;
  business: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image?: string;
  service: string;
  role?: string;
  industry?: string;
  projectSlug?: string;
  year?: string;
  featured?: boolean;
};

export type ClientFeedback = ClientQuote;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, `${siteConfig.url}/`).toString();
}
