import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src", "app");
const brandDir = path.join(publicDir, "brand");
const iconDir = path.join(brandDir, "icons");

const sources = {
  fullLogo: path.join(publicDir, "muiz_full_logo_transparent.png"),
  fullLogoWhite: path.join(publicDir, "muiz_full_logo_white_only_transparent.png"),
  fullLogoBlack: path.join(publicDir, "muiz_full_logo_black_only_transparent.png"),
  wordmark: path.join(publicDir, "muiz_wordmark_only_transparent.png"),
  square: path.join(publicDir, "muiz_square_transparent.png"),
  squareDark: path.join(publicDir, "muiz_square_white_on_dark.png"),
  faviconMark: path.join(publicDir, "muiz_m_favicon_transparent_512.png"),
  faviconMarkDark: path.join(publicDir, "muiz_m_favicon_white_on_dark_512.png"),
  text: path.join(publicDir, "muiz_dev_solutions_text_transparent.png")
};

const colors = {
  ink: "#09090b",
  paper: "#f7f3ea",
  white: "#ffffff",
  muted: "#a7a29a",
  accent: "#4b37ff",
  accentSoft: "#d9d4ff"
};

const pngOptions = {
  compressionLevel: 9,
  adaptiveFiltering: true
};

async function ensureDirectories() {
  await mkdir(brandDir, { recursive: true });
  await mkdir(iconDir, { recursive: true });
  await mkdir(appDir, { recursive: true });
}

async function resizeBuffer(input, width, height, fit = "inside") {
  return sharp(input)
    .resize({
      width,
      height,
      fit,
      position: "centre",
      withoutEnlargement: false
    })
    .png(pngOptions)
    .toBuffer();
}

async function writePng(input, outputPath, width, height, fit = "inside") {
  await sharp(input)
    .resize({
      width,
      height,
      fit,
      position: "centre",
      withoutEnlargement: false
    })
    .png(pngOptions)
    .toFile(outputPath);
}

async function writeWebp(input, outputPath, width, height, fit = "inside") {
  await sharp(input)
    .resize({
      width,
      height,
      fit,
      position: "centre",
      withoutEnlargement: false
    })
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(outputPath);
}

async function writeSquareIcon(input, outputPath, size, options = {}) {
  const paddingRatio = options.paddingRatio ?? 0.16;
  const background = options.background ?? colors.white;
  const innerSize = Math.round(size * (1 - paddingRatio * 2));
  const resized = await resizeBuffer(input, innerSize, innerSize, "inside");

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background
    }
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png(pngOptions)
    .toFile(outputPath);
}

async function writeIco(outputPath, iconPaths) {
  const images = await Promise.all(
    iconPaths.map(async ({ size, file }) => ({
      size,
      data: await readFile(file)
    }))
  );
  const headerSize = 6;
  const entrySize = 16;
  const directorySize = headerSize + images.length * entrySize;
  const header = Buffer.alloc(directorySize);
  let imageOffset = directorySize;

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  images.forEach(({ size, data }, index) => {
    const offset = headerSize + index * entrySize;
    const dimension = size >= 256 ? 0 : size;

    header.writeUInt8(dimension, offset);
    header.writeUInt8(dimension, offset + 1);
    header.writeUInt8(0, offset + 2);
    header.writeUInt8(0, offset + 3);
    header.writeUInt16LE(1, offset + 4);
    header.writeUInt16LE(32, offset + 6);
    header.writeUInt32LE(data.length, offset + 8);
    header.writeUInt32LE(imageOffset, offset + 12);

    imageOffset += data.length;
  });

  await writeFile(outputPath, Buffer.concat([header, ...images.map(({ data }) => data)]));
}

function ogBackgroundSvg() {
  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="${colors.ink}"/>
    <rect x="56" y="56" width="1088" height="518" fill="none" stroke="${colors.paper}" stroke-opacity="0.16" stroke-width="1"/>
    <rect x="72" y="72" width="12" height="486" fill="${colors.accent}"/>
    <path d="M782 72H1144V558H640L782 72Z" fill="${colors.paper}" fill-opacity="0.045"/>
    <path d="M730 558H1144" stroke="${colors.accent}" stroke-width="8"/>
    <text x="104" y="404" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" letter-spacing="5" fill="${colors.accentSoft}">
      PORTFOLIO / WEB SYSTEMS
    </text>
    <text x="104" y="466" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="${colors.muted}">
      Practical digital work with identity, speed, and structure.
    </text>
  </svg>`;
}

async function writeSocialImages() {
  const logo = await resizeBuffer(sources.fullLogoWhite, 760, 250, "inside");

  const ogPng = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: colors.ink
    }
  })
    .composite([
      { input: Buffer.from(ogBackgroundSvg()), left: 0, top: 0 },
      { input: logo, left: 104, top: 154 }
    ])
    .png(pngOptions)
    .toBuffer();

  await writeFile(path.join(brandDir, "og-image.png"), ogPng);
  await sharp(ogPng)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(brandDir, "og-image.jpg"));
  await sharp(ogPng)
    .webp({ quality: 90, effort: 6, smartSubsample: true })
    .toFile(path.join(brandDir, "og-image.webp"));

  await writeFile(path.join(appDir, "opengraph-image.png"), ogPng);
  await writeFile(path.join(appDir, "twitter-image.png"), ogPng);
  await writeFile(
    path.join(appDir, "opengraph-image.alt.txt"),
    "Muiz Dev Solutions portfolio and web systems preview."
  );
  await writeFile(
    path.join(appDir, "twitter-image.alt.txt"),
    "Muiz Dev Solutions portfolio and web systems preview."
  );
}

async function main() {
  await ensureDirectories();

  await writePng(sources.fullLogo, path.join(brandDir, "logo-full-960.png"), 960, 453);
  await writePng(sources.fullLogo, path.join(brandDir, "logo-full-480.png"), 480, 226);
  await writeWebp(sources.fullLogo, path.join(brandDir, "logo-full-960.webp"), 960, 453);
  await writeWebp(sources.fullLogoWhite, path.join(brandDir, "logo-full-white-960.webp"), 960, 453);
  await writeWebp(sources.fullLogoBlack, path.join(brandDir, "logo-full-black-960.webp"), 960, 453);

  await writePng(sources.wordmark, path.join(brandDir, "wordmark-720.png"), 720, 270);
  await writePng(sources.wordmark, path.join(brandDir, "wordmark-360.png"), 360, 135);
  await writeWebp(sources.wordmark, path.join(brandDir, "wordmark-720.webp"), 720, 270);

  await writePng(sources.text, path.join(brandDir, "descriptor-690.png"), 690, 183);
  await writePng(sources.text, path.join(brandDir, "descriptor-345.png"), 345, 92);

  await writePng(sources.square, path.join(brandDir, "square-1024.png"), 1024, 1024);
  await writePng(sources.square, path.join(brandDir, "square-512.png"), 512, 512);
  await writeWebp(sources.square, path.join(brandDir, "square-1024.webp"), 1024, 1024);
  await writeWebp(sources.squareDark, path.join(brandDir, "square-dark-1024.webp"), 1024, 1024);

  for (const size of [16, 32, 48, 96, 180, 192, 384, 512, 1024]) {
    await writeSquareIcon(
      sources.faviconMark,
      path.join(iconDir, `icon-${size}.png`),
      size,
      {
        paddingRatio: size <= 48 ? 0.1 : 0.16,
        background: colors.white
      }
    );
  }

  await writeSquareIcon(
    sources.faviconMark,
    path.join(iconDir, "icon-512-maskable.png"),
    512,
    {
      paddingRatio: 0.24,
      background: colors.white
    }
  );
  await writeSquareIcon(
    sources.faviconMarkDark,
    path.join(iconDir, "icon-512-dark.png"),
    512,
    {
      paddingRatio: 0,
      background: colors.ink
    }
  );

  await writeSquareIcon(sources.faviconMark, path.join(appDir, "icon.png"), 512, {
    paddingRatio: 0.16,
    background: colors.white
  });
  await writeSquareIcon(sources.faviconMark, path.join(appDir, "apple-icon.png"), 180, {
    paddingRatio: 0.14,
    background: colors.white
  });

  const faviconSources = [16, 32, 48].map((size) => ({
    size,
    file: path.join(iconDir, `icon-${size}.png`)
  }));
  await writeIco(path.join(appDir, "favicon.ico"), faviconSources);
  await writeIco(path.join(publicDir, "favicon.ico"), faviconSources);

  await writeSocialImages();

  await writeFile(
    path.join(publicDir, "site.webmanifest"),
    JSON.stringify(
      {
        name: "Muiz Dev Solutions",
        short_name: "Muiz",
        icons: [
          {
            src: "/brand/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/brand/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/brand/icons/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        theme_color: colors.ink,
        background_color: colors.paper,
        display: "standalone"
      },
      null,
      2
    )
  );

  await writeFile(
    path.join(brandDir, "asset-manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        sourceFiles: Object.fromEntries(
          Object.entries(sources).map(([key, value]) => [
            key,
            path.relative(root, value)
          ])
        ),
        outputs: {
          logos: "/brand/",
          icons: "/brand/icons/",
          favicon: "src/app/favicon.ico",
          appIcon: "src/app/icon.png",
          appleIcon: "src/app/apple-icon.png",
          openGraph: "src/app/opengraph-image.png",
          twitter: "src/app/twitter-image.png",
          manifest: "public/site.webmanifest"
        }
      },
      null,
      2
    )
  );

  console.log("Brand assets generated in public/brand, public/favicon.ico, and src/app.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
