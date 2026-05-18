import { SiteLogo } from "@/components/site-logo";

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="Site header">
        <SiteLogo />
        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="site-nav-list">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li className="site-nav-quote">Get a Quote</li>
          </ul>
        </nav>
      </header>
      <main />
    </>
  );
}
