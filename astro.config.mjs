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
      defaultLocale: "root",
      locales: {
        // Español como idioma raíz (sin prefijo en la URL)
        root: {
          label: "Español",
          lang: "es",
        },
        // Inglés con prefijo /en/
        en: {
          label: "English",
          lang: "en",
        },
      },
      // Habilitar selector de tema claro/oscuro
      customCss: [
        // Opcional: agregar estilos personalizados
        "./src/styles/custom.css",
      ],
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
            { label: "Introduction", slug: "introduction/introduction" },
          ],
        },
        {
          label: "Project Overview",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Overview", slug: "overview/project-overview" },
          ],
        },
      ],
    }),
  ],
});
