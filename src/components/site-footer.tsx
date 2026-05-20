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
  { label: "Facebook", mark: "Fb", href: "#" },
  { label: "Gmail", mark: "Gm", href: "mailto:hello@muizdev.com" },
  { label: "Instagram", mark: "Ig", href: "#" },
  { label: "X", mark: "X", href: "#" },
  { label: "LinkedIn", mark: "In", href: "#" },
  { label: "Fiverr", mark: "Fv", href: "#" },
  { label: "GitHub", mark: "Gh", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
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
          Websites, branded emails, and digital systems for businesses that want
          to look serious online.
        </span>
        <div className="site-footer-social" aria-label="Social links">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label}>
              {social.mark}
            </a>
          ))}
        </div>
      </div>

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

      <div className="site-footer-contact">
        <p>Contact</p>
        <a href="mailto:hello@muizdev.com">hello@muizdev.com</a>
        <span>Lagos, Nigeria</span>
      </div>
    </footer>
  );
}
