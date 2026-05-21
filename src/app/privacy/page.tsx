import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How we handle and protect your data.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="compliance-page">
        <div className="compliance-header">
          <h1 className="compliance-title">Privacy Policy</h1>
          <p className="compliance-date">Last updated: May 2026</p>
        </div>
        
        <div className="compliance-content">
          <p>
            At Muiz Dev Solutions, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, business name, and phone number when you fill out contact or review forms.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP addresses, browser types, and pages visited (via standard analytics and cookies).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected data for the following purposes:</p>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To communicate with you regarding project requests, updates, and support.</li>
            <li>To display approved client testimonials (with your explicit permission).</li>
            <li>To improve our website functionality and user experience.</li>
          </ul>

          <h2>3. Cookies and Tracking</h2>
          <p>
            We use cookies to ensure the basic functionality of our website and to analyze traffic. You can choose to accept or decline cookies through our cookie consent banner or your browser settings.
          </p>

          <h2>4. Data Sharing and Security</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. Your data is stored securely in our databases. We may share necessary information with trusted third-party service providers (like email sending services) solely to operate our business and provide services to you.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal data. If you have submitted a testimonial and wish for it to be removed, please contact us.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@muizdev.xyz">info@muizdev.xyz</a> or via WhatsApp.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
