import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebars: SidebarsConfig = {
  docs: [
    {
      label: "Getting Started",
      type: "category",
      collapsed: false,
      items: [
        "introduction",
        "features",
        "faqs",
        "generator_commands",
        "templates",
      ],
    },
    {
      label: "Guides",
      type: "category",
      collapsed: true,
      link: {
        type: "generated-index",
        slug: "guides",
      },
      items: [
        "aliases",
        "base_class",
        "configuring_your_cli",
        "debugging",
        "error_handling",
        "esm",
        "flag_inheritance",
        "flexible_taxonomy",
        "jit_plugins",
        "json",
        "nsis-installer_customization",
        "releasing",
        "running_programmatically",
        "single_command_cli",
        "testing",
        "themes",
        "user_experience",
      ],
    },
    {
      label: "API Reference",
      type: "category",
      collapsed: true,
      link: {
        type: "generated-index",
        slug: "api_reference",
      },
      items: [
        "commands",
        "args",
        "flags",
        "config",
        "command_discovery_strategies",
        "topics",
        "topic_separator",
        "hooks",
        "plugins",
        "help_classes",
        "performance",
      ],
    },
    {
      label: "Architecture",
      type: "category",
      collapsed: true,
      items: ["command_execution", "plugin_loading"],
    },
    {
      label: "Also See",
      type: "category",
      collapsed: true,
      items: [
        "examples",
        "external_links",
        "related_repos",
        "how_we_work",
        "feedback",
      ],
    },
  ],
};

export default sidebars;
