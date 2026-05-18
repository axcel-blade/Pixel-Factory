import type { NextConfig } from "next";

function getBasePath(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!siteUrl) {
    return process.env.GITHUB_ACTIONS === "true" ? "/Pixel-Factory" : "";
  }
  try {
    const url = new URL(
      /^https?:\/\//i.test(siteUrl) ? siteUrl : `https://${siteUrl}`,
    );
    return url.pathname.replace(/\/$/, "") || "";
  } catch {
    return "";
  }
}

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
