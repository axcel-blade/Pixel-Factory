# Pixel Factory — Website

Official marketing site for **Pixel Factory**, an independent Sri Lanka–based digital content studio. The site presents services, portfolio work, client highlights, team information, and a contact form on a single scrolling page.

**Stack:** [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

**Live site:** Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (see [SEO](#seo)) to match your deployed domain (e.g. `https://www.pixelfactorylk.com`).

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
| `npm run build`| Production build         |
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

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main` / `master`:

- `npm ci`
- `npm run lint`
- `npm run build`

## Deploy

Deploy with [Vercel](https://vercel.com/new) (connect the GitHub repo for automatic deploys) or any host that supports Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
