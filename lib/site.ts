const DEFAULT_SITE_URL = "https://www.pixelfactorylk.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return new URL(withProtocol).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Pixel Factory",
  legalName: "Pixel Factory",
  tagline: "3D Visualization, Web Design & Video Production",
  description:
    "Pixel Factory is a Sri Lanka–based digital content studio specializing in 3D architectural visualization, product animation, web design, graphic design, video production, and photography.",
  url: resolveSiteUrl(),
  locale: "en_LK",
  email: "info@pixelfactorylk.com",
  phone: "+61-123-456-789",
  address: {
    street: "14 Duke St",
    locality: "Bentley",
    region: "WA",
    country: "AU",
  },
  keywords: [
    "Pixel Factory",
    "3D visualization Sri Lanka",
    "architectural visualization",
    "product animation",
    "web design Sri Lanka",
    "video production",
    "graphic design",
    "photography",
    "CGI studio",
    "digital content studio",
  ],
  ogImage: "/PixelFactoryLogo.svg",
  twitterHandle: undefined as string | undefined,
} as const;
