import * as React from "react";

interface Props {
  clientName: string;
  business: string;
  role?: string | null;
  service: string;
  rating: number;
  feedback: string;
  reviewId?: string | number;
}

const stars = (n: number) => "★".repeat(n) + "☆".repeat(5 - n);

export function ReviewNotificationEmail({ clientName, business, role, service, rating, feedback, reviewId }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Review Submission</title>
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

                {/* Alert banner */}
                <tr>
                  <td style={{ backgroundColor: "#d9ff73", padding: "12px 40px" }}>
                    <p style={{ margin: 0, fontFamily: "'IBM Plex Mono', monospace, monospace", fontSize: 12, color: "#11120f", textTransform: "uppercase", letterSpacing: 1 }}>
                      New Review Submitted — Awaiting Approval
                    </p>
                  </td>
                </tr>

                {/* Body */}
                <tr>
                  <td style={{ backgroundColor: "#fffdf8", padding: "40px 40px 32px" }}>

                    <h1 style={{ fontFamily: "'Bricolage Grotesque', Arial, sans-serif", fontSize: 24, color: "#11120f", margin: "0 0 8px" }}>
                      {clientName} left a {rating}-star review
                    </h1>
                    <p style={{ margin: "0 0 32px", fontSize: 14, color: "#625b53" }}>
                      {role ? `${role}, ` : ""}{business} · {service}
                    </p>

                    {/* Stars */}
                    <p style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1, color: "#F59E0B", letterSpacing: 2 }}>
                      {stars(rating)}
                    </p>

                    {/* Quote block */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr>
                        <td style={{ borderLeft: "4px solid #d9ff73", paddingLeft: 20 }}>
                          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#11120f", fontStyle: "italic" }}>
                            &quot;{feedback}&quot;
                          </p>
                        </td>
                      </tr>
                    </table>

                    {/* Divider */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr><td style={{ height: 1, backgroundColor: "#e0dbce" }} /></tr>
                    </table>

                    {/* Meta details */}
                    <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: 32 }}>
                      <tr>
                        <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#625b53", width: "30%" }}>Client</td>
                        <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#11120f", fontWeight: 600 }}>{clientName}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#625b53" }}>Business</td>
                        <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#11120f" }}>{business}</td>
                      </tr>
                      {role && (
                        <tr>
                          <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#625b53" }}>Role</td>
                          <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#11120f" }}>{role}</td>
                        </tr>
                      )}
                      <tr>
                        <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#625b53" }}>Service</td>
                        <td style={{ padding: "8px 0", borderBottom: "1px solid #e0dbce", fontSize: 14, color: "#11120f" }}>{service}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "8px 0", fontSize: 14, color: "#625b53" }}>Rating</td>
                        <td style={{ padding: "8px 0", fontSize: 14, color: "#F59E0B", fontWeight: 700 }}>{stars(rating)} ({rating}/5)</td>
                      </tr>
                    </table>

                    {/* CTA — link to reviews DB or admin */}
                    <p style={{ margin: "0 0 8px", fontSize: 13, color: "#625b53" }}>
                      To approve or reject this review, update its status in your database.
                    </p>
                    <a
                      href="https://solutions.muizdev.xyz/testimonials"
                      style={{ display: "inline-block", backgroundColor: "#11120f", color: "#d9ff73", padding: "12px 28px", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      VIEW TESTIMONIALS PAGE →
                    </a>
                  </td>
                </tr>

                {/* Footer */}
                <EmailFooter reason="You are receiving this because a new review was submitted on solutions.muizdev.xyz." />

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

export function EmailFooter({ reason }: { reason?: string }) {
  return (
    <tr>
      <td style={{ backgroundColor: "#fbf8f1", padding: "40px", borderTop: "1px solid #e0dbce" }}>
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tr>
            <td>
              <img
                src="https://solutions.muizdev.xyz/brand/logo-full-960.png"
                alt="Muiz Dev Solutions"
                width="140"
                style={{ display: "block", marginBottom: 16 }}
              />
              <p style={{ margin: "0 0 4px", fontSize: 13, color: "#625b53" }}>
                Muiz Dev Solutions · Lagos, Nigeria
              </p>
              <p style={{ margin: "0 0 16px", fontSize: 13, color: "#625b53" }}>
                <a href="mailto:info@muizdev.xyz" style={{ color: "#4b37ff", textDecoration: "none" }}>info@muizdev.xyz</a>
                {" · "}
                <a href="https://solutions.muizdev.xyz" style={{ color: "#4b37ff", textDecoration: "none" }}>solutions.muizdev.xyz</a>
              </p>
              {/* Social row */}
              <table cellPadding={0} cellSpacing={0}>
                <tr>
                  <td style={{ paddingRight: 12 }}>
                    <a href="https://wa.me/2348124604571" style={{ textDecoration: "none" }}>
                      {/* WhatsApp icon */}
                      <img
                        src="https://cdn.simpleicons.org/whatsapp/11120f"
                        alt="WhatsApp"
                        width="20"
                        height="20"
                        style={{ display: "block" }}
                      />
                    </a>
                  </td>
                  <td style={{ paddingRight: 12 }}>
                    <a href="https://linkedin.com/in/muiz-adesope/" style={{ textDecoration: "none" }}>
                      <img
                        src="https://cdn.simpleicons.org/linkedin/11120f"
                        alt="LinkedIn"
                        width="20"
                        height="20"
                        style={{ display: "block" }}
                      />
                    </a>
                  </td>
                  <td style={{ paddingRight: 12 }}>
                    <a href="https://github.com/Muiz-Dev" style={{ textDecoration: "none" }}>
                      <img
                        src="https://cdn.simpleicons.org/github/11120f"
                        alt="GitHub"
                        width="20"
                        height="20"
                        style={{ display: "block" }}
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 24, marginTop: 24 }}>
              <p style={{ margin: "24px 0 0", fontSize: 11, color: "#8b837b", lineHeight: 1.6 }}>
                This email was sent by Muiz Dev Solutions. {reason || "You are receiving this because you submitted a review at solutions.muizdev.xyz."}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  );
}
