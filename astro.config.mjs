// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pandland.github.io',
  integrations: [
    starlight({
      title: "PandJS",
      credits: true,
      description: "PandJS is a free and open-source runtime.",
      lastUpdated: true,
      titleDelimiter: "-",
      logo: {
        dark: "./src/assets/pandlogo-dark.svg",
        light: "./src/assets/pandlogo-light.svg",
        alt: "PandJS logo",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/pandland/pand",
        }
      ],
      editLink: {
        baseUrl: "https://github.com/pandland/pandland.github.io/edit/main/",
      },
      sidebar: [
        {
          label: "Learn",
          items: [
            { slug: 'guides/getting-started' },
            { slug: 'guides/runtime' },
            { slug: 'guides/modules' },
            { slug: 'guides/timers' },
            { slug: 'guides/buffer' },
            { slug: 'guides/file-system' },
            { slug: 'guides/tcp-sockets' },
            { slug: 'guides/uuid' },
          ],
          //autogenerate: { directory: "guides" },
        },
        //{
        //label: "Reference",
        //autogenerate: { directory: "reference" },
        //},
      ],
      customCss: [
        "@fontsource/prompt/400.css",
        "@fontsource/prompt/600.css",
        "./src/tailwind.css",
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
