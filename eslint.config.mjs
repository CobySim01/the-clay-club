import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Flat config only ignores node_modules by default.
  { ignores: ['.next/**', 'out/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  // Registers the prettier plugin and sets prettier/prettier to 'error'.
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];

export default config;
