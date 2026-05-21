import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const projects = [
  {
    name: "GP Smith AccounTax Services",
    slug: "gp-smith-accountax",
    industry: "Accounting, tax, and business services",
    type: "Business website",
    focus: "Trust, service clarity, and easier client contact.",
    image: "/projects/gp-smith-desktop-crop.webp",
    width: 1400,
    height: 980,
    featured: true,
    url: "https://www.gpsmithaccountax.co.uk/",
  },
  {
    name: "HBSI Nigeria",
    slug: "hbsi-nigeria",
    industry: "Organization / Business",
    type: "Organization website",
    focus: "Structured pages for a clearer professional presence.",
    image: "/projects/hbsi-card-crop.webp",
    width: 1100,
    height: 780,
    url: "https://www.hbsinigeria.org/",
  },
  {
    name: "McBen Leo Cares",
    slug: "mcben-leo-cares",
    industry: "NGO / Community support",
    type: "NGO website",
    focus: "Mission, activities, and contact channels presented clearly.",
    image: "/https-www.mcbenleocares.co.uk-.png",
    width: 1024,
    height: 768,
    url: "https://mcbenleocares.co.uk/",
  },
  {
    name: "LoveView Estates",
    slug: "loveview-estates",
    industry: "Real estate",
    type: "Property website",
    focus: "A public web presence that supports property inquiries.",
    image: "/projects/loveview-card-crop.webp",
    width: 1100,
    height: 780,
    url: "https://www.loveviewestates.co.uk/",
  },
  {
    name: "Africonnect Exchange",
    slug: "africonnect-exchange",
    industry: "Shopping / diaspora marketplace",
    type: "Mobile app",
    focus:
      "A community marketplace app for browsing listings, seller profiles, carts, checkout, and orders.",
    image: "/projects/africonnect-exchange-card.webp",
    width: 1200,
    height: 675,
    url: "https://play.google.com/store/apps/details?id=org.africonnect.exchange&hl=en",
  },
];

export function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="projects-page">
      <section className="projects-page-hero" aria-labelledby="projects-page-title">
        <p className="projects-page-kicker">Project proof</p>
        <h1 id="projects-page-title">Real websites and apps built to make the business easier to trust.</h1>
        <p>
          A focused look at live work, the type of business behind each project,
          and the practical job the website or app needed to do.
        </p>
      </section>

      {featuredProject ? (
        <section className="projects-page-featured" aria-labelledby="featured-project-title">
          <div className="projects-page-featured-copy">
            <p className="projects-page-label">Featured project</p>
            <h2 id="featured-project-title">{featuredProject.name}</h2>
            <p>{featuredProject.focus}</p>
            <dl>
              <div>
                <dt>Industry</dt>
                <dd>{featuredProject.industry}</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>{featuredProject.type}</dd>
              </div>
            </dl>
            {"url" in featuredProject ? (
              <a
                className="projects-page-card-link projects-page-featured-link"
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>View live site</span>
                <HugeiconsIcon
                  className="icon"
                  icon={ArrowUpRight01Icon}
                  size={15}
                  strokeWidth={2}
                />
              </a>
            ) : null}
          </div>

          <div className="projects-page-shot">
            <div className="project-browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>gpsmithaccountax.co.uk</p>
            </div>
            <Image
              src={featuredProject.image}
              alt={`Screenshot of ${featuredProject.name}`}
              width={featuredProject.width}
              height={featuredProject.height}
              priority
              sizes="(max-width: 1023px) 100vw, 54vw"
            />
          </div>
        </section>
      ) : null}

      <section className="projects-page-list" aria-labelledby="more-projects-title">
        <div className="projects-page-list-head">
          <p className="projects-page-label">More work</p>
          <h2 id="more-projects-title">Other projects online.</h2>
        </div>

        <div className="projects-page-grid">
          {otherProjects.map((project) => (
            <article className="projects-page-card" key={project.slug}>
              <div className="projects-page-card-image">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>
              <div className="projects-page-card-copy">
                <p>{project.industry}</p>
                <h3>{project.name}</h3>
                <span>{project.focus}</span>
                {"url" in project ? (
                  <a
                    className="projects-page-card-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{project.type === "Mobile app" ? "View live app" : "View live site"}</span>
                    <HugeiconsIcon
                      className="icon"
                      icon={ArrowUpRight01Icon}
                      size={15}
                      strokeWidth={2}
                    />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-page-add" aria-labelledby="projects-add-title">
        <div>
          <p className="projects-page-label">Adding more</p>
          <h2 id="projects-add-title">New case studies can fit here without redesigning the page.</h2>
        </div>
        <Link href="/contact">
          <span>Start a project</span>
          <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
