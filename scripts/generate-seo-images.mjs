import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public", "seo");
const logoPath = path.join(root, "public", "muiz_full_logo_transparent.png");

const cards = [
  {
    file: "home-og.png",
    label: "Websites / email / systems",
    title: "Make your business look serious online.",
    summary: "Websites, branded emails, domains, hosting, maintenance, and custom digital systems.",
    accent: "#4b37ff",
    titleMax: 24,
  },
  {
    file: "services-og.png",
    label: "Services",
    title: "Website development, business email, hosting, and support.",
    summary: "Clear digital setup for businesses, NGOs, schools, startups, and service providers.",
    accent: "#4b37ff",
    titleMax: 24,
  },
  {
    file: "projects-og.png",
    label: "Project proof",
    title: "Real websites and apps built to improve trust.",
    summary: "Business websites, NGO websites, real estate web presence, and mobile app work.",
    accent: "#4b37ff",
    titleMax: 24,
  },
  {
    file: "about-og.png",
    label: "About",
    title: "A practical digital studio for serious online presence.",
    summary: "Led by Muiz Adesope, focused on clear websites, branded email, and digital systems.",
    accent: "#4b37ff",
    titleMax: 24,
  },
  {
    file: "contact-og.png",
    label: "Start a project",
    title: "Tell us what you need built or fixed.",
    summary: "Send a project request for website, email, domain, maintenance, or custom app work.",
    accent: "#4b37ff",
    titleMax: 24,
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(value, max = 24, maxLines = 4) {
  const words = value.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines.slice(0, maxLines);
}

function panelTextLines(value) {
  return wrap(value, 56, 3);
}

function cardSvg(card) {
  const titleLines = wrap(card.title, card.titleMax, 3);
  const summaryLines = panelTextLines(card.summary);
  const statusItems = ["Website live", "Email ready", "Domain connected"];

  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#ffffff"/>
      <rect x="896" y="0" width="304" height="630" fill="#f2efff"/>
      <rect x="1168" y="0" width="32" height="630" fill="#4b37ff"/>
      <rect x="88" y="174" width="92" height="8" fill="${card.accent}"/>
      <text x="88" y="226" font-family="Menlo, Consolas, monospace" font-size="17" letter-spacing="1.4" fill="#4b37ff">${escapeXml(card.label.toUpperCase())}</text>
      ${titleLines.map((line, index) => `<text x="88" y="${304 + index * 54}" font-family="Arial Black, Arial, sans-serif" font-size="50" font-weight="900" fill="#050505">${escapeXml(line)}</text>`).join("")}
      ${summaryLines.map((line, index) => `<text x="88" y="${486 + index * 31}" font-family="Arial, sans-serif" font-size="23" fill="#4d4a46">${escapeXml(line)}</text>`).join("")}
      <rect x="936" y="184" width="190" height="92" fill="#ffffff"/>
      <text x="960" y="222" font-family="Menlo, Consolas, monospace" font-size="13" letter-spacing="1" fill="#4b37ff">PUBLIC SETUP</text>
      <text x="960" y="254" font-family="Arial Black, Arial, sans-serif" font-size="24" fill="#050505">Ready to share</text>
      ${statusItems.map((item, index) => `
        <rect x="936" y="${314 + index * 58}" width="190" height="40" fill="#ffffff"/>
        <rect x="960" y="${330 + index * 58}" width="10" height="10" fill="${index === 1 ? "#d9ff73" : "#4b37ff"}"/>
        <text x="986" y="${340 + index * 58}" font-family="Menlo, Consolas, monospace" font-size="13" fill="#050505">${escapeXml(item)}</text>
      `).join("")}
      <text x="88" y="584" font-family="Menlo, Consolas, monospace" font-size="15" letter-spacing="1" fill="#050505">WEBSITE DEVELOPMENT • BUSINESS EMAIL • DOMAIN SETUP • SUPPORT</text>
      <text x="936" y="584" font-family="Menlo, Consolas, monospace" font-size="14" fill="#4d4a46">info@muizdev.xyz</text>
    </svg>
  `;
}

await mkdir(outputDir, { recursive: true });

const logo = await sharp(logoPath).resize({ width: 235 }).toBuffer();

for (const card of cards) {
  const svg = Buffer.from(cardSvg(card));
  const output = await sharp(svg)
    .composite([{ input: logo, left: 84, top: 76 }])
    .png({ quality: 92, compressionLevel: 9 })
    .toBuffer();

  await writeFile(path.join(outputDir, card.file), output);

  if (card.file === "home-og.png") {
    await writeFile(path.join(root, "src", "app", "opengraph-image.png"), output);
    await writeFile(path.join(root, "src", "app", "twitter-image.png"), output);
    await writeFile(
      path.join(root, "src", "app", "opengraph-image.alt.txt"),
      "Muiz Dev Solutions social preview for websites, branded emails, domain setup, and digital systems."
    );
    await writeFile(
      path.join(root, "src", "app", "twitter-image.alt.txt"),
      "Muiz Dev Solutions social preview for websites, branded emails, domain setup, and digital systems."
    );
  }
}

console.log(`Generated ${cards.length} SEO images in ${path.relative(root, outputDir)}`);
