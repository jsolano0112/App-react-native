module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
