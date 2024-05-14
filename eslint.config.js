import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Add any custom rules here
    },
  },
];