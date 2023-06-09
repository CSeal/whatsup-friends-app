module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.ios.tsx',
          '.android.tsx',
        ],
        alias: {
          tests: ['./__tests__/'],
          '@components': './src/components',
          '@configs': './src/configs',
          '@screens': './src/screens',
          '@services': './src/services',
          '@layouts': './src/layouts',
          '@hooks': './src/hooks',
          '@themes': './src/themes/',
          '@utils': './src/utils/',
          '@navigations': './src/navigations/',
          '@assets': './src/../assets/',
        },
      },
    ],
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
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
