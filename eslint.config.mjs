import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import prettiereslint from "eslint-config-prettier";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  prettiereslint,
  {
    rules: {
      // Override / add rule settings here
    },
  },
];