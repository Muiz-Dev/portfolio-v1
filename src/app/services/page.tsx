import type { Metadata } from "next";
import { ScrollTopControl } from "@/components/scroll-top-control";
import { ServicesPage } from "@/components/services-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, business email setup, domain and hosting setup, maintenance, SEO setup, and custom web applications from Muiz Dev Solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <>
      <SiteHeader />
      <ServicesPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
