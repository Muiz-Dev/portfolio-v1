import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ReviewForm } from "@/components/review-form";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollTopControl } from "@/components/scroll-top-control";

export const metadata: Metadata = pageMetadata({
  title: "Leave a Review",
  description: "Share your experience working with Muiz Dev Solutions.",
  path: "/review",
});

export default function ReviewPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="review-hero" aria-labelledby="review-title">
          <div className="review-intro">
            <p className="review-kicker">LEAVE A REVIEW</p>
            <h1 id="review-title">Thank you for working with Muiz Dev Solutions.</h1>
            <p className="review-description">
              We&apos;d love to hear about your experience. Your feedback helps other businesses decide with confidence.
            </p>
            <p className="review-trust">
              Your review will be published after a brief review. We never edit your words.
            </p>
          </div>
          <div className="review-form-container">
            <ReviewForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <ScrollTopControl />
    </>
  );
}
