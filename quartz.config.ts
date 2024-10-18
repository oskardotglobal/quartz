import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Oskar's Digital Garden",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: false,
    analytics: { provider: "cabin" },
    baseUrl: "oskar.global",
    locale: "en-US",
    ignorePatterns: [
      ".obsidian",
      "_userscripts",
      "_templates",
      "_attachments",
      "Personal",
      "Journal",
      "Firma",
      "**/*excalidraw*",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Jetbrains Mono",
        body: "Jetbrains Mono",
        code: "Jetbrains Mono",
      },
      colors: {
        lightMode: {
          light: "#edfdfb",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#030c0a",
          secondary: "#985fec",
          tertiary: "#e996c1",
          highlight: "rgba(49, 211, 184, 0.35)",
          textHighlight: "#e996c1",
        },
        darkMode: {
          light: "#030c0a",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#edfdfb",
          secondary: "#985fec",
          tertiary: "#e996c1",
          highlight: "rgba(49, 211, 184, 0.35)",
          textHighlight: "#e996c1",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.HardLineBreaks(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
