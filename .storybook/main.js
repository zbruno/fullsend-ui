module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
}
