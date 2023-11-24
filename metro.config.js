const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('mdx');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('./metro.transformer.js'),
  },
};

module.exports = mergeConfig(defaultConfig, config);
