import type { Metadata } from "next";
import { withBasePath } from "./paths";
import { siteConfig } from "./site";

const titleDefault = `${siteConfig.name} | ${siteConfig.tagline}`;
const ogImageAlt = `${siteConfig.name} — ${siteConfig.tagline}`;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titleDefault,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: titleDefault,
    description: siteConfig.description,
    images: [
      {
        url: withBasePath(siteConfig.ogImage),
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: siteConfig.description,
    images: [withBasePath(siteConfig.ogImage)],
    ...(siteConfig.twitterHandle
      ? { creator: siteConfig.twitterHandle, site: siteConfig.twitterHandle }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: withBasePath("/PixelFactoryLogo.svg"),
    shortcut: withBasePath("/PixelFactoryLogo.svg"),
    apple: withBasePath("/PixelFactoryLogo.svg"),
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};
