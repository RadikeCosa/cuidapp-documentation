// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: "Domi Health",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/RadikeCosa/domi-health-docs.git",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "introduction", slug: "introduction/introduction" },
          ],
        },
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Prerequisites", slug: "started/prerequisites" },
            { label: "Installation", slug: "started/installation" },
            { label: "Quick Start", slug: "started/quick-start" },
            { label: "Core Concepts", slug: "started/core-concepts" },
          ],
        },
      ],
    }),
  ],
});
