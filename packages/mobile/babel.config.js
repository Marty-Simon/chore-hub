module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Config plugin - injects env vars at build time
    ['@idealyst/config/plugin', {
      extends: ['../shared/.env'],
    }],
    ['@idealyst/theme/plugin', {
      themePath: '../shared/src/theme.ts',
      autoProcessPaths: [
        '@idealyst/components',
        '@chore-hub/shared',
      ],
    }],
    ['react-native-unistyles/plugin', {
      root: 'src',
      autoProcessPaths: [
        '@idealyst/components',
        '@chore-hub/shared',
      ],
    }],
    'react-native-worklets/plugin',
  ],
};
