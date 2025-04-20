// @ts-check
import eslintConfig from '@k4i/config/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // prettier
  ...eslintConfig.base,
  ...eslintConfig.node,
  ...eslintConfig.prettier,
  {
    name: 'Override',
    rules: {
      'import-x/order': 'off',
      'require-await': 'off',
      'node/no-process-exit': 'off',
    },
  },
];
