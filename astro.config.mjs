// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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
      social: {
        github: "https://github.com/pandland/pand",
      },
      editLink: {
        baseUrl: "https://github.com/pandland/pandland.github.io/edit/v2/",
      },
      sidebar: [
        {
          label: "Learn",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
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
