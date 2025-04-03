import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config({ ignores: ["dist"] }, prettierConfig, {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,vue}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: vue.configs.base.parser,
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions: [".vue"],
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    vue: vue,
    prettier: prettier,
  },
  rules: {
    ...vue.configs["vue3-recommended"].rules,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
});
