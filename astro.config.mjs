import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { fileURLToPath, URL } from "url";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), UnoCSS()],
  vite: {
    resolve: {
      alias: {
        "@/fonts": fileURLToPath(new URL(`src/fonts`, import.meta.url)),
      },
    },
  },
});
