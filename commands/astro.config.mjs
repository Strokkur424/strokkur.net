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
            { slug: "common/suggestions" },
            { slug: "common/requirements" },
            { slug: "common/records" },
            { slug: "common/subcommands" },
            { slug: "common/external-subcommands" },
            { slug: "common/dependency-injection" },
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
          label: "Velocity",
          items: [
            { slug: "velocity/dependency" },
            { slug: "velocity/first-command" },
            { slug: "velocity/permissions" },
          ],
        },
        {
          label: "Migration",
          items: [{ slug: "migration/v1-v2" }],
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            id: "discord:component-embed",
            type: "application/json",
          },
          content: `{"component":{"type":17,"accent_color":16741120,"components":[{"type":9,"components":[{"type":10,"content":"# 🔥 StrokkCommands by <@813141164281692170>\\nA compile-time only, annotation-based command library for Paper and Velocity! Save yourself some time writing Brigadier commands by hand, if you can generate them on the fly!\\n\\nAn example? Sure!\\n\`\`\`java\\n@Command(\\"give\\")\\nclass GiveCommand {\\n\\n  @Executes\\n  void give(\\n    CommandSender sender,\\n    ItemStack item,\\n    @DefaultToExecutor Player target\\n  ) {\\n    target.give(item);\\n    sender.sendRichMessage(\\n      \\"<#ffbbbb><target> has received 1x <item>\\",\\n      Placeholder.component(\\n        \\"target\\",\\n        target.displayName()\\n      ),\\n      Placeholder.component(\\n        \\"item\\",\\n        item.effectiveName()\\n      )\\n    );\\n  }\\n}\\n\`\`\`\\n\\nThis is all you need to create a command with an \`ItemStack\` argument and an optional \`Player\` argument, which defaults to the player who executed the command. There's a lot more to discover, so give it a try yourself! <:MahiruHeart:1520519275574460487>"}],"accessory":{"type":11,"media":{"url":"https://commands.strokkur.net/patchnotes.png"}}},{"type":1,"components":[{"type":2,"style":5,"label":"Documentation","url":"https://commands.strokkur.net/","emoji":{"name":"🔥"}},{"type":2,"style":5,"label":"GitHub","url":"https://commands.strokkur.net/","emoji":{"id":"927433909254369291","name":"github"}},{"type":2,"style":5,"label":"Join the Discord","url":"https://commands.strokkur.net/","emoji":{"id":"1553166325277523968","name":"discord"}}]}]}}`
        }
      ]
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
