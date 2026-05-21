import * as React from "react";
import { EmailFooter } from "./review-notification";

interface Props {
  senderName: string;
  email: string;
  phone?: string | null;
  service?: string | null;
  budget?: string | null;
  message: string;
}

export function ContactNotificationEmail({ senderName, email, phone, service, budget, message }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Request</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f4efe6", fontFamily: "'IBM Plex Sans', Arial, sans-serif" }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: "#f4efe6", padding: "40px 16px" }}>
          <tr>
            <td align="center">
              <table width="600" cellPadding={0} cellSpacing={0} style={{ maxWidth: 600, width: "100%" }}>

                {/* Header */}
                <tr>
                  <td style={{ backgroundColor: "#11120f", padding: "32px 40px", textAlign: "center" }}>
                    <img
                      src="https://solutions.muizdev.xyz/muiz_full_logo_white_only_transparent.png"
                      alt="Muiz Dev Solutions"
                      width="160"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </td>
                </tr>

                {/* Alert banner */}
                <tr>
                  <td style={{ backgroundColor: "#4b37ff", padding: "12px 40px" }}>
                    <p style={{ margin: 0, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#ffffff", textTransform: "uppercase", letterSpacing: 1 }}>
                      New Project Request — Respond Within 24 Hours
                    </p>
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ backgroundColor: "#fffdf8", padding: "40px 40px 32px" }}>
                    <h1 style={{ fontFamily: "'Bricolage Grotesque', Arial, sans-serif", fontSize: 24, color: "#11120f", margin: "0 0 8px" }}>
                      {senderName} sent a project request
                    </h1>
                    <p style={{ margin: "0 0 32px", fontSize: 14, color: "#625b53" }}>
                      <a href={`mailto:${email}`} style={{ color: "#4b37ff", textDecoration: "none" }}>{email}</a>
                      {phone ? ` · ${phone}` : ""}
                    </p>

                    {/* Message block */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr>
                        <td style={{ borderLeft: "4px solid #4b37ff", paddingLeft: 20 }}>
                          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "#11120f" }}>
                            {message}
                          </p>
                        </td>
                      </tr>
                    </table>

                    {/* Divider */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr><td style={{ height: 1, backgroundColor: "#e0dbce" }} /></tr>
                    </table>

                    {/* Details table */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      {service && (
                        <tr>
                          <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#625b53", width: "30%" }}>Service</td>
                          <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#11120f" }}>{service}</td>
                        </tr>
                      )}
                      {budget && (
                        <tr>
                          <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#625b53" }}>Budget</td>
                          <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#11120f" }}>{budget}</td>
                        </tr>
                      )}
                      <tr>
                        <td style={{ padding: "8px 0", fontSize: 14, color: "#625b53" }}>Email</td>
                        <td style={{ padding: "8px 0", fontSize: 14, color: "#11120f" }}>
                          <a href={`mailto:${email}`} style={{ color: "#4b37ff", textDecoration: "none" }}>{email}</a>
                        </td>
                      </tr>
                    </table>

                    {/* Reply CTA */}
                    <a
                      href={`mailto:${email}?subject=Re: Your project request`}
                      style={{ display: "inline-block", backgroundColor: "#4b37ff", color: "#ffffff", padding: "14px 32px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace", marginRight: 12 }}
                    >
                      REPLY BY EMAIL →
                    </a>
                    {phone && (
                      <a
                        href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                        style={{ display: "inline-block", backgroundColor: "#25D366", color: "#ffffff", padding: "14px 32px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        WHATSAPP →
                      </a>
                    )}
                  </td>
                </tr>

                {/* Footer */}
                <EmailFooter />

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}
