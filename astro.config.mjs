
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rechnero.de",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
