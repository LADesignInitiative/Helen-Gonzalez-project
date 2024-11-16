import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap(), robotsTxt(), icon(), mdx()],
  output: "server",
  adapter: netlify()
});