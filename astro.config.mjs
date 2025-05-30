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
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
