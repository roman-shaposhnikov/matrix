import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  favicon: "img/matrix.ico",
  title: "Matrix",
  tagline: "Добро пожаловать в Матрицу!",

  url: "https://roman-dector.github.io",
  baseUrl: "/matrix",

  // GitHub pages deployment config.
  organizationName: "roman-dector",
  projectName: "matrix",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.config.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Matrix",
      logo: { src: "img/matrix.png" },
      items: [
        {
          type: "docSidebar",
          sidebarId: "wikiSidebar",
          label: "Вики",
          position: "left",
        },
        {
          href: "https://github.com/roman-dector/matrix",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
