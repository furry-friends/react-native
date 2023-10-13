module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowTypedFunctionExpressions: false },
    ],
    'object-curly-spacing': ['warn', 'always'],
  },
  overrides: [
    {
      files: ['__tests__/**/*.test.*', 'e2e/**/*.test.*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
