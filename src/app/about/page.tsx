import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { ScrollTopControl } from "@/components/scroll-top-control";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muiz Dev Solutions, a practical digital studio led by Muiz Adesope for websites, branded emails, domain setup, and custom digital systems.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <AboutPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
