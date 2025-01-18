import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/valid-template-root": "on", // Disable the rule for multiple root elements in Vue components
    },
    extends: [
      "plugin:vue/vue3-essential", // Use the essential Vue 3 rules
      "eslint:recommended",         // Enable recommended rules for JavaScript
    ],
  },
];