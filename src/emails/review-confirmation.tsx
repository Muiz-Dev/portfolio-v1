import * as React from "react";
import { EmailFooter } from "./review-notification";

interface Props {
  clientName: string;
  business: string;
  rating: number;
}

const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

export function ReviewConfirmationEmail({ clientName, business, rating }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank you for your feedback</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f4efe6", fontFamily: "'IBM Plex Sans', Arial, sans-serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: "#f4efe6", padding: "40px 16px" }}>
          <tr>
            <td align="center">
              <table width="600" cellPadding={0} cellSpacing={0} style={{ maxWidth: 600, width: "100%" }}>

                {/* Header */}
                <tr>
                  <td style={{ backgroundColor: "#ffffff", padding: "32px 40px", textAlign: "left", borderBottom: "1px solid #e0dbce" }}>
                    <img
                      src="https://solutions.muizdev.xyz/brand/logo-full-960.png"
                      alt="Muiz Dev Solutions"
                      width="160"
                      style={{ display: "block" }}
                    />
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ backgroundColor: "#fffdf8", padding: "48px 40px 40px" }}>
                    {/* Stars */}
                    <p style={{ margin: "0 0 24px", fontSize: 40, lineHeight: 1, color: "#F59E0B", letterSpacing: 4 }}>
                      {stars(rating)}
                    </p>

                    <h1 style={{ fontFamily: "'Bricolage Grotesque', Arial, sans-serif", fontSize: 28, color: "#11120f", margin: "0 0 12px", lineHeight: 1.15 }}>
                      Thank you, {clientName.split(" ")[0]}.
                    </h1>
                    <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.65, color: "#3f3a35" }}>
                      We&apos;ve received your {rating}-star review for <strong>{business}</strong>. It means a lot to us.
                      Our team will review it shortly and publish it on our testimonials page.
                    </p>

                    {/* Divider */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr><td style={{ height: 1, backgroundColor: "#e0dbce" }} /></tr>
                    </table>

                    <p style={{ margin: "0 0 8px", fontSize: 15, color: "#11120f", fontWeight: 600 }}>
                      What happens next?
                    </p>
                    <p style={{ margin: "0 0 32px", fontSize: 15, lineHeight: 1.65, color: "#625b53" }}>
                      We never edit your words. Your review will appear on our website exactly as you wrote it,
                      once it passes our brief internal check (usually within 24 hours).
                    </p>

                    {/* CTA */}
                    <a
                      href="https://solutions.muizdev.xyz/testimonials"
                      style={{ display: "inline-block", backgroundColor: "#11120f", color: "#d9ff73", padding: "14px 32px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      SEE ALL TESTIMONIALS →
                    </a>

                    {/* Divider */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ margin: "40px 0 0" }}>
                      <tr><td style={{ height: 1, backgroundColor: "#e0dbce" }} /></tr>
                    </table>

                    <p style={{ margin: "24px 0 0", fontSize: 14, lineHeight: 1.65, color: "#625b53" }}>
                      Need something else? Reply to this email or reach us on{" "}
                      <a href="https://wa.me/2348124604571" style={{ color: "#4b37ff", textDecoration: "none" }}>WhatsApp</a>.
                    </p>
                  </td>
                </tr>

                {/* Footer */}
                <EmailFooter reason="You are receiving this because you submitted a review at solutions.muizdev.xyz." />

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}
