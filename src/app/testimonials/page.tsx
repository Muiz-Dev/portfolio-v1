import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, ClientQuote } from "@/lib/site-config";
import { pool } from "@/lib/db";
import { TestimonialsPageContent } from "@/components/testimonials-page";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollTopControl } from "@/components/scroll-top-control";

export const metadata: Metadata = pageMetadata({
  title: "Client Testimonials",
  description:
    "Real feedback from founders, directors, and businesses that have worked with Muiz Dev Solutions.",
  path: "/testimonials",
});

export const revalidate = 60;

export default async function TestimonialsPage() {
  // Fetch approved reviews from DB
  let dbQuotes: ClientQuote[] = [];
  try {
    const result = await pool.query(`
      SELECT id, client_name as client, business, feedback as quote, rating, service, role, featured,
             extract(year from created_at)::text as year
      FROM reviews
      WHERE status = 'approved'
      ORDER BY featured DESC, created_at DESC
    `);

    dbQuotes = result.rows.map((row) => ({
      type: "quote" as const,
      id: String(row.id),
      client: row.client,
      business: row.business,
      quote: row.quote,
      rating: Number(row.rating) as 1 | 2 | 3 | 4 | 5,
      service: row.service,
      role: row.role ?? undefined,
      year: row.year,
      featured: row.featured ?? false,
    }));
  } catch (error) {
    console.error("[testimonials] Failed to fetch from DB:", error);
  }

  // Fall back to config quotes if DB is empty
  const quotes: ClientQuote[] =
    dbQuotes.length > 0 ? dbQuotes : (siteConfig.feedback as unknown as ClientQuote[]);

  return (
    <>
      <SiteHeader />
      <main>
        <TestimonialsPageContent quotes={quotes} />
      </main>
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
