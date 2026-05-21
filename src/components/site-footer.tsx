import Image from "next/image";
import Link from "next/link";

const footerLinks = ["Home", "Services", "Projects", "About", "Blog", "Testimonials", "Contact"];

const serviceLinks = [
  "Website Development",
  "Business Email Setup",
  "Domain & Hosting",
  "Website Maintenance",
  "Custom Web Applications",
];

const socialLinks = [
  { label: "Facebook", icon: "/icons/social/facebook.svg", href: "https://web.facebook.com/muizdev" },
  { label: "Gmail", icon: "/icons/social/gmail.svg", href: "mailto:info@muizdev.xyz" },
  { label: "Instagram", icon: "/icons/social/instagram.svg", href: "https://www.instagram.com/adesopemuiz" },
  { label: "X", icon: "/icons/social/x.svg", href: "https://x.com/muiz_sui" },
  { label: "LinkedIn", icon: "/icons/social/linkedin.svg", href: "https://www.linkedin.com/in/muiz-adesope/" },
  { label: "Fiverr", icon: "/icons/social/fiverr.svg", href: "#" },
  { label: "GitHub", icon: "/icons/social/github.svg", href: "https://github.com/Muiz-Dev" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-statement">
        <p>Keep the next step clear.</p>
        <strong>Websites, branded emails, and digital systems for serious businesses.</strong>
      </div>

      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link className="site-footer-logo" href="/" aria-label="Muiz Dev Solutions home">
            <Image
              src="/brand/logo-full-960.png"
              alt="Muiz Dev Solutions"
              width={960}
              height={348}
              sizes="(max-width: 640px) 190px, 230px"
            />
          </Link>
          <span>
            We help businesses look professional online with clean websites,
            branded emails, domain setup, and practical launch support.
          </span>
        </div>

        <div className="site-footer-links">
          <nav className="site-footer-nav" aria-label="Footer navigation">
            <p>Pages</p>
            <ul>
              {footerLinks.map((link) => (
                <li key={link}>
                  <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-services">
            <p>Services</p>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer-contact">
          <p>Contact</p>
          <a href="mailto:info@muizdev.xyz">info@muizdev.xyz</a>
          <span>Lagos, Nigeria</span>
          <div className="site-footer-social" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Image src={social.icon} alt="" width={18} height={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 Muiz Dev Solutions. All rights reserved.</p>
        <span>Websites · Business Emails · Domains · Support</span>
      </div>
    </footer>
  );
}
