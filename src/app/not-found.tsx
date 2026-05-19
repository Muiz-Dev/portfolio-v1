import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found-page">
        <section className="not-found-hero" aria-labelledby="not-found-title">
          <div className="not-found-copy">
            <p className="not-found-kicker">404 / Page not found</p>
            <h1 id="not-found-title" className="hero-title">
              We could not find that page.
            </h1>
            <p className="not-found-text">
              The link may be old or mistyped. Head home or start a project
              request.
            </p>
            <div className="not-found-actions">
              <Link className="not-found-primary" href="/">
                Back Home
              </Link>
              <Link className="not-found-secondary" href="/contact">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="not-found-visual" aria-hidden="true">
            <Image
              src="/illustrations/not-found-scale.svg"
              alt=""
              width={1600}
              height={1200}
              priority
              className="not-found-image"
            />
          </div>
        </section>
      </main>
    </>
  );
}
