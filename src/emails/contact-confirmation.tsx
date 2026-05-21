import * as React from "react";
import { EmailFooter } from "./review-notification";

interface Props {
  senderName: string;
  service?: string | null;
}

export function ContactConfirmationEmail({ senderName, service }: Props) {
  const firstName = senderName.split(" ")[0];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>We received your request</title>
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
                    <h1 style={{ fontFamily: "'Bricolage Grotesque', Arial, sans-serif", fontSize: 30, color: "#11120f", margin: "0 0 16px", lineHeight: 1.1 }}>
                      Got it, {firstName}.
                    </h1>
                    <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.65, color: "#3f3a35" }}>
                      We&apos;ve received your {service ? <>request for <strong>{service}</strong></> : "message"} and will get back to you within <strong>24 hours</strong>.
                    </p>
                    <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.65, color: "#3f3a35" }}>
                      If you need a faster response, you can reach us directly on WhatsApp — we usually reply within the hour.
                    </p>

                    {/* Divider */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr><td style={{ height: 1, backgroundColor: "#e0dbce" }} /></tr>
                    </table>

                    {/* CTA */}
                    <a
                      href="https://wa.me/2348124604571"
                      style={{ display: "inline-block", backgroundColor: "#25D366", color: "#ffffff", padding: "14px 32px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace", marginRight: 12 }}
                    >
                      CHAT ON WHATSAPP →
                    </a>
                    <a
                      href="https://solutions.muizdev.xyz/projects"
                      style={{ display: "inline-block", backgroundColor: "transparent", color: "#11120f", padding: "12px 28px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace", border: "1.5px solid #11120f" }}
                    >
                      SEE OUR WORK
                    </a>
                  </td>
                </tr>

                {/* Footer */}
                <EmailFooter reason="You are receiving this because you submitted a project request at solutions.muizdev.xyz." />

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}
