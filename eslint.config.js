import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'vue': vue,
    },
    rules: {
      ...vue.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1
      }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vue.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  }
)