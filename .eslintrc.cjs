module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "sort-exports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off",
    "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
  },
};
