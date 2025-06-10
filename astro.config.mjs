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
      // Habilitar selector de tema
      expressiveCode: {
        themes: ["dark-plus", "light-plus"],
      },
      // Configuración del sidebar para ambos idiomas
      sidebar: [
        {
          label: "Introduction",
          translations: {
            es: "Introducción",
          },
          items: [
            {
              label: "Introduction",
              slug: "introduction/introduction",
              translations: {
                es: "Introducción",
              },
            },
          ],
        },
        {
          label: "Project Overview",
          translations: {
            es: "Descripción del Proyecto",
          },
          items: [
            {
              label: "Overview",
              slug: "overview/project-overview",
              translations: {
                es: "Descripción General",
              },
            },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/RadikeCosa/domi-health-docs.git",
        },
      ],
    }),
  ],
});
