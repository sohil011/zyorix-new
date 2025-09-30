import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["**/_archive/**", "**/.next/**", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: { parserOptions: { project: false } },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      // Keep explicit-any as error for real app code; archives are ignored.
      "@typescript-eslint/no-explicit-any": "error"
    }
  }
  ,
  // Per-file overrides
  {
    files: ["next-env.d.ts"],
    rules: { "@typescript-eslint/triple-slash-reference": "off" }
  }
];
