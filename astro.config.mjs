// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site =
  process.env.PUBLIC_SITE_URL?.trim() || "https://www.pixelfactorylk.com";

export default defineConfig({
  site: site.startsWith("http") ? site : `https://${site}`,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
