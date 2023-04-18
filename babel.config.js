module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: ',env',
        blacklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-class-properties',
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
