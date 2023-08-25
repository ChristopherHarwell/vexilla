import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

import toml from "astro-toml";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4321,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: true,
    }),
    markdoc(),
    toml(),
  ],
});