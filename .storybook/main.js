module.exports = {
  stories: [
    '../docs/**/*.stories.([tj]sx|mdx)',
    '../src/**/*.stories.([tj]sx|mdx)'
  ],
  addons: [
    '@storybook/preset-typescript', 
    '@storybook/addon-actions/register', 
    '@storybook/addon-storysource', 
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};