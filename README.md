# Pixel Factory — Website

Official marketing site for **Pixel Factory**, an independent Sri Lanka–based digital content studio. The site presents services, portfolio work, client highlights, team information, and a contact form on a single scrolling page.

**Stack:** [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

**Live site:** [https://axcel-blade.github.io/Pixel-Factory/](https://axcel-blade.github.io/Pixel-Factory/) (GitHub Pages). Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for local builds (see [SEO](#seo)).

## Site structure

Single-page layout with anchored sections:

| Section        | ID             | Notes                                      |
|----------------|----------------|--------------------------------------------|
| Hero           | `#home`        | Background video, welcome graphic          |
| Services       | `#services`    | Responsive 1–3 column service icon grid    |
| Work           | `#work`        | Elfsight Instagram embed                   |
| Our Clients    | `#ourclients`  | Logo carousel + project stats              |
| Testimonials   | `#testimonials`| Client review images                       |
| Who We Are     | `#whoweare`    | Team / company copy                        |
| Contact        | `#contactus`   | Address, phone, email, contact form        |

Shared layout uses a centered `max-w-7xl` container, consistent horizontal padding (`px-4` → `lg:px-8`), and responsive typography so content stays aligned on mobile and desktop.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Development server       |
| `npm run build`| Production build (`out/` for static export) |
| `npm run start`| Serve production build   |
| `npm run lint` | Run ESLint               |

## SEO

Metadata, Open Graph, Twitter cards, and JSON-LD are configured in `lib/site.ts` and `lib/metadata.ts`.

| Route / file | Purpose |
|--------------|---------|
| `app/sitemap.ts` | `/sitemap.xml` for crawlers |
| `app/robots.ts` | `/robots.txt` with sitemap link |
| `app/manifest.ts` | Web app manifest (`/manifest.webmanifest`) |
| `app/components/JsonLd.tsx` | Organization + WebSite structured data |

Set your production URL (and optional Google Search Console verification) in `.env`:

```bash
cp .env.example .env.local
# NEXT_PUBLIC_SITE_URL=https://www.pixelfactorylk.com
```

For best social previews, add a **1200×630** image at `public/og-image.png` and set `ogImage` in `lib/site.ts`.

## Project layout

| Path | Role |
|------|------|
| `app/page.tsx` | Entry: nav + home page |
| `app/pages/HomePage.tsx` | All page sections (hero, services, work, etc.) |
| `app/components/` | `Section`, `NavBar`, `ImageScroll`, `InstagramFeed`, `JsonLd` |
| `lib/site.ts` | Site name, URL, contact, SEO keywords |
| `lib/metadata.ts` | Next.js metadata (Open Graph, Twitter, robots) |
| `public/` | Static assets (logo, video, service icons, client logos) |

## Assets

Place static files (images, video, icons) in `public/`. The hero expects `/PixelFactory.webm` and section images at paths referenced in `app/pages/HomePage.tsx`.

## Deploy (GitHub Pages only)

This site is published **only** via GitHub Pages. There is no Vercel (or other host) configuration in this repo.

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push / PR to `main` or `updates` | `npm ci`, lint, build |
| `cd.yml` | Push to `main` | Static export → deploy `out/` to GitHub Pages |

### Setup

1. **Settings → Pages → Build and deployment**: source **GitHub Actions**.
2. Push to **`main`** — `cd.yml` runs `next build` and deploys `out/`.
3. Site URL: `https://axcel-blade.github.io/Pixel-Factory/`.
4. **Custom domain** (optional): add the domain under **Settings → Pages**, then set repo variable `NEXT_PUBLIC_SITE_URL` to `https://www.pixelfactorylk.com`.

### Disconnect Vercel (if previously linked)

If the repo was connected to Vercel, remove it so only GitHub Pages deploys:

1. [Vercel dashboard](https://vercel.com/dashboard) → project → **Settings** → delete or disconnect the GitHub repo, **or**
2. GitHub **Settings → Integrations → Applications** → **Vercel** → configure → remove access to this repository.

### Local preview (matches GitHub Pages)

```bash
set NEXT_PUBLIC_SITE_URL=https://axcel-blade.github.io/Pixel-Factory
set GITHUB_ACTIONS=true
npm run build
npx serve out
```

Before pushing to `main`, verify: `npm run build`.
