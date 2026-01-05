// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import codeConstantsPlugin from "./src/utils/remark/code_const.ts";
import { LATEST_COMMANDS_RELEASE, LATEST_MC_RELEASE, LATEST_PAPER_RELEASE } from "./src/utils/versions.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "StrokkCommands",
      favicon: "/patchnotes.png",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Strokkur424/StrokkCommands" },
        { icon: "discord", label: "Discord", href: "https://discord.gg/C3bWEYrtSA" },
      ],
      customCss: ["/src/styles/custom.css"],
      expressiveCode: {
        themes: ["dark-plus", "light-plus"],
      },
      components: {
        Footer: "/src/components/overrides/Footer.astro",
        LastUpdated: "/src/components/overrides/LastUpdated.astro",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "General",
          items: [
            { slug: "common/introduction" },
            { slug: "common/faq" },
            { slug: "common/executors" },
            { slug: "common/arguments" },
            { slug: "common/records" },
            { slug: "common/subcommands" },
            { slug: "common/external-subcommands" },
          ],
        },
        {
          label: "Paper",
          items: [
            { slug: "paper/dependency" },
            { slug: "paper/first-command" },
            { slug: "paper/paper-arguments" },
            { slug: "paper/permissions" },
          ],
        },
        {
          label: "Migration",
          items: [{ slug: "migration/v1-v2" }],
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [
      [
        codeConstantsPlugin,
        {
          constants: {
            LATEST_MC_RELEASE,
            LATEST_PAPER_RELEASE,
            LATEST_COMMANDS_RELEASE,
          },
        },
      ],
    ],
  },
});
