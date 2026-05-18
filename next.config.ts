import type { NextConfig } from "next";

const REPO_NAME = "Pixel-Factory";

function getBasePath(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!siteUrl) {
    return process.env.GITHUB_ACTIONS === "true" ? `/${REPO_NAME}` : "";
  }
  try {
    const url = new URL(
      /^https?:\/\//i.test(siteUrl) ? siteUrl : `https://${siteUrl}`,
    );
    const path = url.pathname.replace(/\/$/, "");
    // Custom domain (no path) → site is at root; github.io project URL → /RepoName
    if (!path && url.hostname.endsWith("github.io")) {
      return `/${REPO_NAME}`;
    }
    return path || "";
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
