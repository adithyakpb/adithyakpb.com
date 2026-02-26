# CLAUDE.md — adithyakpb.com

## Project Overview

Personal portfolio site for Adithya KP at `adithyakpb.com`. Optimized for job applications. Built with **Astro 5 (SSG) + Tailwind CSS v4**, deployed on Cloudflare Pages. $0 budget.

Live at: https://adithyakpb.com

## Tech Stack

- **Astro v5** (static output)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no config file)
- **Fonts:** Inter + JetBrains Mono via `@fontsource`
- **TimelineJS** (iframe embed, Google Sheets data source)
- **github-readme-stats** + **ghchart** (image embeds, zero JS)
- **rss-parser** (fetches blog posts at build time)
- **Formspree** (contact form, free tier)

## Commands

```bash
npm run dev        # Local dev server (port 4321)
npm run build      # Production build (output: dist/)
npm run preview    # Preview production build locally
```

## Architecture

Single-page portfolio with anchor-linked sections:
- Hero (#about) — intro, CTA buttons, photo
- Skills (#skills) — grouped skill chips
- Featured Work (#work) — project cards with metrics
- Timeline (#timeline) — TimelineJS iframe (Google Sheets backend)
- Speaking (#speaking) — conference talks and workshops
- GitHub Activity (#github) — stats images, contribution chart
- Blog Feed (#blog) — 3 recent posts from signalandnoise.blog RSS
- Contact (#contact) — Formspree form in footer

## Design

- **Light professional theme**: white bg, blue accent (`#1e40af`), gray text hierarchy
- **Typography**: Inter (body), JetBrains Mono (tech tags/code)
- **Responsive**: mobile-first, single column → multi-column at md/lg
- **Animations**: CSS scroll-reveal (Intersection Observer), hover lifts on cards

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`:
1. Checkout → Node 22 → npm ci → npm build
2. Astro fetches blog RSS at build time
3. Static `dist/` deployed to Cloudflare Pages (project: `adithyakpb-portfolio`)

**GitHub Secrets:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

## Key Files

- `src/data/projects.ts` — project data (edit to add/update projects)
- `src/data/skills.ts` — skills grouped by category
- `src/data/speaking.ts` — speaking events
- `src/data/timeline.ts` — Google Sheets ID for TimelineJS
- `src/lib/constants.ts` — site config, social links
- `src/lib/rss.ts` — RSS fetcher for blog posts

## DNS (TODO)

- Add `adithyakpb.com` zone to Cloudflare
- Change nameservers at Hostinger to Cloudflare NS
- Add custom domain in Cloudflare Pages
- Recreate `blog.adithyakpb.com` CNAME → `signalandnoise.pages.dev`

## Tech Gotchas

- Tailwind v4: uses `@tailwindcss/vite` plugin, NOT `@astrojs/tailwind`. No tailwind.config needed.
- `@fontsource` packages: import CSS in layout frontmatter, not via `@font-face`
- rss-parser: wraps fetch in try/catch so build doesn't fail if blog RSS is down
- TimelineJS: set Google Sheet ID in `src/data/timeline.ts` after creating the sheet
- Formspree: free tier endpoint at `https://formspree.io/f/xpwdjqzb`
