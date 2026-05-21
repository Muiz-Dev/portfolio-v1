import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms and conditions for using Muiz Dev Solutions.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="compliance-page">
        <div className="compliance-header">
          <h1 className="compliance-title">Terms of Service</h1>
          <p className="compliance-date">Last updated: May 2026</p>
        </div>
        
        <div className="compliance-content">
          <p>
            Welcome to Muiz Dev Solutions. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2>1. Services Provided</h2>
          <p>
            Muiz Dev Solutions offers web development, business email setup, hosting solutions, and digital system integration. Specific deliverables, timelines, and costs will be outlined in a separate project proposal or contract for each client.
          </p>

          <h2>2. Client Responsibilities</h2>
          <p>
            To ensure timely project delivery, clients are expected to provide necessary materials (logos, copy, branding guidelines) promptly. Delays in providing feedback or assets may result in adjusted project timelines.
          </p>

          <h2>3. Payment Terms</h2>
          <p>
            Payment structures (e.g., upfront deposits, milestone payments) are agreed upon before a project begins. Work will commence once the initial deposit is received. We reserve the right to suspend services if payments are not made according to the agreed schedule.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            Upon full payment, the client owns the final website and provided deliverables. Muiz Dev Solutions retains the right to showcase the completed work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Muiz Dev Solutions strives to deliver high-quality, bug-free software, but we cannot guarantee that our services will be uninterrupted or error-free forever. We are not liable for direct or indirect damages, lost profits, or data loss resulting from the use of our services or third-party hosting failures.
          </p>

          <h2>6. Modifications to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have questions regarding these terms, please reach out to us at <a href="mailto:info@muizdev.xyz">info@muizdev.xyz</a>.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
