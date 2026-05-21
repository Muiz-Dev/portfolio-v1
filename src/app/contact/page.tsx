import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { ScrollTopControl } from "@/components/scroll-top-control";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send Muiz Dev Solutions a project request for a website, business email, domain setup, maintenance, or custom web application.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <ContactPage />
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
