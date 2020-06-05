module.exports = {
  stories: ["../src/**/*.story.js"],
  addons: [
    "@storybook/addon-docs/",
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-jest",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
