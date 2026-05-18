# Pixel Factory — Website

Official marketing site for **Pixel Factory**, an independent Sri Lanka–based digital content studio. The site presents services, portfolio work, client highlights, team information, and a contact form on a single scrolling page.

**Stack:** [Astro](https://astro.build) 5, React 19 (islands), TypeScript, Tailwind CSS v4.

**Live site:** Set `PUBLIC_SITE_URL` in `.env` (see [SEO](#seo)) to match your deployed domain (e.g. `https://www.pixelfactorylk.com`).

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

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Development server             |
| `npm run build`   | Production build (`dist/`)   |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Run ESLint                     |

## SEO

Metadata, Open Graph, Twitter cards, and JSON-LD are configured in `lib/site.ts` and `lib/metadata.ts`.

| File / route | Purpose |
|--------------|---------|
| `@astrojs/sitemap` | `/sitemap-index.xml` for crawlers |
| `public/robots.txt` | Crawler rules + sitemap link |
| `public/manifest.webmanifest` | Web app manifest |
| `src/components/JsonLd.astro` | Organization + WebSite structured data |

Set your production URL (and optional Google Search Console verification) in `.env`:

```bash
cp .env.example .env
# PUBLIC_SITE_URL=https://www.pixelfactorylk.com
```

For best social previews, add a **1200×630** image at `public/og-image.png` and set `ogImage` in `lib/site.ts`.

## Project layout

| Path | Role |
|------|------|
| `src/pages/index.astro` | Home page entry |
| `src/components/HomePage.astro` | All page sections |
| `src/components/` | `Section`, `NavBar`, `ImageScroll`, `InstagramFeed`, `JsonLd` |
| `src/layouts/Layout.astro` | HTML shell, fonts, meta tags |
| `lib/site.ts` | Site name, URL, contact, SEO keywords |
| `lib/metadata.ts` | Page meta (Open Graph, Twitter) |
| `public/` | Static assets (logo, video, service icons, client logos) |

## Assets

Place static files (images, video, icons) in `public/`. The hero expects `/PixelFactory.webm` and section images at paths referenced in `src/components/HomePage.astro`.

## CI / CD

GitHub Actions workflows in `.github/workflows/`:

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push / PR to `main` or `updates` | `npm ci`, lint, build |
| `cd.yml` | Push to `main` | Build and deploy to **GitHub Pages** |

### GitHub Pages setup

1. Repo **Settings → Pages → Build and deployment**: source **GitHub Actions**.
2. Optional: **Settings → Secrets and variables → Actions → Variables** — set `PUBLIC_SITE_URL` to your live URL for production builds.
3. After the first `cd.yml` run on `main`, the site is served from the `github-pages` environment URL (or your custom domain).

Before pushing, verify locally: `npm run build`.

You can also deploy the `dist/` folder to [Vercel](https://vercel.com), Netlify, or any static host.
