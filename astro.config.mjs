// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Domi Health Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/RadikeCosa/domi-health-docs.git",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "introduction", slug: "guides/example" },
          ],
        },
        {
          label: "User Guides",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
