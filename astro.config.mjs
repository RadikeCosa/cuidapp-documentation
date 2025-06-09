// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: "CuidApp Documentation",
      description: "Documentation for the CuidApp project.",
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
          label: "Implementation Walkthrough",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Initial Setup", slug: "walkthrough/initial-setup" },
          ],
        },
      ],
    }),
  ],
});
