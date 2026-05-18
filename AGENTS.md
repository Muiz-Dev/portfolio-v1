# AGENTS.md

This file is the working guide for agents contributing to this project.
Read it before making design, copy, layout, animation, or implementation decisions.

The rules here are intentionally general. They apply to websites, portfolios, landing pages, dashboards, product interfaces, service pages, and small apps.

## Core Principle

Design from the real problem, not from the component library.

Do not begin with a generic block list:

- Hero
- Features
- Cards
- Pricing
- FAQ
- CTA

Begin with the actual situation:

- What is being sold, shown, or solved?
- Who is the user or visitor?
- What doubt do they have?
- What proof would make them trust this?
- What action should they take?
- What fear, delay, or confusion must the interface remove?
- What information would a real person need before deciding?

Specificity is the cure for AI-template design.

## Anti-AI Design Doctrine

AI-generated design usually looks generated because it uses average patterns.
The patterns are not always wrong. They are just too predictable.

Avoid predictable design logic.

Do not use:

- Centered hero with a badge, huge headline, muted paragraph, and two buttons
- Generic SaaS order: hero, logo cloud, features, testimonials, pricing, FAQ, final CTA
- Equal 3-card or 6-card feature grids as the main structure
- Repeated icon-title-paragraph cards
- Purple-blue gradients as the default premium look
- Glowing orbs, blurred blobs, glassmorphism, neon edge glow, or decorative bokeh
- Generic dashboard layouts with sidebar, topbar, search, avatar, metric cards, chart, activity feed, and table
- Generic nav labels when domain-specific labels would be clearer
- Fake testimonials
- SaaS-style pricing when the offer is a service, project, or custom engagement
- Over-clean white/gray UI with a blue or purple CTA
- The same section rhythm repeated down the whole page
- Over-rounded components everywhere
- Lucide icons by default
- Geist fonts by default
- shadcn-looking surfaces by default

The goal is not to reject every common pattern.
The goal is to avoid average, automatic decisions.

## Preferred Direction

Use a Human-First Digital System.

Prefer:

- Asymmetric layouts
- Content-first sections
- Proof before feature lists
- Problem-first messaging
- Objection-handling sections
- Mixed card sizes
- Domain-specific navigation
- Real process language
- Clear outcomes
- Strong typography contrast
- Fewer but better icons
- Real examples, screenshots, labels, numbers, timelines, and proof
- Warm, intentional color temperature
- One or two signature visual components

Better general page flow:

- Strong opening statement
- Proof or credibility
- Problem story
- Offer or core experience
- Visual explanation
- Real use cases
- Objections or constraints
- Clear next step

This is a better default than generic SaaS order, but still adapt it to the actual product, person, service, or app.

## Copywriting Rules

The copy should sound like a real person explaining a real thing to another real person.

Avoid vague AI phrases:

- Unlock your potential
- Streamline your workflow
- Seamless experience
- Powerful solutions
- Transform your business
- Elevate your brand
- Innovative digital solutions
- Take your business to the next level
- Empowering businesses
- Loved by teams worldwide
- Built for modern teams
- Everything you need to succeed

Prefer direct, specific copy:

- Your website should not make customers doubt your business.
- When someone fills the form, their request should land somewhere useful.
- See the budget, timeline, contact details, and next step before you reply.
- A page that explains the offer clearly will beat a pretty page that says nothing.

Good copy answers real doubts:

- What is this?
- Who is it for?
- What problem does it remove?
- What happens next?
- What does it cost or require?
- What if I am not ready yet?
- What if I need changes later?
- Why should I trust this?

## Typography

Use font contrast. Do not use one clean sans font for everything.

Current font system:

- Big hero title: Bricolage Grotesque
- Headings: Bricolage Grotesque
- Body text: IBM Plex Sans
- Numbers, stats, years, code: IBM Plex Mono
- Icons: Hugeicons

Implementation:

- Fonts are loaded in `src/app/layout.tsx` with `next/font/google`.
- Global CSS variables live on the `html` element.
- `src/app/globals.css` should use:
  - `var(--font-heading)`
  - `var(--font-body)`
  - `var(--font-mono)`

Do not add generic font fallback chains unless explicitly requested.

Use mono type for:

- Years
- Stats
- Counters
- IDs
- Code
- Technical labels
- Small proof numbers

## Icons

Use Hugeicons.

Installed packages:

- `@hugeicons/react`
- `@hugeicons/core-free-icons`

Use icons lightly.

Do not use icons to fill weak content.
Prefer numbers, labels, screenshots, diagrams, proof, or strong typography when those communicate better.

Global icon utility:

```css
.icon {
  width: 1em;
  height: 1em;
  color: currentColor;
  flex-shrink: 0;
}
```

## Motion And Interaction

Treat motion like a design system, not decoration.

The project uses motion packages, not machine learning packages.

Installed motion packages:

- `motion`
- `gsap`
- `@gsap/react`
- `lottie-react`
- `@formkit/auto-animate`

Use motion to clarify, guide, or add identity.
Do not use motion to hide generic layout.

### Package Ownership

Use one owner per animation.

- Component-level animation: `motion`
- Timeline, scroll, creative, hero, SVG, text reveal, or portfolio animation: `gsap` / `@gsap/react`
- Auto layout changes, list changes, accordion changes, form fields, and reorder transitions: `@formkit/auto-animate`
- Illustration-style animation from JSON: `lottie-react`

Do not animate the same element with multiple libraries.

Do not do this:

- `motion` animates a hero while `gsap` also animates the same hero
- Auto Animate wraps the same cards that are manually animated by Motion
- Lottie is used as decoration in every section
- Every package is imported because it can animate

### Motion

Use `motion` for normal React UI:

- Modals
- Dropdowns
- Menus
- Page transitions
- Cards appearing
- Tabs switching
- Button tap effects
- Dashboard panels
- Layout animation

Import from:

```ts
import { motion } from "motion/react";
```

Avoid making Motion look like a template.

The overused pattern is:

```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
```

That is acceptable once in a while, but not as the default for every section.

### GSAP

Use `gsap` and `@gsap/react` for special moments:

- Hero text reveal
- Scroll-based sequences
- SVG path drawing
- Image mask reveal
- Logo animation
- Complex timelines
- Portfolio interactions
- Text reveals by word, line, or block

GSAP should create memorable moments, not decorate everything.

Use `useGSAP()` so React cleanup is handled correctly.

### Auto Animate

Use `@formkit/auto-animate` for boring layout changes that should feel smooth:

- FAQ opens and closes
- Form fields appear
- Cart items update
- Todo or project lists change
- Dashboard rows reorder
- Notification lists update

Do not use Auto Animate for hero animation, brand moments, or complex choreography.

### Lottie

Use `lottie-react` only when there is a good animation JSON file.

Good use cases:

- Success state
- Empty state
- Loading state
- Onboarding illustration
- Small product illustration

Be careful with free Lottie animations. Generic rockets, floating people, and common empty-state animations can create the same template smell as generic cards.

Lottie is optional. The cleanest default combo is:

- `motion`
- `gsap`
- `@formkit/auto-animate`

### Motion Smells

Avoid:

- Every section fades up
- Every card scales on hover
- Everything has the same duration
- All animations trigger on scroll
- All cards stagger from left to right
- All buttons bounce
- Hero text fades in like a template
- Motion is added just because the page feels empty

AI-generated motion often looks like fade up, slide up, hover scale, repeated forever.

Motion rules:

- Animate fewer things
- Make entrance motion directional
- Match motion direction to layout direction
- Reveal by importance, not by DOM order only
- Use masks, line wipes, clip reveals, or text block reveals for special moments
- Make motion functional: show what changed, where it came from, or what happens next
- Use scroll animation only where it adds meaning
- Use layout animation for app state changes
- Keep hover motion small and fast
- Respect reduced-motion settings
- Avoid every section fading up in the same way
- Avoid scroll-jacking
- Avoid decorative motion that competes with content
- Use different interaction rhythms for different UI moments

Default timing guidance:

- Small hover/tap feedback: `0.18s` to `0.25s`
- Normal UI enter/exit: `0.3s` to `0.55s`
- Hero or signature reveal: `0.6s` to `1s`
- Stagger delays should be subtle

Good motion feels intentional, confident, and useful.
Random motion feels like a template trying to look alive.

## Layout Rules

Human design usually has hierarchy.
AI design often has symmetry.

Prefer intentional unevenness:

- One large card plus two smaller supporting cards
- A wide process card under compact cards
- Editorial split layouts
- Full-width proof strips
- Quote blocks
- Timelines
- Case-study rows
- Compact CTA bands
- Side notes
- Comparison blocks
- Before/after blocks

Avoid making every section:

- Section label
- Big centered heading
- Muted paragraph
- Grid

Change rhythm between sections.

## Color Direction

Avoid default white/gray/blue SaaS styling.

Good directions:

- Warm white
- Cream
- Charcoal
- Off-black
- Deep green
- Ink blue
- Clay
- Sand
- One sharp accent such as lime, coral, amber, cyan, or red
- Subtle texture or pattern when useful

Do not use purple-blue gradients, glowing blobs, or glassmorphism unless the brand specifically calls for it.

## Shape Rules

Avoid giving every component the same large radius.

Use shape contrast:

- Buttons can be pill-shaped
- Cards can be restrained
- Inputs should be practical and calm
- Badges can be compact with small radius
- Images can be sharp or use a distinctive mask
- Modals can be softer than cards

The interface should feel designed, not auto-rounded.

## Websites And Landing Pages

Avoid generic page structure.

Do not default to:

- Home
- About
- Services
- Testimonials
- Contact

Use labels that match the domain:

- What We Fix
- What You Get
- Work
- Process
- Proof
- Pricing Direction
- Start Project
- Use Cases
- Launch Plan
- Compare
- Results

For service pricing, avoid generic SaaS tiers:

- Basic
- Pro
- Enterprise

Prefer service-aware packaging:

- Starter
- Business
- Custom
- Maintenance
- Audit
- Launch Support

Include:

- Who it is for
- What is included
- Timeline
- Payment structure
- Next step

## Muiz Dev Solutions Website Direction

For this project specifically, the website must sell trust, not only coding ability.

Core positioning:

- Muiz Dev Solutions helps businesses, NGOs, schools, startups, and service providers build professional websites, branded emails, and digital systems that improve trust, visibility, and customer communication.

Sharper homepage message:

- Websites, branded emails, and digital solutions for businesses that want to look serious online.

The visitor should feel:

- This person understands business.
- This person can help me look professional.
- This person can handle website, domain, email, and technical setup.
- This person is reachable.
- This person is serious.

Recommended first-launch sitemap:

- `/`
- `/services`
- `/projects`
- `/about`
- `/blog`
- `/testimonials`
- `/contact`

Future expansion:

- `/services/website-development`
- `/services/business-email-setup`
- `/services/domain-hosting`
- `/services/seo-optimization`
- `/services/website-maintenance`
- `/services/custom-web-applications`
- `/projects/gp-smith-accountax`
- `/projects/hbsi-nigeria`
- `/projects/mcben-leo-cares`
- `/projects/loveview-estates`

Detailed content and visual planning lives in:

- `docs/content-system.md`
- `docs/visual-asset-system.md`
- `docs/research-notes.md`

## Portfolios And Case Studies

Avoid generic 3-column project grids.

Prefer case-study blocks with:

- Client or project type
- Problem
- What was built
- Result
- Stack
- Timeline
- Constraints
- A specific lesson or decision

If real results are not available, use honest project context instead of fake metrics.

## Product And Dashboard UI

If building an app/dashboard, design around the actual workflow.

Avoid generic navigation:

- Overview
- Analytics
- Settings
- Billing

Prefer domain-specific navigation:

- Leads
- Clients
- Projects
- Invoices
- Requests
- Launch Checklist
- Messages
- Support Tickets
- Waiting for Client
- Drafts
- Reviews
- Shipments
- Orders
- Claims
- Incidents
- Reports

Empty states should teach the user what will happen.

Bad:

- No data yet.
- Create your first item.

Better:

- No requests yet. When someone submits the form, their budget, timeline, contact details, and message will appear here.

## Signature Component Rule

Create one or two recognizable UI elements for a project instead of making every element decorative.

Possible signature components:

- Slanted section label
- Accent-line card
- Project status pill
- Custom quote block
- Boxed process number
- Proof strip with mono numbers
- Sharp image frame
- Compact comparison row
- Timeline notch

Use these consistently and sparingly.

## Frontend Implementation Rules

Keep the app clean and intentional.

- Do not bring back default Next.js starter UI.
- Do not add decorative assets without purpose.
- Do not add a design system dependency unless it solves a real problem.
- Do not make a landing-page-looking shell when the user asked for an actual usable interface.
- Use semantic HTML.
- Keep CSS readable and direct.
- Prefer global design tokens for repeated visual decisions.
- Keep components small enough to understand.
- Avoid unnecessary abstraction early.
- Make responsive behavior intentional, not accidental.
- Make text fit on mobile and desktop.
- Do not let buttons, cards, or labels resize awkwardly on hover.
- Use stable dimensions for grids, boards, counters, and fixed-format UI.

## Current App Structure

Main files:

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

Current page state:

- `src/app/page.tsx` is intentionally plain.
- Default Next.js starter assets and styles have been removed.

## Package Notes

Installed dependencies currently include:

- `next`
- `react`
- `react-dom`
- `@hugeicons/react`
- `@hugeicons/core-free-icons`
- `motion`
- `gsap`
- `@gsap/react`
- `lottie-react`
- `@formkit/auto-animate`

Dev tooling currently includes:

- `typescript`
- `eslint`
- `eslint-config-next`
- React and Node type packages

Use existing packages before adding new ones.

## Verification Rules

Do not run production build commands unless the user explicitly asks.

Do not run:

- `npm run build`
- `next build`

It is okay to run quick checks when useful:

- `npm run lint`
- targeted TypeScript or formatting checks if configured
- file searches and package inspection commands

When a production build would be useful, tell the user to run it themselves.

## Git And Workspace Rules

The working tree may contain user changes.

- Do not revert changes you did not make.
- Do not use destructive git commands.
- Do not delete files unless the task clearly requires it.
- If a file is already modified, read it before editing.
- Keep changes scoped to the user request.

## Next.js Version Warning

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
