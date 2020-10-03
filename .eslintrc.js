module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/eslint-config-airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': 0,
    'linebreak-style': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
