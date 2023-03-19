const { resolve } = require("path");

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],

  parserOptions: {
    extraFileExtensions: [".vue"],
    ecmaVersion: 12,
    sourceType: "module",
    project: resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    parser: "@typescript-eslint/parser",
  },

  plugins: ["@typescript-eslint", "vue", "import", "prettier"],

  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",

    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 100,
        bracketSameLine: false,
        useTabs: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type"],
        pathGroups: [
          // Types
          {
            pattern: "**/types/**",
            group: "type",
          },
          // Assets
          {
            pattern: "assets/**",
            group: "internal",
            position: "before",
          },
          // Routes
          {
            pattern: "router/**",
            group: "internal",
            position: "before",
          },
          // Composables
          {
            pattern: "composables/**",
            group: "internal",
            position: "before",
          },
          // Components (.tsx extension)
          {
            pattern: "pages/**/*.tsx",
            group: "internal",
          },
          {
            pattern: "components/**/*.vue",
            group: "internal",
          },
          {
            pattern: "**App.vue",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "never",
      },
    ],
    // To have alphabetical order on named imports
    // import { a, b, c } from "foo";
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
        ignoreCase: true,
      },
    ],

    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/define-props-declaration": ["error", "type-based"],
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/padding-line-between-tags": [
      "error",
      [
        { blankLine: "always", prev: "*", next: "*" },
        { blankLine: "never", prev: "li", next: "li" },
      ],
    ],
    "vue/arrow-spacing": "error",
    "vue/no-empty-component-block": "error",

    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE", "PascalCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "are", "should", "has", "have", "can", "did", "will"],
      },
    ],
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
