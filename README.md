# Pixel Factory

Marketing site for **Pixel Factory**, a Sri Lanka–based digital content studio offering 3D visualization, web design, video production, photography, and related creative services.

Built with [Next.js](https://nextjs.org) (App Router), React 19, TypeScript, and Tailwind CSS v4.

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

## Assets

Place static files (images, video, icons) in `public/`. The hero expects `/PixelFactory.webm` and section images at paths referenced in `app/pages/HomePage.tsx`.

## CI / CD

GitHub Actions workflows live in `.github/workflows/`:

| Workflow | File | When it runs |
|----------|------|----------------|
| **CI** | `ci.yml` | Every push and pull request to `main` / `master` — runs `npm ci`, `npm run lint`, and `npm run build` |
| **CD** | `cd.yml` | After CI succeeds on `main` / `master`, or manually via **Actions → CD → Run workflow** — deploys to Vercel production |

### Vercel secrets (required for CD)

In the GitHub repo, go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | [Vercel account token](https://vercel.com/account/settings/tokens) |
| `VERCEL_ORG_ID` | Team or user ID from Vercel project settings |
| `VERCEL_PROJECT_ID` | Project ID from Vercel project settings |

Link the repo to a Vercel project first, then run `vercel link` locally or copy IDs from the Vercel dashboard (**Project → Settings → General**).

Optional: configure a **production** [GitHub environment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment) named `production` for approval gates before deploy.

## Deploy

Production deploys are automated via the CD workflow to [Vercel](https://vercel.com/new). You can also deploy manually from the Vercel dashboard or CLI. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
