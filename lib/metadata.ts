import { siteConfig } from "./site";

const titleDefault = `${siteConfig.name} | ${siteConfig.tagline}`;
const ogImageAlt = `${siteConfig.name} — ${siteConfig.tagline}`;

export const pageMeta = {
  title: titleDefault,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  canonical: siteConfig.url,
  og: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: titleDefault,
    description: siteConfig.description,
    image: new URL(siteConfig.ogImage, siteConfig.url).href,
    imageAlt: ogImageAlt,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: siteConfig.description,
    image: new URL(siteConfig.ogImage, siteConfig.url).href,
  },
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION,
} as const;
