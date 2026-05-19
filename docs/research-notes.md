# Research Notes

These notes capture external guidance used for the website content and visual system.
Re-check licenses and docs before shipping public assets.

## Next.js Metadata

Source:

- https://nextjs.org/docs/app/api-reference/file-conventions/metadata
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images

Relevant notes:

- Next.js App Router supports file-based metadata.
- Special files include `favicon.ico`, `icon.png`, `apple-icon.png`, `opengraph-image.png`, and `twitter-image.png`.
- When metadata files are placed in route segments, Next can serve them and update relevant head elements.
- The static `metadata` object and `generateMetadata` are supported in Server Components.

Project implication:

- Keep generated favicon, app icon, Apple icon, Open Graph image, and Twitter image in `src/app`.
- Keep source and generated brand assets organized in `public/brand`.

## Google Search Guidance

Source:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Relevant notes:

- Page titles and prominent headings help search engines understand result titles.
- Meta descriptions can help users decide whether to click.
- Helpful, clear page content matters more than stuffing keywords.

Project implication:

- Every page should have a clear title, description, and human-readable purpose.
- Blog posts should answer real business questions.
- SEO copy must not overpromise rankings.

## unDraw License

Source:

- https://undraw.co/license

Relevant notes:

- unDraw states illustrations can be used for personal and commercial projects without attribution.
- The license has restrictions, including not redistributing illustration packs or using the assets to train AI models.

Project implication:

- unDraw is acceptable for commercial website illustrations, but avoid overused generic illustrations.
- Recolor and adapt consistently if used.

## LottieFiles License

Source:

- https://help.lottiefiles.com/hc/en-us/articles/900002438343-Can-I-use-a-free-animation-on-LottieFiles-for-commercial-business-use
- https://lottiefiles.com/page/license

Relevant notes:

- LottieFiles support says free public animations are covered under the Lottie Simple License and can be used for personal and commercial purposes.
- License terms still apply and should be reviewed for the specific asset.

Project implication:

- Lottie can be used for a contact success state or one carefully selected illustration.
- Do not use generic, overused free animations everywhere.

## Visual Source Guidance

Potential illustration sources:

- unDraw
- Storyset
- ManyPixels
- DrawKit
- GetIllustrations
- Blush

Potential photo sources:

- Unsplash
- Pexels
- Pixabay
- Kaboompics
- Burst by Shopify

Potential motion sources:

- LottieFiles
- Lordicon
- Rive Community
- SVGator exports

Project rule:

- Check the license for every downloaded visual before public use.
- Prefer custom UI mockups and real screenshots over generic stock images.

## 404 Illustration Asset

Source:

- https://scale.flexiple.com/illustrations/404-not-found-multi/
- Downloaded SVG stored at `public/illustrations/not-found-scale.svg`

Relevant notes:

- Scale/Flexiple states its illustrations are royalty-free for commercial use and do not require attribution.
- Their stated restriction is not to duplicate Scale, create a competitor product, or resell/repackage the illustrations themselves.

Project implication:

- The downloaded SVG can be used for the not-found page.
- Keep the page copy and layout custom so the page does not feel like a generic downloaded 404 template.

## Service Illustration Assets

Source:

- https://undraw.co/illustration/building-a-website_1wrp
- https://undraw.co/illustration/emails_085h
- https://undraw.co/illustration/setup-wizard_45kx
- https://undraw.co/illustration/code-deployed_iwvu
- https://undraw.co/illustration/mobile-app-data_2lfx

Downloaded SVG files:

- `public/illustrations/services/building-a-website.svg`
- `public/illustrations/services/emails.svg`
- `public/illustrations/services/setup-wizard.svg`
- `public/illustrations/services/code-deployed.svg`
- `public/illustrations/services/mobile-app-data.svg`

Relevant notes:

- unDraw says illustrations can be used in personal and commercial projects under its license.
- The default unDraw accent color was recolored from `#6c63ff` to the project accent `#4b37ff`.

Project implication:

- Use these as one consistent illustration family for the services section.
- Do not mix them with unrelated illustration styles in the same section.
